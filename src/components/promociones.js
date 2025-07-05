import toursData from './../jsons/promociones.json';
import "./../css/promociones.css";

function getIconTitle(icon) {
    const titles = {
        "camera": "Cámara",
        "binoculars": "Binoculares",
        "train-front": "Tren",
        "h-square": "Hotel",
        "bus-front": "Bus",
        "person": "Guía",
        "airplane": "Avión",
        "utensils": "Comida",
        "ship": "Bote"
    };
    return titles[icon] || icon;
}

function generateDifficultyIcons(level) {
    let icons = '';
    for (let i = 0; i < 5; i++) {
        icons += i < level
            ? '<i class="bi bi-circle-fill" style="color:#004351"></i>'
            : '<i class="bi bi-circle text-gray-400"></i>';
    }
    return icons;
}

function generateStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating
            ? '<i class="bi bi-star-fill text-[#e27e08]"></i>'
            : '<i class="bi bi-star text-gray-400"></i>';
    }
    return stars;
}

function createTourCard(tour, index) {
    const hasDiscount = index === 0;
    const discountPercentage = hasDiscount && tour.ribbon
        ? tour.ribbon.match(/-(\d+)\s*%/)?.[1]
        : null;

    return `
        <div class="mb-4 animate-slideInUp">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden card-tour h-full flex flex-col">
                <div class="relative">
                    <img src="${tour.image}" class="w-full h-60 object-cover" alt="${tour.alt}">
                    ${hasDiscount && discountPercentage ? `<span class="discount-badge">${discountPercentage}% OFF</span>` : ''}
                    <span class="days-badge"><i class="bi bi-calendar-week-fill mr-2"></i> ${tour.days}</span>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h5 class="text-2xl font-bold mb-2" style="color:#004351">${tour.title}</h5>
                    <p class="text-sm mb-2" style="color:#e27e08"><i class="bi bi-geo-alt-fill mr-1"></i> ${tour.location}</p>
                    <p class="text-gray-600 text-sm mb-4">${tour.description}</p>
                    <hr class="border-gray-200 my-4">
                    <p class="mb-2 text-gray-700"><strong>Incluye:</strong>
                        ${tour.includes.map(icon => `<i class="bi bi-${icon} mr-1" style="color:#004351" title="${getIconTitle(icon)}"></i>`).join("")}
                    </p>
                    <p class="mb-2 text-gray-700"><strong>Nivel de Dificultad:</strong><br>
                        <span class="flex gap-1">${generateDifficultyIcons(tour.difficulty)}</span>
                    </p>
                    <p class="mb-4 text-gray-700"><strong>Calificación:</strong><br>
                        <span class="flex gap-1">${generateStarRating(tour.rating)}</span>
                    </p>
                    <div class="flex justify-end items-center mt-auto">
                        <div class="text-right price-display">
                            <span class="block font-bold text-sm">Desde USD <br> 
                                <span class="text-3xl font-extrabold">$${tour.price}</span></span>
                            <small class="line-through">antes $${tour.oldPrice}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function getPromocionesHTML() {
    return `
        <section class="container mx-auto py-8 px-4">
            <h2 class="text-center text-4xl font-extrabold mb-8 animate-fadeIn" style="color:#aa252e">Promociones y Ofertas</h2>
            <div class="mx-auto divider"></div>
            <div class="my-6 text-center text-lg space-x-4 animate-fadeIn">
                <span class="pb-1 border-b-4 font-bold text-blue-600 border-yellow-500 hover:text-blue-800 transition duration-300">
                    <a href="#" class="destinos">Cusco</a>
                </span>
                <span>|</span><a href="#" class="destinos text-gray-700 hover:text-blue-600 transition duration-300">Lima</a>
                <span>|</span><a href="#" class="destinos text-gray-700 hover:text-blue-600 transition duration-300">Puno</a>
                <span>|</span><a href="#" class="destinos text-gray-700 hover:text-blue-600 transition duration-300">Arequipa</a>
                <span>|</span><a href="#" class="destinos text-gray-700 hover:text-blue-600 transition duration-300">Selva</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="cards-container"></div>
        </section>
    `;
}

export function initPromocionesLogic() {
    const container = document.getElementById("cards-container");
    if (container) {
        container.innerHTML = toursData.map((tour, index) => createTourCard(tour, index)).join('');
    }
}
export function promociones() {
  return getPromocionesHTML(); 
}

export function initPromociones() {
  initPromocionesLogic();
}
