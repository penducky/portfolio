const data = {
    cloud: {
        color: '#3b82f6',
        tag: 'Cloud Engineer',
        desc: 'Focused on building scalable, secure, and automated infrastructure, specialized in Amazon Web Services (AWS).',
        auxTitle: 'Certifications',
        auxIcon: 'ri-shield-check-line',
        items: [
            { name: "AWS Solutions Architect", detail: "Associate", date: "On progress", icon: "assets/img/icons/aws-saa-c03.png", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=AWS+Certificate" },
            { name: "CS50 Python", detail: "Harvard University", date: "On progress", icon: "assets/img/icons/harvard-university.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=CS50+Certificate" }
        ],
        projects: [
            {
                title: 'Serverless Portfolio',
                date: 'Dec 2025',
                desc: 'Static web hosted in Amazon Web Services.',
                description: `
                    <p>Serverless portfolio website leveraging modern cloud infrastructure and AI-assisted development.</p>
                    <ul>
                        <li><b>Cloud Architecture:</b> Deployed a high-availability static site on Amazon S3, utilizing CloudFront CDN for global caching and HTTPS security.</li>
                        <li><b>CI/CD Automation:</b> Engineered a GitHub Actions pipeline to automatically build and sync code changes to AWS upon repository push.</li>
                        <li><b>Development:</b> Leveraged AI-assisted tooling to accelerate HTML5 frontend prototyping and optimization.</li>
                    </ul>
                `,
                image: 'assets/img/projects/serverless-api.jpg',
                tech: [
                    { name: 'AWS S3', icon: 'assets/img/icons/aws-s3.svg' },
                    { name: 'CloudFront', icon: 'assets/img/icons/aws-cloudfront.svg' },
                    { name: 'Gemini', icon: 'assets/img/icons/gemini.svg' },
                    { name: 'GitHub', icon: 'assets/img/icons/github.svg' },
                    { name: 'HTML5', icon: 'assets/img/icons/html.svg' }
                ],
                link: '#'
            },
            {
                title: 'Premium Vault Content',
                date: 'Dec 2025',
                desc: 'Premium content that can only be accessible by premium users.',
                description: `
                    <p>~</p>
                    <ul>
                        <li>Content</li>
                    </ul>
                `,
                image: 'assets/img/projects/k8s-cluster.jpg',
                tech: [
                    { name: 'AWS S3', icon: 'assets/img/icons/aws-s3.svg' },
                    { name: 'CloudFront', icon: 'assets/img/icons/aws-cloudfront.svg' }
                ],
                link: '#'
            },
            {
                title: 'Coming Soon',
                date: 'Coming Soon',
                desc: 'Coming Soon',
                description: `
                    <p>Coming Soon</p>
                    <ul>
                        <li>Coming Soon</li>
                        <li>Coming Soon</li>
                        <li>Coming Soon</li>
                    </ul>
                `,
                image: 'assets/img/projects/coming-soon.jpg',
                tech: [

                ],
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
                title: 'Homestay Documentary',
                date: 'Dec 2025',
                desc: 'Documentary-style film with focus on homestay experience.',
                description: `
                    <p>An immersive documentary exploring the cultural nuances and human connections formed through homestay living. The film captures authentic moments of hospitality and exchange.</p>
                    <ul>
                        <li>Features intimate, unscripted interviews with hosts and travelers.</li>
                        <li>Soundscape design incorporating on-location ambient audio.</li>
                        <li>Warm, inviting color grade to reflect the themes of home and belonging.</li>
                    </ul>
                `,
                image: 'assets/img/projects/tech-review.jpg',
                tech: [
                    { name: 'DaVinci Resolve', icon: 'assets/img/icons/davinci-resolve.svg' }
                ],
                link: '#'
            },
            {
                title: 'Short Movie "Be Found"',
                date: 'Aug 2024',
                desc: '27-minute short movie with full production team.',
                description: `
                    <p>A narrative short film produced with a complete crew, telling a story of loss and discovery. This project involved complex production logistics and an extensive post-production phase.</p>
                    <ul>
                        <li>Collaborated with a full production team including DoP and Sound Recordists.</li>
                        <li>Managed the entire post-production workflow from assembly to final master.</li>
                        <li><strong>Awards:</strong> Selected for local film festival screening.</li>
                    </ul>
                `,
                image: 'assets/img/projects/corporate-doc.jpg',
                tech: [
                    { name: 'DaVinci Resolve', icon: 'assets/img/icons/davinci-resolve.svg' }
                ],
                link: 'https://www.youtube.com/watch?v=seYLOdzR3Xw'
            },
            {
                title: 'VFx Project "Home"',
                date: 'Jun 2019',
                desc: 'A visual effects sequence created for the live stage performance to visualize the impossible.',
                description: `
                    <p>I was responsible in narrating, directing, shooting, and editing all of the scene in this project. Designed as an immersive narrative bridge, this video utilized heavy VFX to depict the "impossible" moments of the script. It allowed the storytelling to transcend the physical stage, maintaining audience immersion while the crew reset behind the curtain.</p>
                `,
                image: 'assets/img/projects/short-film.jpg',
                tech: [
                    { name: 'Premiere Pro', icon: 'assets/img/icons/adobe-premiere-pro.svg' },
                    { name: 'After Effects', icon: 'assets/img/icons/adobe-after-effects.svg' }
                ],
                link: '#'
            },
            {
                title: 'Coming Soon',
                date: 'Coming Soon',
                desc: 'Coming Soon',
                description: 'Coming Soon',
                image: 'assets/img/projects/coming-soon.jpg',
                tech: [

                ],
                link: '#'
            },
            {
                title: 'Coming Soon',
                date: 'Coming Soon',
                desc: 'Coming Soon',
                description: 'Coming Soon',
                image: 'assets/img/projects/coming-soon.jpg',
                tech: [

                ],
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
            { name: "Bachelor of Architecture", detail: "Bandung Institute of Technology", date: "Sep 2025", icon: "assets/img/icons/itb.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=Architecture+Degree" },
            { name: "Sustainable Project Management", detail: "Revit & ArchiCAD", date: "Certified 2024", icon: "assets/img/icons/bim.svg", certImage: "https://placehold.co/600x400/1a1a1a/FFF?text=BIM+Certificate" }
        ],
        projects: [
            {
                title: 'P-LAR Padalarang',
                date: 'May 2025',
                desc: 'Mixed-use Housing in Padalarang',
                description: `
                    <p>Mixed-use housing development featuring inclusive commercial and public spaces integrated with public transportation. The public facilities provided by P-LAR include a jogging track, basketball court, badminton court, climbing wall, gym, and park, among others. Meanwhile, the commercial area is mostly designated for small local businesses.</p>
                `,
                image: 'assets/img/projects/p-lar.png',
                tech: [
                    { name: 'Autodesk Revit', icon: 'assets/img/icons/autodesk-revit.svg' },
                    { name: 'Grasshopper 3D', icon: 'assets/img/icons/grasshopper.svg' },
                    { name: 'Rhino 3D', icon: 'assets/img/icons/rhino.svg' },
                    { name: 'D5 Render', icon: 'assets/img/icons/d5-render.svg' }
                ],
                link: '#'
            },
            {
                title: 'Aria Hotel',
                date: 'Jun 2024',
                desc: 'Three-star hotel focusing on a design that allows air to flow through almost all parts of the building.',
                description: `
                    <p>Passive Cooling: </p>
                    <ul>
                        <li><b>Airflow Management: </b>The facade's shape is designed to deflect airflow to pass through corridors, helping to lower the building's temperature without extra energy.</li>
                        <li><b>Void Utilization: </b>Voids are critical in applying passive cooling, as they help carry hot air (which naturally rises) out of the building with the assistance of incoming airflow. This reduces energy needs while maintaining thermal comfort.</li>
                        <li><b>Solar Panel Implementation: </b>Photovoltaic panels on the roof reduce heat absorption and convert the absorbed heat into electrical energy, making the design environmentally friendly and reducing electricity costs.</li>
                    </ul>
                `,
                image: 'assets/img/projects/aria-hotel.jpg',
                tech: [
                    { name: 'Autodesk Revit', icon: 'assets/img/icons/autodesk-revit.svg' },
                    { name: 'Grasshopper 3D', icon: 'assets/img/icons/grasshopper.svg' },
                    { name: 'Rhino 3D', icon: 'assets/img/icons/rhino.svg' },
                    { name: 'Lumion', icon: 'assets/img/icons/lumion.svg' }
                ],
                link: '#'
            },
            {
                title: 'Ruang Raga Cicendo',
                date: 'Jan 2025',
                desc: 'Multipurpose building to address the issues of slum areas, health, and economy in the Cicendo area.',
                description: `
                    <p>Design principles (Design for Health & Inclusivity): </p>
                    <ul>
                        <li><b>Health: </b>Maximizing green open space, maximizing northern and southern facing sides to reduce direct sunlight, using a block arrangement for cross-ventilation, providing a vertical garden on eastern and western sides, and providing public sports facilities. A temporary waste disposal area is also included to support cleanliness.</li>
                        <li><b>Inclusivity: </b>Designing the building to face and be 'open' to Jalan Aruna and Alun-Alun Cicendo, providing commercial space (workshops, auto parts shops, food court) to accommodate street vendors, and including sports facilities for all ages and genders. A ramp is integrated with the courtyard stairs for the elderly and disabled, and all floors are accessible by lift.</li>
                    </ul>
                `,
                image: 'assets/img/projects/ruang-raga-cicendo.jpg',
                tech: [
                    { name: 'Autodesk Revit', icon: 'assets/img/icons/autodesk-revit.svg' },
                    { name: 'Rhino 3D', icon: 'assets/img/icons/rhino.svg' },
                    { name: 'Lumion', icon: 'assets/img/icons/lumion.svg' }
                ],
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
        auxList.innerHTML += `
                    <div class="info-card-grid" onclick="openCertModal(${index})">
                        <div class="info-icon-strip">
                            <img src="${item.icon}" class="local-icon-sm" alt="icon" />
                        </div>
                        <div class="info-content">
                            <div class="info-title">${item.name}</div>
                            <div class="info-detail">${item.detail}</div>
                            ${item.date ? `<div class="info-date-sm">${item.date}</div>` : ''}
                        </div>
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

// Carousel State
let currentSlide = 0;
let carouselProjectCount = 0;

function renderProjects(projects) {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';

    // Reset state
    currentSlide = 0;
    carouselProjectCount = projects.length;

    // Check if Carousel is needed
    if (projects.length > 3) {
        container.style.display = 'block'; // Override grid for carousel container
        container.classList.remove('project-grid-area'); // Remove grid class to avoid conflicts

        // Generate Cards HTML
        const cardsHtml = projects.map((p, index) => createCardHtml(p, index, true)).join('');

        // Generate Dots HTML
        // Number of dots = number of possible start positions? Or simple pages? 
        // User asked for "scroll 1 card at a time". 
        // Max slide index = Length - Visible(3). e.g. 5 items -> index 0, 1, 2. (0 shows 1-3, 1 shows 2-4, 2 shows 3-5).
        const maxIndex = projects.length - 3;
        let dotsHtml = '';
        for (let i = 0; i <= maxIndex; i++) {
            dotsHtml += `<div class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`;
        }

        const carouselHtml = `
            <div class="carousel-wrapper">
                <button class="nav-arrow left" id="prevBtn" onclick="moveSlide(-1)"><i class="ri-arrow-left-s-line"></i></button>
                <div class="carousel-track-container">
                    <ul class="carousel-track" id="track">
                        ${cardsHtml}
                    </ul>
                </div>
                <button class="nav-arrow right" id="nextBtn" onclick="moveSlide(1)"><i class="ri-arrow-right-s-line"></i></button>
                <div class="carousel-dots" id="carouselDots">
                    ${dotsHtml}
                </div>
            </div>
        `;

        container.innerHTML = carouselHtml;
        updateCarousel(); // Initialize arrow state

    } else {
        // Standard Grid Layout
        container.style.display = 'grid';
        container.classList.add('project-grid-area');

        const html = projects.map((p, index) => createCardHtml(p, index, false)).join('');
        container.innerHTML = html;
    }
}

function createCardHtml(p, index, isCarousel) {
    const techIcons = p.tech.map(t => {
        return `
            <div class="tech-item" data-tooltip="${t.name}">
                <img src="${t.icon}" class="tech-icon" alt="${t.name}" />
            </div>
        `;
    }).join('');

    // If carousel, add flex sizing styles inline or class
    // Calc width: (100% - (GAP * 2)) / 3. Gap is 1.25rem.
    // Ensure height: 100% to fill the flex stretch
    const carouselStyle = isCarousel ? 'style="width: calc((100% - 2.5rem) / 3); flex-shrink: 0;"' : '';

    return `
        <div class="card project-card" ${carouselStyle} onclick="openProjectModal(${index})">
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
}

function moveSlide(direction) {
    const track = document.getElementById('track');
    const maxIndex = carouselProjectCount - 3; // 3 items visible

    currentSlide += direction;

    // Bounds Check
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > maxIndex) currentSlide = maxIndex;

    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('track');
    const dots = document.querySelectorAll('.dot');

    // Move Track
    // 1 item width including gap = (100% / 3) approx? 
    // Precise shift: Card Width + Gap. 
    // Card Width is calc((100% - 2.5rem)/3). Gap is 1.25rem.
    // Total unit = (100% - 2.5rem)/3 + 1.25rem 
    //            = (100% - 2.5rem + 3.75rem) / 3 
    //            = (100% + 1.25rem) / 3

    // Easier way: translate percentage of the TRACK width? No, track width matches container.
    // Translate - (Card+Gap) * index.
    // Let's use CSS var or calculation.
    // width of one item + gap = calc((100% + 1.25rem) / 3) ??
    // Let's rely on percentage logic if possible.
    // If we move 33.333% + gap? It's complex with gap.

    // Simple math: (100% + gap) / 3  * currentSlide.
    // Since gap is 1.25rem (20px).
    const gap = 1.25; // rem
    // translateX formula: -1 * currentSlide * ( (100% + 1.25rem) / 3 )

    track.style.transform = `translateX(calc(-1 * ${currentSlide} * ((100% + ${gap}rem) / 3)))`;

    // Update Dots
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });

    // Update Card Focus/Blur State
    // Visible range: currentSlide to currentSlide + 2 (3 items)
    const cards = Array.from(track.children);
    const visibleStart = currentSlide;
    const visibleEnd = currentSlide + 2;

    cards.forEach((card, index) => {
        if (index >= visibleStart && index <= visibleEnd) {
            // In View
            card.classList.remove('non-visible');
        } else {
            // Out of View
            card.classList.add('non-visible');
        }
    });

    // Update Arrows
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const maxIndex = carouselProjectCount - 3;

    if (prevBtn) {
        if (currentSlide <= 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }
    }

    if (nextBtn) {
        if (currentSlide >= maxIndex) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }
}

// --- Modal Logic ---

function openCertModal(index) {
    const item = data[currentActiveRole].items[index];
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-body-content">
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
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

function openProjectModal(index) {
    const project = data[currentActiveRole].projects[index];
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <img src="${project.image}" class="modal-img" alt="${project.title}">
        <div class="modal-body-content">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <span>${project.date}</span>
            </div>
            <div class="modal-desc-rich">${project.description}</div>
            <a href="${project.link}" target="_blank" class="modal-action-btn">
                View Project <i class="ri-arrow-right-up-line"></i>
            </a>
        </div>
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
