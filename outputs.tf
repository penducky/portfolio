output "s3_bucket_name" {
  value = aws_s3_bucket.main.id
}

output "cloudfront_dist_id" {
  value = aws_cloudfront_distribution.s3_distribution.id
}