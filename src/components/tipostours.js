import tourData from "./../jsons/tipostours.json";
import "./../css/tipostours.css";

export function getTiposToursHTML() {
  return `
    <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-9 py-10 md:py-16">
      <h2 class="text-center text-4xl font-extrabold text-[#aa252e] mb-2">Tipos de Tours</h2>
      <div class="mx-auto divider5"></div>
      <div id="ttours-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"></div>
    </div>
  `;
}

function createTiposTourCard(tour, index) {
  return `
    <div class="tour-card w-full max-w-sm animate-fade-in-up" style="animation-delay: ${index * 0.1}s;">
      <img src="${tour.image}" alt="${tour.title}" class="tour-card-image">
      <div class="tour-card-overlay"></div>
      <div class="tour-card-content">
        <span class="tour-badge ${tour.badgeClass}">
          <i data-lucide="${tour.icon}" class="w-4 h-4"></i> ${tour.badge}
        </span>
        <p class="text-sm font-light mb-1">${tour.location}</p>
        <h3 class="text-2xl font-bold mb-2 leading-tight">${tour.title}</h3>
        <p class="text-lg font-medium mb-4">${tour.price}</p>
        <div class="tour-description-hidden">
          <p class="text-sm leading-relaxed">${tour.description}</p>
          <button class="read-more-button">
            Read More
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initTiposTours() {
  const container = document.getElementById("ttours-container");
  if (!container) return;

  container.innerHTML = tourData
    .map((tour, index) => createTiposTourCard(tour, index))
    .join("");

  // Lucide render
  setTimeout(() => {
    if (window.lucide) lucide.createIcons();
  }, 0);
}
