// Importar datos y estilos
import toursData from './../jsons/promociones.json';
import "./../css/promociones.css";

let currentDestination = toursData.config.defaultDestination;
const toursByDestination = toursData.toursByDestination;
const destinations = toursData.destinations;
const iconTitles = toursData.iconTitles;


function getIconTitle(icon) {
    return iconTitles[icon] || icon;
}


function generateDifficultyIcons(level) {
    let icons = '';
    for (let i = 0; i < toursData.config.maxDifficulty; i++) {
        icons += i < level
            ? '<i class="bi bi-circle-fill" style="color:#004351"></i>'
            : '<i class="bi bi-circle text-gray-400"></i>';
    }
    return icons;
}


function generateStarRating(rating) {
    let stars = '';
    for (let i = 0; i < toursData.config.maxRating; i++) {
        stars += i < rating
            ? '<i class="bi bi-star-fill text-[#e27e08]"></i>'
            : '<i class="bi bi-star text-gray-400"></i>';
    }
    return stars;
}

function extractDiscountPercentage(ribbon) {
    if (!ribbon) return null;
    const match = ribbon.match(/-(\d+)\s*%/);
    return match ? match[1] : null;
}


function hasDiscount(tour, index) {
    return index === 0 || tour.ribbon || tour.oldPrice > tour.price;
}


function createTourCard(tour, index) {
    const tourHasDiscount = hasDiscount(tour, index);
    const discountPercentage = tourHasDiscount ? extractDiscountPercentage(tour.ribbon) : null;

    return `
        <div class="mb-4 animate-slideInUp">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden card-tour h-full flex flex-col">
                <div class="relative">
                    <img src="${tour.image}" class="w-full h-60 object-cover" alt="${tour.alt}">
                    ${tourHasDiscount && discountPercentage ? `<span class="discount-badge">${discountPercentage}% OFF</span>` : ''}
                    <span class="days-badge"><i class="bi bi-calendar-week-fill mr-2"></i> ${tour.days}</span>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h5 class="text-2xl font-bold mb-2" style="color:#004351">${tour.title}</h5>
                    <p class="text-sm mb-2" style="color:#e27e08">
                        <i class="bi bi-geo-alt-fill mr-1"></i> ${tour.location}
                    </p>
                    <p class="text-gray-600 text-sm mb-4">${tour.description}</p>
                    <hr class="border-gray-200 my-4">
                    
                    <p class="mb-2 text-gray-700">
                        <strong>Incluye:</strong>
                        ${tour.includes.map(icon => 
                            `<i class="bi bi-${icon} mr-1" style="color:#004351" title="${getIconTitle(icon)}"></i>`
                        ).join("")}
                    </p>
                    
                    <p class="mb-2 text-gray-700">
                        <strong>Nivel de Dificultad:</strong><br>
                        <span class="flex gap-1">${generateDifficultyIcons(tour.difficulty)}</span>
                    </p>
                    
                    <p class="mb-4 text-gray-700">
                        <strong>Calificación:</strong><br>
                        <span class="flex gap-1">${generateStarRating(tour.rating)}</span>
                        ${tour.totalReviews ? `<span class="text-sm text-gray-500 ml-2">(${tour.totalReviews} reseñas)</span>` : ''}
                    </p>
                    
                    <div class="flex justify-end items-center mt-auto">
                        <div class="text-right price-display">
                            <span class="block font-bold text-sm">
                                Desde USD <br> 
                                <span class="text-3xl font-extrabold">$${tour.price}</span>
                            </span>
                            ${tour.oldPrice ? `<small class="line-through">antes $${tour.oldPrice}</small>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function updateDestinationTabs(activeDestination) {
    const destinationKeys = Object.keys(destinations);
    
    return destinationKeys.map(dest => {
        const isActive = dest === activeDestination;
        const activeClass = isActive 
            ? 'pb-1 border-b-4 font-bold text-[#004351] border-[#e27e08]' 
            : 'text-gray-700 hover:text-blue-600 transition duration-300';
        
        return `<span class="${activeClass}">
            <a href="#" class="destinos" data-destination="${dest}">${destinations[dest]}</a>
        </span>`;
    }).join('<span class="mx-2">|</span>');
}


function loadToursByDestination(destination) {
    const container = document.getElementById("cards-container");
    const tours = toursByDestination[destination] || [];
    
    if (!container) return;
    
    
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.innerHTML = tours.map((tour, index) => createTourCard(tour, index)).join('');
        container.style.opacity = '1';
    }, toursData.config.fadeTransitionTime);
}


function changeDestination(destination) {
    if (destination && destination !== currentDestination) {
        currentDestination = destination;
        
        
        const destinationTabs = document.getElementById("destination-tabs");
        if (destinationTabs) {
            destinationTabs.innerHTML = updateDestinationTabs(currentDestination);
        }
        
        
        loadToursByDestination(destination);
    }
}


export function getPromocionesHTML() {
    return `
        <section class="container mx-auto py-8 px-4">
            <h2 class="text-center text-4xl font-extrabold mb-8 animate-fadeIn" style="color:#aa252e">
                Promociones y Ofertas
            </h2>
            <div class="mx-auto divider"></div>
            <div class="my-6 text-center text-lg space-x-4 animate-fadeIn" id="destination-tabs">
                ${updateDestinationTabs(currentDestination)}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="cards-container"></div>
        </section>
    `;
}


export function initPromocionesLogic() {
    
    loadToursByDestination(currentDestination);
    
  
    const destinationTabs = document.getElementById("destination-tabs");
    if (destinationTabs) {
        destinationTabs.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('destinos')) {
                const destination = e.target.dataset.destination;
                changeDestination(destination);
            }
        });
    }
}


export function promociones() {
    return getPromocionesHTML(); 
}


export function initPromociones() {
    initPromocionesLogic();
}

export function getAllTours() {
    return Object.values(toursByDestination).flat();
}


export function searchTours(searchTerm) {
    const allTours = getAllTours();
    const term = searchTerm.toLowerCase();
    
    return allTours.filter(tour => 
        tour.title.toLowerCase().includes(term) ||
        tour.location.toLowerCase().includes(term) ||
        tour.description.toLowerCase().includes(term)
    );
}


export function filterToursByPrice(minPrice, maxPrice) {
    const allTours = getAllTours();
    return allTours.filter(tour => tour.price >= minPrice && tour.price <= maxPrice);
}


export function getDiscountedTours() {
    const allTours = getAllTours();
    return allTours.filter(tour => tour.ribbon || tour.oldPrice > tour.price);
}