import salkantayData from './../jsons/salkantay.json';
import './../css/salkantay.css';

// Funciones auxiliares para generar iconos
function generateSalkantayDifficultyIcons(level) {
    let icons = '';
    const maxDifficulty = 5;
    for (let i = 0; i < maxDifficulty; i++) {
        icons += i < level
            ? '<i class="bi bi-circle-fill" style="color:#004351"></i>'
            : '<i class="bi bi-circle text-gray-400"></i>';
    }
    return icons;
}

function generateSalkantayStarRating(rating) {
    let stars = '';
    const maxRating = 5;
    for (let i = 0; i < maxRating; i++) {
        stars += i < rating
            ? '<i class="bi bi-star-fill text-[#e27e08]"></i>'
            : '<i class="bi bi-star text-gray-400"></i>';
    }
    return stars;
}

function extractSalkantayDiscountPercentage(ribbon) {
    if (!ribbon) return null;
    const match = ribbon.match(/-(\d+)\s*%/);
    return match ? match[1] : null;
}

function hasSalkantayDiscount(tour, index) {
    return index === 0 || tour.ribbon || tour.oldPrice > tour.price;
}

function getSalkantayIconTitle(icon) {
    const iconTitles = {
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
    return iconTitles[icon] || icon;
}

function createSalkantayTourCard(tour, index) {
    const tourHasDiscount = hasSalkantayDiscount(tour, index);
    const discountPercentage = tourHasDiscount ? extractSalkantayDiscountPercentage(tour.ribbon) : null;
    
    // Agregar propiedades por defecto si no existen
    const defaultTour = {
        image: tour.image || "/default-image.jpg",
        alt: tour.alt || tour.title || "Tour Salkantay",
        title: tour.title || "Tour Salkantay",
        days: tour.days || "4 días",
        location: "Cusco - Machu Picchu",
        description: tour.description || "Explora el impresionante sendero Salkantay hasta llegar a Machu Picchu.",
        includes: tour.includes || ["camera", "binoculars", "h-square", "bus-front", "person"],
        difficulty: tour.difficulty || 4,
        rating: tour.rating || 5,
        totalReviews: tour.totalReviews || 20,
        price: tour.price || 899,
        oldPrice: tour.oldPrice || null,
        ribbon: tour.ribbon || null,
        ...tour
    };

    return `
        <div class="salkantay-mb-4 salkantay-animate-slideInUp">
            <div class="salkantay-bg-white salkantay-rounded-lg salkantay-shadow-lg salkantay-overflow-hidden salkantay-card-tour salkantay-h-full salkantay-flex salkantay-flex-col">
                <div class="salkantay-relative">
                    <img src="${defaultTour.image}" class="salkantay-w-full salkantay-h-60 salkantay-object-cover" alt="${defaultTour.alt}">
                    ${tourHasDiscount && discountPercentage ? `<span class="salkantay-discount-badge">${discountPercentage}% OFF</span>` : ''}
                    <span class="salkantay-days-badge"><i class="bi bi-calendar-week-fill salkantay-mr-2"></i> ${defaultTour.days}</span>
                </div>
                <div class="salkantay-p-6 salkantay-flex salkantay-flex-col salkantay-flex-grow">
                    <h5 class="salkantay-text-2xl salkantay-font-bold salkantay-mb-2" style="color:#004351">${defaultTour.title}</h5>
                    <p class="salkantay-text-sm salkantay-mb-2" style="color:#e27e08">
                        <i class="bi bi-geo-alt-fill salkantay-mr-1"></i> ${defaultTour.location}
                    </p>
                    <p class="salkantay-text-gray-600 salkantay-text-sm salkantay-mb-4">${defaultTour.description}</p>
                    <hr class="salkantay-border-gray-200 salkantay-my-4">
                    
                    <p class="salkantay-mb-2 salkantay-text-gray-700">
                        <strong>Incluye:</strong>
                        ${defaultTour.includes.map(icon => 
                            `<i class="bi bi-${icon} salkantay-mr-1" style="color:#004351" title="${getSalkantayIconTitle(icon)}"></i>`
                        ).join("")}
                    </p>
                    
                    <p class="salkantay-mb-2 salkantay-text-gray-700">
                        <strong>Nivel de Dificultad:</strong><br>
                        <span class="salkantay-flex salkantay-gap-1">${generateSalkantayDifficultyIcons(defaultTour.difficulty)}</span>
                    </p>
                    
                    <p class="salkantay-mb-4 salkantay-text-gray-700">
                        <strong>Calificación:</strong><br>
                        <span class="salkantay-flex salkantay-gap-1">${generateSalkantayStarRating(defaultTour.rating)}</span>
                        ${defaultTour.totalReviews ? `<span class="salkantay-text-sm salkantay-text-gray-500 salkantay-ml-2">(${defaultTour.totalReviews} reseñas)</span>` : ''}
                    </p>
                    
                    <div class="salkantay-flex salkantay-justify-end salkantay-items-center salkantay-mt-auto">
                        <div class="salkantay-text-right salkantay-price-display">
                            <span class="salkantay-block salkantay-font-bold salkantay-text-sm">
                                Desde USD <br> 
                                <span class="salkantay-text-3xl salkantay-font-extrabold">$${defaultTour.price}</span>
                            </span>
                            ${defaultTour.oldPrice ? `<small class="salkantay-line-through">antes $${defaultTour.oldPrice}</small>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function getSalkantayHTML() {
    return `
        <section class="salkantay-container salkantay-mx-auto salkantay-py-8 salkantay-px-4">
            <h2 class="salkantay-text-center salkantay-text-4xl salkantay-font-extrabold salkantay-mb-8 salkantay-animate-fadeIn" style="color:#aa252e">
                Aventura Salkantay
            </h2>
            <div class="salkantay-mx-auto salkantay-divider"></div>
            <p class="salkantay-max-w-6xl salkantay-mx-auto salkantay-mb-8 salkantay-text-center salkantay-text-lg salkantay-leading-relaxed salkantay-text-gray-700 salkantay-animate-fadeIn">
                El <b class="salkantay-text-red-600">Salkantay Trek a <strong class="salkantay-text-slate-700">Machu Picchu</strong></b> es una de las rutas de senderismo más impresionantes y populares como alternativa al clásico Camino Inca, ofreciendo una combinación perfecta de aventura, naturaleza y cultura. Esta desafiante travesía atraviesa los paisajes espectaculares de los Andes peruanos, pasando por la majestuosa <strong class="salkantay-text-slate-700">Montaña Salkantay</strong> (la segunda cumbre más alta de la región), bosques nubosos y pueblos remotos.
            </p>
            <div class="salkantay-grid salkantay-grid-cols-1 md:salkantay-grid-cols-2 lg:salkantay-grid-cols-3 salkantay-gap-8" id="salkantay-cards-container"></div>
            <div class="salkantay-text-center salkantay-mx-auto salkantay-mt-8">
                <button
                    id="salkantay-ver-mas-destinos"
                    class="salkantay-mx-auto salkantay-bg-gradient-to-r salkantay-from-red-600 salkantay-to-red-700 salkantay-text-white salkantay-px-8 salkantay-py-4 salkantay-rounded-full salkantay-font-bold salkantay-text-lg salkantay-transition-all salkantay-duration-300 salkantay-shadow-lg hover:salkantay-shadow-xl salkantay-transform hover:salkantay-translate-y-1"
                    style="background: linear-gradient(to right, #aa252e, #8a1f26);"
                >
                    Ver Más Destinos
                    <svg class="salkantay-w-5 salkantay-h-5 salkantay-ml-2 salkantay-inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </section>
    `;
}

export function initSalkantayLogic() {
    const container = document.getElementById("salkantay-cards-container");
    
    if (!container) {
        console.warn('Container "salkantay-cards-container" not found');
        return;
    }

    // Verificar que tenemos datos
    if (!salkantayData || salkantayData.length === 0) {
        console.warn('No Salkantay data available');
        const errorMessage = '<div class="salkantay-text-center salkantay-text-gray-500 salkantay-col-span-full"><p>No hay tours disponibles en este momento.</p><p class="salkantay-text-sm salkantay-mt-2">Por favor, inténtalo más tarde.</p></div>';
        container.innerHTML = errorMessage;
        return;
    }

    // Renderizar solo 3 tours inicialmente
    renderSalkantayTours(salkantayData.slice(0, 3), container);

    // Configurar botones
    setupSalkantayButtons();
}

function renderSalkantayTours(tours, container) {
    if (!container || !tours || tours.length === 0) return;

    // Aplicar transición de fade
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.innerHTML = tours.map((tour, index) => createSalkantayTourCard(tour, index)).join('');
        container.style.opacity = '1';
        
        // Configurar eventos de click para cada tarjeta
        container.querySelectorAll('.salkantay-card-tour').forEach((card, index) => {
            setupSalkantayCardEvents(card, tours[index], index);
        });
    }, 200);
}

