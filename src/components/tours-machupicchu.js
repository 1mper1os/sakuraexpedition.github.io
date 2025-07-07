import trainToursData from './../jsons/train-tours.json';
import "./../css/train-tours.css";

let autoSlideInterval;
const SLIDE_INTERVAL_TIME = 5000;
let touchStartX = 0;
let touchEndX = 0;
let isScrolling = false;

function getCardsPerGroup() {
    const width = window.innerWidth;
    if (width < 480) return 1;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
}

function getCardWidth() {
    const width = window.innerWidth;
    if (width < 480) return Math.min(width - 40, 350); // Móvil pequeño
    if (width < 768) return Math.min(width - 60, 380); // Móvil
    if (width < 1024) return 360; // Tablet
    return 380; // Desktop
}

function createTrainTourCard(tour, index) {
    const cardWidth = getCardWidth();
    return `
        <div class="tour-card animate-fade-in-up" style="animation-delay: ${index * 0.05}s; width: ${cardWidth}px;">
            <img src="${tour.image}" alt="${tour.alt}" class="tour-card-image" onerror="this.onerror=null;this.src='https://placehold.co/400x288/CCCCCC/333333?text=Imagen+No+Disp.'">
            <div class="tour-card-overlay"></div>
            <div class="tour-card-content">
                <span class="tour-badge bg-[#004351]">
                    <i data-lucide="train" class="w-4 h-4"></i> 
                    <span class="badge-text">Tour Tren</span>
                </span>
                <div class="tour-card-info">
                    <p class="tour-location">${tour.location}</p>
                    <h3 class="tour-title">${tour.title}</h3>
                    <p class="tour-price">Desde US$${tour.price}</p>
                    <div class="tour-description-hidden">
                        <p class="tour-description">Duración: ${tour.durationText}. Descubre los impresionantes paisajes andinos, disfruta de un viaje cómodo y seguro, y llega al corazón de una de las maravillas del mundo.</p>
                        <button class="read-more-button" onclick="handleReadMore(event, ${index})">
                            <span>Leer Más</span>
                            <svg class="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
        
    `;
}

export function getTrainToursHTML() {
    return `
        <div class="train-tours-section">
            <div class="section-header">
                <h2 class="section-title">Los mejores tours a Machu Picchu por tren</h2>
                <div class="divider2"></div>
                <div class="section-description">
                    <p class="description-text">
                        Vive una experiencia única hacia <strong class="highlight-red">Machu Picchu viajando en tren</strong> desde Cusco.
                        Descubre los impresionantes paisajes andinos, disfruta de un viaje cómodo y seguro, y llega al corazón de una de las maravillas del mundo.
                        Nuestros <strong class="highlight-orange">tours en tren</strong> están diseñados para brindarte la mejor experiencia. Con guías expertos, atención personalizada y un enfoque en tu seguridad, garantizamos un viaje inolvidable.
                        <strong class="highlight-blue">Reserva ahora</strong> y vive la magia de Machu Picchu con la tranquilidad de un servicio confiable y profesional.
                    </p>
                </div>
            </div>
            
            <div class="carousel-container">
                <button class="carousel-button carousel-button-prev" onclick="window.slideTrainCarousel(-1)" aria-label="Anterior">
                    <i class="bi bi-chevron-left-circle-fill"></i>
                </button>

                <div id="train-carousel" class="train-carousel"></div>

                <button class="carousel-button carousel-button-next" onclick="window.slideTrainCarousel(1)" aria-label="Siguiente">
                    <i class="bi bi-chevron-right-circle-fill"></i>
                </button>
                
                <div class="carousel-indicators" id="carousel-indicators"></div>
            </div>
            <div class="text-center mx-auto">
          <button
            id="ver-mas-destinos"
            class="mt-15 mx-auto bg-gradient-to-r from-[#004351] to-[#004358] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#004451] hover:to-[#004458] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Más Destinos
            <svg class="w-5 h-5 ml-2 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        </div>
    `;
}

