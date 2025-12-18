const data = {
    cloud: {
        color: '#3b82f6',
        tag: 'Cloud Engineering & Security',
        desc: 'Specializing in AWS infrastructure and security. I build scalable backends and automate deployment pipelines using Python and Terraform.',
        auxTitle: 'Certifications',
        auxIcon: 'ri-shield-check-line',
        items: [
            { name: "AWS Solutions Architect", detail: "Associate", date: "Sep 2025", icon: "assets/img/icons/aws.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=AWS+Certificate" },
            { name: "CS50 Python", detail: "Harvard University", date: "June 2025", icon: "assets/img/icons/python.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=CS50+Certificate" }
        ],
        projects: [
            {
                title: 'Serverless API Gateway',
                date: 'Sep 2025',
                desc: 'Scalable REST API built with Lambda, API Gateway, and DynamoDB.',
                image: 'assets/img/projects/serverless-api.jpg',
                tech: ['assets/img/icons/aws.svg', 'assets/img/icons/python.svg', 'assets/img/icons/terraform.svg'],
                link: '#'
            },
            {
                title: 'K8s Cluster Config',
                date: 'Aug 2025',
                desc: 'Automated Kubernetes cluster setup with monitoring and logging.',
                image: 'assets/img/projects/k8s-cluster.jpg',
                tech: ['assets/img/icons/kubernetes.svg', 'assets/img/icons/linux.svg'],
                link: '#'
            },
            {
                title: 'Security Auditor',
                date: 'July 2025',
                desc: 'Python script to audit IAM roles and S3 bucket policies.',
                image: 'assets/img/projects/security-auditor.jpg',
                tech: ['assets/img/icons/python.svg', 'assets/img/icons/security.svg'],
                link: '#'
            }
        ]
    },
    video: {
        color: '#ec4899',
        tag: 'Video Production & VFX',
        desc: 'Crafting compelling visual narratives through rhythmic editing. Experienced in commercial cuts, motion graphics, and narrative storytelling.',
        auxTitle: 'Core Competencies',
        auxIcon: 'ri-clapperboard-line',
        items: [
            { name: "Narrative Storytelling", detail: "Expertise", icon: "assets/img/icons/film.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=Storytelling+Portfolio" },
            { name: "Sound Design", detail: "Pro Tools / Audition", icon: "assets/img/icons/sound.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=Sound+Design+Reel" },
            { name: "Color Grading", detail: "DaVinci Resolve", icon: "assets/img/icons/color.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=Color+Grading+Work" }
        ],
        projects: [
            {
                title: 'Tech Review Series',
                date: 'Oct 2025',
                desc: 'Fast-paced edits with motion tracking text and dynamic transitions.',
                image: 'assets/img/projects/tech-review.jpg',
                tech: ['assets/img/icons/premiere.svg', 'assets/img/icons/aftereffects.svg'],
                link: '#'
            },
            {
                title: 'Corporate Doc',
                date: 'June 2025',
                desc: '15-minute documentary with focus on interview narrative flow.',
                image: 'assets/img/projects/corporate-doc.jpg',
                tech: ['assets/img/icons/camera.svg', 'assets/img/icons/mic.svg'],
                link: '#'
            },
            {
                title: 'Short Film "Echoes"',
                date: 'Feb 2025',
                desc: 'Award-winning short. Handled full post-production pipeline.',
                image: 'assets/img/projects/short-film.jpg',
                tech: ['assets/img/icons/film.svg', 'assets/img/icons/davinci.svg'],
                link: '#'
            }
        ]
    },
    arch: {
        color: '#f59e0b',
        tag: 'Architectural Design',
        desc: 'Bridging the physical and digital worlds. Focused on sustainable urban planning, BIM methodologies, and computational design.',
        auxTitle: 'Education',
        auxIcon: 'ri-graduation-cap-line',
        items: [
            { name: "Bachelor of Architecture", detail: "Bandung Institute of Technology", date: "Sep 2025", icon: "assets/img/icons/university.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=Architecture+Degree" },
            { name: "BIM Proficiency", detail: "Revit & ArchiCAD", date: "Certified 2024", icon: "assets/img/icons/bim.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=BIM+Certificate" }
        ],
        projects: [
            {
                title: 'Sustainable Housing',
                date: 'May 2025',
                desc: 'Residential complex design focusing on passive cooling.',
                image: 'assets/img/projects/housing.jpg',
                tech: ['assets/img/icons/revit.svg', 'assets/img/icons/autocad.svg'],
                link: '#'
            },
            {
                title: 'Urban Park Revamp',
                date: 'Apr 2025',
                desc: 'Landscape project integrating flood control systems.',
                image: 'assets/img/projects/park.jpg',
                tech: ['assets/img/icons/sketchup.svg', 'assets/img/icons/lumion.svg'],
                link: '#'
            },
            {
                title: 'Minimalist Office',
                date: 'Jan 2025',
                desc: 'High-rise concept utilizing steel structure.',
                image: 'assets/img/projects/office.jpg',
                tech: ['assets/img/icons/rhino.svg', 'assets/img/icons/grasshopper.svg'],
                link: '#'
            }
        ]
    }
};

