const projects = [
  {
    slug: "activity-1",
    title: "Activity #1: Fruitful Designs",
    description:
      "A hand-drawn mango composition created for Fruitful Designs, applying the seven elements and at least three principles of design.",
    category: "Graphic Design",
    type: "Elements and Principles of Design",
    technologies: ["Pencil", "Colored pencils"],
    projectDate: "July 29, 2026",
    year: "2026",
    role: "Creator and illustrator",
    status: "Completed",
    images: ["optimized/ACTIVITY 1.jpg"],
    overview:
      "Fruitful Designs is a drawing activity focused on illustrating a fruit—in this case, a mango—while applying the seven elements of design and at least three design principles to create a visually appealing composition.",
    problem:
      "Create an appealing fruit drawing that demonstrates intentional use of the elements and principles of design.",
    solution:
      "I drew a mango with surrounding leaves, using hand-drawn outlines and color to build a balanced fruit composition.",
    features: [
      "Fruit illustration featuring a mango and leaves",
      "Applies the seven elements of design",
      "Uses at least three principles of design",
      "Hand-drawn outlines with colored-pencil shading",
    ],
  },
  {
    slug: "activity-2",
    title: "Activity #2: Dsign Creatives Logo Design",
    description:
      "A personal designer identity for Dsign Creatives, developed into vertical, horizontal, icon, and badge logo variations.",
    category: "Graphic Design",
    type: "Logo and Brand Identity",
    technologies: ["Adobe Illustrator", "Hand-drawn concept sketch"],
    projectDate: "August 12, 2026",
    year: "2026",
    role: "Creator and designer",
    status: "Completed",
    images: [
      "optimized/IMG_20260831_163515_675.jpg",
      "Screenshot 2026-08-31 155809.png",
    ],
    overview:
      "Dsign Creatives is a personal design identity developed from ideas that reflect my style, strengths, and personality as a designer. The selected concept is presented in multiple logo formats.",
    problem:
      "Create a simple, scalable, and versatile logo identity with a fitting color palette and typography, then adapt it for different uses.",
    solution:
      "I developed logo concepts for Dsign Creatives and prepared variations for different layouts and applications.",
    features: [
      "Vertical logo with stacked elements",
      "Horizontal logo with side-by-side elements",
      "Icon or monogram-only variation",
      "Compact badge or emblem variation",
      "Brand specifications including color and typography",
    ],
  },
  {
    slug: "activity-4",
    title: "Activity #4: Brew Haven Coffee Shop Logo",
    description:
      "A logo and promotional design concept for Brew Haven, a cozy café introducing a seasonal pumpkin spice latte.",
    category: "Graphic Design",
    type: "Coffee Shop Branding",
    technologies: ["Adobe Illustrator", "Hand-drawn concept sketch"],
    projectDate: "September 1, 2026",
    year: "2026",
    role: "Creator and designer",
    status: "Completed",
    images: [
      "optimized/IMG_20260907_234434_533.jpg",
      "Untitled design (3) (1).png",
    ],
    overview:
      "For this activity, I chose Option 1: Brew Haven, a cozy café launching a pumpkin spice latte for the rainy season. The design is intended to feel warm and inviting to students and young professionals who enjoy spending time in coffee shops.",
    problem:
      "Create a logo for the chosen coffee shop brand and a promotional direction that appeals to its audience and highlights the seasonal drink.",
    solution:
      "The concept uses a warm visual direction—orange, brown, and cream—to support Brew Haven's cozy café identity and promote its pumpkin spice latte.",
    features: [
      "Chosen scenario: Brew Haven coffee shop",
      "Seasonal pumpkin spice latte for the rainy season",
      "Warm orange, brown, and cream design palette",
      "Target audience: students and young professionals",
      "Promotional call to action for the new drink",
    ],
  },
  {
    slug: "activity-5",
    title: "Activity #5: VOID THE UNKNOWN Typography Poster",
    description:
      "A brand identity poster for VOID THE UNKNOWN, using typography as the main design element without photos.",
    category: "Graphic Design",
    type: "Typography Poster",
    technologies: ["Adobe Illustrator", "Hand-drawn concept sketch"],
    projectDate: "September 7, 2026",
    year: "2026",
    role: "Creator and designer",
    status: "Completed",
    images: ["optimized/IMG_20260918_230452_735.jpg", "ACITIVITY#5 (1).png"],
    overview:
      "A brand identity poster for VOID THE UNKNOWN, a fictional brand presented through typography rather than photos. The activity focuses on combining typefaces, establishing a clear hierarchy, and arranging text and text-based shapes into a balanced portrait layout.",
    problem:
      "Create a portrait brand poster that communicates a distinct brand personality using typography as the primary visual element.",
    solution:
      "I developed the VOID THE UNKNOWN brand presentation around a logo-style brand name, a tagline, and supporting sample text, using type pairing, hierarchy, alignment, contrast, balance, and spacing.",
    features: [
      "Brand name presented as logo-style typography",
      "Tagline and supporting sample text",
      "At least two typefaces with typographic hierarchy",
      "Typography and text-based shapes; no photos",
      "Portrait poster layout in 18 x 24 inch or A4 format",
      "Applies alignment, contrast, balance, and spacing",
    ],
  },
  {
    slug: "activity-6",
    title: "Activity #6: Portfolio Website Wireframe",
    description:
      "A hand-drawn page map outlining the sections and layouts for a personal portfolio website.",
    category: "Web Development",
    type: "Website Wireframe",
    technologies: ["Paper wireframe"],
    projectDate: "October 19, 2026",
    year: "2026",
    role: "Creator and wireframe designer",
    status: "Design Concept",
    images: ["optimized/IMG_20261026_215833_239.jpg"],
    overview:
      "A portfolio website planning artifact showing proposed home, about, skills, projects, project details, and contact layouts.",
    problem:
      "A portfolio needs a clear structure so visitors can find personal information, skills, projects, and contact details.",
    solution:
      "I sketched a set of page layouts to plan the site's navigation and content before implementation.",
    features: [
      "Home and profile page concepts",
      "Skills, project listing, and project detail layouts",
      "Contact page layout",
    ],
  },
];