function setupSalkantayCardEvents(cardElement, tour, index) {
    if (!cardElement) return;

    cardElement.addEventListener('click', () => handleSalkantayTourCardClick(tour, index));
    cardElement.style.cursor = 'pointer';
    cardElement.setAttribute('role', 'button');
    cardElement.setAttribute('tabindex', '0');
    cardElement.setAttribute('aria-label', `Ver detalles del tour ${tour.title}`);

    // Soporte para teclado
    cardElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSalkantayTourCardClick(tour, index);
        }
    });
}

function setupSalkantayButtons() {
    const verMasButton = document.getElementById('salkantay-ver-mas-destinos');

    if (verMasButton) {
        verMasButton.addEventListener('click', handleSalkantayVerMasClick);
        // Mostrar/ocultar según cantidad de tours
        verMasButton.style.display = salkantayData.length > 3 ? 'block' : 'none';
    } else {
        console.warn('Button "salkantay-ver-mas-destinos" not found');
    }
}

function handleSalkantayVerMasClick() {
    console.log('Ver más destinos Salkantay clicked');

    // Dispatch evento personalizado
    const event = new CustomEvent('salkantayVerMasDestinosClick', {
        detail: {
            action: 'show_more_salkantay_tours',
            totalTours: salkantayData.length,
            currentlyShowing: 3
        }
    });
    document.dispatchEvent(event);

    showAllSalkantayTours();
}

