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
    if (width < 480) return Math.min(width - 40, 350);
    if (width < 768) return Math.min(width - 60, 380);
    if (width < 1024) return 360;
    return 380;
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

            <div class="flex flex-col sm:flex-row justify-between items-center p-6 space-y-4 sm:space-y-0">
 
                <div class="flex items-center text-[#e27e08] space-x-2">
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>

                    <span class="font-semibold text-xl tracking-tight text-[#004351]">Tours más recomendados</span>
                </div>


                <div>
                    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-[#004351] border-[#004351] hover:border-transparent hover:text-white hover:bg-[#e27e08] transition-colors duration-300">
                    Ver Más
                    </a>
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

            
        </div>
    `;
}

export function initTrainToursLogic() {
    const container = document.getElementById("train-carousel");
    if (!container) return;

    const cardsPerGroup = getCardsPerGroup();
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 768 ? 16 : 24;

    const originalCardsHtml = trainToursData.map((tour, idx) => createTrainTourCard(tour, idx)).join("");
    const clonedPrefixHtml = trainToursData.slice(-cardsPerGroup).map((tour, idx) => createTrainTourCard(tour, idx - cardsPerGroup)).join("");
    const clonedSuffixHtml = trainToursData.slice(0, cardsPerGroup).map((tour, idx) => createTrainTourCard(tour, idx + trainToursData.length)).join("");

    container.innerHTML = clonedPrefixHtml + originalCardsHtml + clonedSuffixHtml;

    createCarouselIndicators();

    setTimeout(() => {
        if (window.lucide) lucide.createIcons();

        const itemFullWidth = cardWidth + gap;
        const initialScrollPosition = itemFullWidth * cardsPerGroup;
        container.scrollLeft = initialScrollPosition;

        updateCarouselIndicators();
        startAutoSlide();
    }, 100);

    window.slideTrainCarousel = slideTrainCarousel;
    window.handleReadMore = handleReadMore;
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('mouseenter', pauseAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
    container.addEventListener('scroll', throttle(updateCarouselIndicators, 100));
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

function handleTouchEnd() {
    if (!isScrolling) {
        startAutoSlide();
        return;
    }

    const diff = touchStartX - touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
        slideTrainCarousel(diff > 0 ? 1 : -1);
    }

    isScrolling = false;
    setTimeout(startAutoSlide, 100);
}

function handleReadMore(event, index) {
    event.stopPropagation();
    console.log(`Leer más sobre el tour ${index}:`, trainToursData[index]);
}

function handleResize() {
    const container = document.getElementById("train-carousel");
    if (!container) return;

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

    let targetScrollLeft = container.scrollLeft + (direction * itemFullWidth * cardsPerGroup);
    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = targetScrollLeft;

    if (direction === 1 && container.scrollLeft >= (itemFullWidth * (originalDataLength + totalClonedPrefixCards - cardsPerGroup))) {
        setTimeout(() => {
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = itemFullWidth * totalClonedPrefixCards;
            updateCarouselIndicators();
        }, 600);
    } else if (direction === -1 && container.scrollLeft <= (itemFullWidth * totalClonedPrefixCards)) {
        setTimeout(() => {
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = itemFullWidth * (originalDataLength + totalClonedPrefixCards - cardsPerGroup);
            updateCarouselIndicators();
        }, 600);
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
    if (window.innerWidth < 768) return;
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

window.slideTrainCarousel = slideTrainCarousel;
window.startAutoSlide = startAutoSlide;
window.pauseAutoSlide = pauseAutoSlide;
window.goToSlide = goToSlide;