export function initTrainToursLogic() {
    const container = document.getElementById("train-carousel");
    if (!container) return;

    const cardsPerGroup = getCardsPerGroup();
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 768 ? 16 : 24;

    // Crear cartas
    const originalCardsHtml = trainToursData.map((tour, idx) => createTrainTourCard(tour, idx)).join("");
    const clonedPrefixHtml = trainToursData.slice(-cardsPerGroup).map((tour, idx) => createTrainTourCard(tour, idx - cardsPerGroup)).join("");
    const clonedSuffixHtml = trainToursData.slice(0, cardsPerGroup).map((tour, idx) => createTrainTourCard(tour, idx + trainToursData.length)).join("");

    container.innerHTML = clonedPrefixHtml + originalCardsHtml + clonedSuffixHtml;

    // Crear indicadores
    createCarouselIndicators();

    setTimeout(() => {
        if (window.lucide) lucide.createIcons();

        const itemFullWidth = cardWidth + gap;
        const initialScrollPosition = itemFullWidth * cardsPerGroup;
        container.scrollLeft = initialScrollPosition;

        updateCarouselIndicators();
        startAutoSlide();
    }, 100);

    // Event listeners
    window.slideTrainCarousel = slideTrainCarousel;
    window.handleReadMore = handleReadMore;
    
    // Touch events para móviles
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Mouse events
    container.addEventListener('mouseenter', pauseAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
    
    // Scroll events
    container.addEventListener('scroll', throttle(updateCarouselIndicators, 100));

    // Resize event
    window.addEventListener('resize', throttle(handleResize, 250));
}

function createCarouselIndicators() {
    const indicatorsContainer = document.getElementById('carousel-indicators');
    if (!indicatorsContainer) return;

    const totalGroups = Math.ceil(trainToursData.length / getCardsPerGroup());
    const indicators = Array.from({ length: totalGroups }, (_, i) => 
        `<button class="carousel-indicator" onclick="goToSlide(${i})" aria-label="Ir a grupo ${i + 1}"></button>`
    ).join('');
    
    indicatorsContainer.innerHTML = indicators;
}

function updateCarouselIndicators() {
    const container = document.getElementById("train-carousel");
    const indicators = document.querySelectorAll('.carousel-indicator');
    if (!container || !indicators.length) return;

    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 768 ? 16 : 24;
    const itemFullWidth = cardWidth + gap;
    const cardsPerGroup = getCardsPerGroup();
    const totalClonedPrefixCards = cardsPerGroup;
    
    const currentIndex = Math.round((container.scrollLeft - (itemFullWidth * totalClonedPrefixCards)) / (itemFullWidth * cardsPerGroup));
    const actualIndex = ((currentIndex % trainToursData.length) + trainToursData.length) % trainToursData.length;
    const indicatorIndex = Math.floor(actualIndex / cardsPerGroup);
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === indicatorIndex);
    });
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    pauseAutoSlide();
}

function handleTouchMove(e) {
    if (isScrolling) return;
    
    touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 10) {
        e.preventDefault();
        isScrolling = true;
    }
}

function handleTouchEnd(e) {
    if (!isScrolling) {
        startAutoSlide();
        return;
    }
    
    const diff = touchStartX - touchEndX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            slideTrainCarousel(1); // Swipe left - next
        } else {
            slideTrainCarousel(-1); // Swipe right - prev
        }
    }
    
    isScrolling = false;
    setTimeout(startAutoSlide, 100);
}

function handleReadMore(event, index) {
    event.stopPropagation();
    // Aquí puedes agregar la lógica para mostrar más detalles del tour
    console.log(`Leer más sobre el tour ${index}:`, trainToursData[index]);
    // Ejemplo: abrir modal, navegar a otra página, etc.
}

function handleResize() {
    const container = document.getElementById("train-carousel");
    if (!container) return;
    
    // Reinicializar el carousel con las nuevas dimensiones
    pauseAutoSlide();
    setTimeout(() => {
        initTrainToursLogic();
    }, 100);
}

function slideTrainCarousel(direction) {
    const container = document.getElementById("train-carousel");
    if (!container) return;

    const cardsPerGroup = getCardsPerGroup();
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 768 ? 16 : 24;
    const itemFullWidth = cardWidth + gap;
    
    pauseAutoSlide();

    const originalDataLength = trainToursData.length;
    const totalClonedPrefixCards = cardsPerGroup;
    const totalClonedSuffixCards = cardsPerGroup;

    let targetScrollLeft = container.scrollLeft + (direction * itemFullWidth * cardsPerGroup);

    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = targetScrollLeft;

    // Infinite loop logic
    if (direction === 1) {
        if (container.scrollLeft >= (itemFullWidth * (originalDataLength + totalClonedPrefixCards - cardsPerGroup))) {
            setTimeout(() => {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = itemFullWidth * totalClonedPrefixCards;
                updateCarouselIndicators();
            }, 600);
        }
    } else {
        if (container.scrollLeft <= (itemFullWidth * totalClonedPrefixCards)) {
            setTimeout(() => {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = itemFullWidth * (originalDataLength + totalClonedPrefixCards - cardsPerGroup);
                updateCarouselIndicators();
            }, 600);
        }
    }

    setTimeout(() => {
        updateCarouselIndicators();
        startAutoSlide();
    }, 100);
}

function goToSlide(index) {
    const container = document.getElementById("train-carousel");
    if (!container) return;

    const cardsPerGroup = getCardsPerGroup();
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 768 ? 16 : 24;
    const itemFullWidth = cardWidth + gap;
    const totalClonedPrefixCards = cardsPerGroup;
    
    pauseAutoSlide();
    
    const targetScrollLeft = itemFullWidth * (totalClonedPrefixCards + (index * cardsPerGroup));
    
    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = targetScrollLeft;
    
    setTimeout(() => {
        updateCarouselIndicators();
        startAutoSlide();
    }, 600);
}

function startAutoSlide() {
    if (window.innerWidth < 768) return; // No auto-slide en móviles
    
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        slideTrainCarousel(1);
    }, SLIDE_INTERVAL_TIME);
}

function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}

function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

export function trainTours() {
    return getTrainToursHTML();
}

export function initTrainTours() {
    initTrainToursLogic();
}

// Expose functions to global scope
window.slideTrainCarousel = slideTrainCarousel;
window.startAutoSlide = startAutoSlide;
window.pauseAutoSlide = pauseAutoSlide;
window.goToSlide = goToSlide;