const scriptUrl = document.currentScript.src;
const assetUrl = (filename) =>
  new URL(
    `IMG/${filename.split("/").map(encodeURIComponent).join("/")}`,
    scriptUrl,
  ).href;
const projectUrl = (slug) =>
  new URL(
    `projects/${encodeURIComponent(slug)}/${window.location.protocol === "file:" ? "index.html" : ""}`,
    scriptUrl,
  ).href;
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const galleryMarkup = (project, detail = false) => {
  const image = project.images[0];
  const galleryClass = detail
    ? "project-gallery project-detail-gallery"
    : "project-gallery";

  return `
    <div class="${galleryClass}" data-gallery="${escapeHtml(project.slug)}">
      <img
        src="${assetUrl(image)}"
        alt="${escapeHtml(project.title)} screenshot 1 of ${project.images.length}"
        loading="${detail ? "eager" : "lazy"}"
        decoding="async"
        ${detail ? 'fetchpriority="high"' : ""}
        data-gallery-image
      />
      ${
        project.images.length > 1
          ? `<div class="project-gallery-controls">
              <button type="button" data-gallery-step="-1" aria-label="Previous image"><span class="material-symbols-rounded" aria-hidden="true">chevron_left</span></button>
              <span class="project-gallery-count" data-gallery-count aria-live="polite">1 / ${project.images.length}</span>
              <button type="button" data-gallery-step="1" aria-label="Next image"><span class="material-symbols-rounded" aria-hidden="true">chevron_right</span></button>
            </div>`
          : ""
      }
    </div>`;
};

const metadataMarkup = (project) => `
  <dl class="project-meta">
    <div><dt>Project Date</dt><dd>${escapeHtml(project.projectDate)}</dd></div>
    <div><dt>Creator's Role</dt><dd>${escapeHtml(project.role)}</dd></div>
    <div><dt>Project Status</dt><dd><span class="project-status">${escapeHtml(project.status)}</span></dd></div>
  </dl>`;

const technologyMarkup = (project) => `
  <div class="project-technologies">
    <span class="project-tech-label">Technologies Used</span>
    <div class="project-tech-list">
      ${project.technologies.map((technology) => `<span>${escapeHtml(technology)}</span>`).join("")}
    </div>
  </div>`;

const projectGrid = document.querySelector("#projectGrid");
if (projectGrid) {
  const filters = {
    search: document.querySelector("#projectSearch"),
    category: document.querySelector("#projectCategory"),
    year: document.querySelector("#projectYear"),
    type: document.querySelector("#projectType"),
  };
  const count = document.querySelector("#projectResultsCount");
  const emptyState = document.querySelector("#projectEmptyState");
  const categories = [...new Set(projects.map((project) => project.category))];
  const years = [...new Set(projects.map((project) => project.year))].sort(
    (first, second) => second.localeCompare(first),
  );
  const types = [...new Set(projects.map((project) => project.type))].sort();

  const populateSelect = (select, values) => {
    for (const value of values) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.append(option);
    }
  };

  populateSelect(filters.category, categories);
  populateSelect(filters.year, years);
  populateSelect(filters.type, types);

  const renderCard = (project) => `
    <article class="project-card">
      ${galleryMarkup(project)}
      <div class="project-card-content">
        <div class="project-card-heading">
          <h3>${escapeHtml(project.title)}</h3>
          <span class="project-category-badge">${escapeHtml(project.category)}</span>
        </div>
        <p class="project-card-description">${escapeHtml(project.description)}</p>
        ${metadataMarkup(project)}
        ${technologyMarkup(project)}
        <div class="project-card-actions">
          <a class="button button-primary" href="${projectUrl(project.slug)}">
            <span>View Project</span>
            <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
          </a>
        </div>
      </div>
    </article>`;

  const updateProjects = () => {
    const searchTerm = filters.search.value.trim().toLocaleLowerCase();
    const visibleProjects = projects.filter((project) => {
      const searchableContent = [
        project.title,
        project.description,
        project.category,
        project.type,
        project.projectDate,
        project.year,
        project.role,
        project.status,
        ...project.technologies,
      ]
        .join(" ")
        .toLocaleLowerCase();

      return (
        (!searchTerm || searchableContent.includes(searchTerm)) &&
        (!filters.category.value ||
          project.category === filters.category.value) &&
        (!filters.year.value || project.year === filters.year.value) &&
        (!filters.type.value || project.type === filters.type.value)
      );
    });

    projectGrid.innerHTML = visibleProjects.map(renderCard).join("");
    count.textContent = `${visibleProjects.length} ${
      visibleProjects.length === 1 ? "project" : "projects"
    } found`;
    emptyState.hidden = visibleProjects.length > 0;
  };

  let searchTimer;
  filters.search.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(updateProjects, 120);
  });
  [filters.category, filters.year, filters.type].forEach((filter) => {
    filter.addEventListener("change", updateProjects);
  });

  updateProjects();
}