let currentActiveRole = 'cloud';

function setRole(roleKey) {
    currentActiveRole = roleKey;
    const roleData = data[roleKey];
    const root = document.documentElement;

    root.style.setProperty('--accent', roleData.color);

    // Update Active Class
    const btns = document.querySelectorAll('.role-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-role="${roleKey}"]`).classList.add('active');

    // Move Pillow
    movePill(roleKey);

    // Trigger Animations
    triggerAnimation('descContent');
    triggerAnimation('auxContent');
    triggerAnimation('projectsContainer');

    // Update Content
    document.getElementById('roleTag').textContent = roleData.tag;
    document.getElementById('roleTag').style.color = roleData.color;
    document.getElementById('roleDescription').textContent = roleData.desc;

    // Update Aux List
    const auxHeader = document.getElementById('auxHeader');
    const auxList = document.getElementById('auxList');

    auxHeader.innerHTML = `<i class="${roleData.auxIcon}"></i> ${roleData.auxTitle}`;
    auxList.innerHTML = '';

    roleData.items.forEach((item, index) => {
        const dateHtml = item.date
            ? `<div class="info-right"><div class="info-date">${item.date}</div></div>`
            : '';

        // Added onclick handler
        auxList.innerHTML += `
                    <div class="info-item" style="cursor: pointer;" onclick="openCertModal(${index})">
                        <div class="info-left">
                            <img src="${item.icon}" class="local-icon-sm" alt="icon" />
                            <div>
                                <div style="font-weight:600; font-size:0.95rem;">${item.name}</div>
                                <div style="font-size:0.8rem; color:var(--text-muted)">${item.detail}</div>
                            </div>
                        </div>
                        ${dateHtml}
                    </div>
                `;
    });

    renderProjects(roleData.projects);
}

function movePill(roleKey) {
    const bg = document.getElementById('toggleBg');
    let transformValue = '0%';
    if (roleKey === 'video') transformValue = '100%';
    if (roleKey === 'arch') transformValue = '200%';
    bg.style.transform = `translateX(${transformValue})`;
}

function triggerAnimation(elementId) {
    const el = document.getElementById(elementId);
    el.classList.remove('animate-enter');
    void el.offsetWidth;
    el.classList.add('animate-enter');
}

function renderProjects(projects) {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';

    projects.forEach((p, index) => {
        const techIcons = p.tech.map(t => {
            // Extract name from path: assets/img/icons/aws.svg -> aws
            const fileName = t.split('/').pop().split('.')[0];
            // Simple Capitalization
            const toolTipText = fileName.charAt(0).toUpperCase() + fileName.slice(1);

            return `
                <div class="tech-item" data-tooltip="${toolTipText}">
                    <img src="${t}" class="tech-icon" alt="${toolTipText}" />
                </div>
            `;
        }).join('');

        // Changed anchor to div with onclick
        const html = `
                    <div class="card project-card" style="cursor: pointer;" onclick="openProjectModal(${index})">
                        <div class="project-thumb" style="background-image: url('${p.image}')"></div>
                        <div class="project-content">
                            <div class="project-top">
                                <h3 class="project-title">${p.title}</h3>
                                <span class="project-date">${p.date}</span>
                            </div>
                            <p class="project-desc">${p.desc}</p>
                            <div class="project-footer">
                                ${techIcons}
                            </div>
                        </div>
                    </div>
                `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// --- Modal Logic ---

function openCertModal(index) {
    const item = data[currentActiveRole].items[index];
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2 class="modal-title">${item.name}</h2>
        <div class="modal-meta">
            ${item.date ? `<span>${item.date}</span>` : ''}
            <span>${item.detail}</span>
        </div>
        <img src="${item.certImage}" class="modal-img" alt="${item.name}">
        <p class="modal-desc">
            Detailed information about this certification or achievement would go here. 
            This demonstrates proficiency in the subject matter.
        </p>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

function openProjectModal(index) {
    const project = data[currentActiveRole].projects[index];
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <img src="${project.image}" class="modal-img" alt="${project.title}">
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-meta">
            <span>${project.date}</span>
        </div>
        <p class="modal-desc">${project.desc} <br><br> 
           This project showcases skills in full-stack development and design. 
           It was built using modern technologies to ensure scalability and performance.
        </p>
        <a href="${project.link}" target="_blank" class="modal-action-btn">
            View Project <i class="ri-arrow-right-up-line"></i>
        </a>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal(event) {
    // If event is passed (click on overlay), stop if it propagated from content
    // But content has stopPropagation, so clicking overlay works.
    document.getElementById('modalOverlay').classList.remove('active');
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize
setRole('cloud');
