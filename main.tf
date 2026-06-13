locals {
  project_name = "tf-portfolio"
  domain_name  = "penducky.click"
}

provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = {
      Project   = local.project_name
      Terraform = true
    }
  }
}

data "aws_route53_zone" "penducky" {
  name = local.domain_name
}

## S3 BUCKET FOR STATIC WEBSITE HOSTING ##
resource "aws_s3_bucket" "main" {
  bucket = "penducky-portfolio-s3-bucket"
  force_destroy = true

  tags = {
    Name = "penducky-portfolio-s3-bucket"
  }
}

data "aws_iam_policy_document" "origin_bucket_policy" {
  statement {
    sid    = "AllowCloudFrontServicePrincipalReadOnly"
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.main.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.s3_distribution.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "main" {
  bucket = aws_s3_bucket.main.bucket
  policy = data.aws_iam_policy_document.origin_bucket_policy.json
}


## ACM CERTIFICATE FOR CLOUDFRONT ##
resource "aws_acm_certificate" "cert" {
  domain_name       = local.domain_name
  subject_alternative_names = ["*.${local.domain_name}"]
  validation_method = "DNS"

  tags = {
    Name = "penducky-portfolio-acm-certificate"
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.penducky.zone_id
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert : record.fqdn]
}


## CLOUDFRONT DISTRIBUTION ##
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.main.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.s3_distribution.id
    origin_id                = "S3-origin"
  }

  enabled             = true
  default_root_object = "index.html"

  aliases = ["www.${local.domain_name}"]

  default_cache_behavior {
    cache_policy_id   = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-origin"
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }


  tags = {
    Name = "penducky-portfolio-cloudfront-distribution"
  }
}

resource "aws_cloudfront_origin_access_control" "s3_distribution" {
  name                              = "penducky-portfolio-s3-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_origin_access_identities" "example" {}


## ROUTE53 RECORDS ##
resource "aws_route53_record" "A" {
  for_each = toset([local.domain_name, "www.${local.domain_name}"])

  zone_id = data.aws_route53_zone.penducky.zone_id
  name    = each.key
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}