const projectDetail = document.querySelector("#projectDetail");
if (projectDetail) {
  const project = projects.find(
    (item) => item.slug === document.body.dataset.projectSlug,
  );

  if (!project) {
    projectDetail.innerHTML = `
      <div class="about-card">
        <h2 class="about-card-title">Project not found</h2>
        <div class="about-card-content">
          <p>This project could not be found.</p>
          <a class="button button-primary" href="../../index.html#projects">Back to Projects</a>
        </div>
      </div>`;
  } else {
    const detailSection = (title, content) => `
      <section class="about-card">
        <h2 class="about-card-title">${escapeHtml(title)}</h2>
        <div class="about-card-content"><p>${escapeHtml(content)}</p></div>
      </section>`;

    projectDetail.innerHTML = `
      <div class="modal-header about-modal-header">
        <div class="skills-profile">
          <span class="skills-profile-icon material-symbols-rounded" aria-hidden="true">folder_open</span>
          <div>
            <p class="project-detail-kicker">${escapeHtml(project.category)} | ${escapeHtml(project.projectDate)}</p>
            <h1 class="modal-title">${escapeHtml(project.title)}</h1>
            <p>${escapeHtml(project.description)}</p>
          </div>
        </div>
      </div>
      <div class="project-page-body">
        ${galleryMarkup(project, true)}
        <div class="project-detail-copy">
          ${detailSection("Project Overview", project.overview)}
          ${metadataMarkup(project)}
          ${technologyMarkup(project)}
        </div>
        ${detailSection("Problem", project.problem)}
        ${detailSection("Solution", project.solution)}
        <section class="about-card">
          <h2 class="about-card-title">Features</h2>
          <ul class="project-detail-features">
            ${project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}
          </ul>
        </section>
      </div>
      <div class="project-page-actions">
        <a class="button button-outline project-detail-back" href="../../index.html#projects">
          <span class="material-symbols-rounded" aria-hidden="true">arrow_back</span>
          <span>Back to Projects</span>
        </a>
      </div>`;

    document.title = `${project.title} | Daniell Columna`;
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery-step]");
  if (!button) return;

  const gallery = button.closest("[data-gallery]");
  const project = projects.find(
    (item) => item.slug === gallery.dataset.gallery,
  );
  if (!project) return;

  const image = gallery.querySelector("[data-gallery-image]");
  const currentIndex = Number(gallery.dataset.galleryIndex || 0);
  const step = Number(button.dataset.galleryStep);
  const nextIndex =
    (currentIndex + step + project.images.length) % project.images.length;

  gallery.dataset.galleryIndex = String(nextIndex);
  image.src = assetUrl(project.images[nextIndex]);
  image.alt = `${project.title} screenshot ${nextIndex + 1} of ${project.images.length}`;
  gallery.querySelector("[data-gallery-count]").textContent =
    `${nextIndex + 1} / ${project.images.length}`;
});

const navigationLinks = [
  ...document.querySelectorAll('.navigation a[href^="#"]'),
];
const navigationSections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter((section) => section instanceof HTMLElement);

if ("IntersectionObserver" in window && navigationSections.length > 0) {
  const navigationObserver = new IntersectionObserver(
    (entries) => {
      const currentSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (first, second) =>
            first.boundingClientRect.top - second.boundingClientRect.top,
        )[0]?.target;

      if (!currentSection) return;

      navigationLinks.forEach((link) => {
        const isCurrent = link.hash === `#${currentSection.id}`;
        link.classList.toggle("active", isCurrent);
        if (isCurrent) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  navigationSections.forEach((section) => navigationObserver.observe(section));
}

if (window.location.hash === "#projectsModal") {
  window.location.hash = "#projects";
}