function showAllSalkantayTours() {
    const container = document.getElementById("salkantay-cards-container");
    if (!container) return;

    renderSalkantayTours(salkantayData, container);

    // Ocultar el botón "Ver Más"
    const verMasButton = document.getElementById('salkantay-ver-mas-destinos');
    if (verMasButton) {
        verMasButton.style.display = 'none';
    }

    // Scroll suave hacia las nuevas tarjetas
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleSalkantayTourCardClick(tour, index) {
    console.log('Salkantay tour clicked:', tour.title, 'Index:', index);
    
    // Dispatch evento personalizado
    const event = new CustomEvent('salkantayTourCardClick', {
        detail: { tour, index }
    });
    document.dispatchEvent(event);
}

// Funciones de compatibilidad y exportación
export function salkantay() {
    return getSalkantayHTML();
}

export function initSalkantay() {
    initSalkantayLogic();
}

export function refreshSalkantayCards() {
    initSalkantayLogic();
}

export function getSalkantayData() {
    return salkantayData;
}

export function filterSalkantayTours(filterFn) {
    if (typeof filterFn !== 'function') {
        console.warn('filterSalkantayTours requires a function parameter');
        return;
    }

    const filteredTours = salkantayData.filter(filterFn);
    const container = document.getElementById("salkantay-cards-container");
    
    if (container) {
        renderSalkantayTours(filteredTours, container);
    }
}

export function toggleSalkantayVerMasButton(show = true) {
    const verMasButton = document.getElementById('salkantay-ver-mas-destinos');
    if (verMasButton) {
        verMasButton.style.display = show ? 'block' : 'none';
    }
}

export function isSalkantayVerMasButtonVisible() {
    const verMasButton = document.getElementById('salkantay-ver-mas-destinos');
    return verMasButton && verMasButton.style.display !== 'none';
}

// Funciones adicionales para búsqueda y filtrado
export function searchSalkantayTours(searchTerm) {
    const term = searchTerm.toLowerCase();
    
    return salkantayData.filter(tour => 
        tour.title.toLowerCase().includes(term) ||
        tour.description.toLowerCase().includes(term)
    );
}

export function filterSalkantayToursByPrice(minPrice, maxPrice) {
    return salkantayData.filter(tour => tour.price >= minPrice && tour.price <= maxPrice);
}

export function getDiscountedSalkantayTours() {
    return salkantayData.filter(tour => tour.ribbon || tour.oldPrice > tour.price);
}