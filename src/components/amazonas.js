import amazonToursData from './../jsons/amazonas.json';
import './../css/amazonas.css';

function createAmazonTourCard(tour, index) {
    return `
        <div class="amazona-tour-card bg-white rounded-3xl shadow-lg w-full max-w-sm amazona-animate-fade-in-up" style="animation-delay: ${index * 0.1}s;">
            <img src="${tour.image}" alt="${tour.alt}" class="amazona-tour-card-image" onerror="this.onerror=null;this.src='https://placehold.co/400x350/CCCCCC/333333?text=Imagen+No+Disp.'">
            <div class="amazona-tour-card-overlay"></div>
            <div class="amazona-tour-card-content">
                <div class="amazona-main-info">
                    <span class="amazona-tour-badge">
                        <i data-lucide="leaf" class="w-4 h-4"></i>
                        <span class="badge-text">Tour Amazónico</span>
                    </span>
                    <p class="amazona-tour-location">Duración: ${tour.duration}</p>
                    <h3 class="amazona-tour-title">${tour.title}</h3>
                    <p class="amazona-tour-price">Desde US$${tour.price}</p>
                </div>
                <div class="amazona-tour-expandable-area">
                    <p class="amazona-tour-long-description">
                        ${tour.longDescription || 'Más detalles sobre este tour...'}
                    </p>
                    <button class="amazona-read-more-button" onclick="handleReadMore(event, ${index})">
                        <span>Ver Detalles</span>
                        <svg class="amazona-button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function getAmazonTours() {
    let tourCardsHtml = '';
    
    if (amazonToursData && amazonToursData.length > 0) {
        tourCardsHtml = amazonToursData.map((tour, idx) => createAmazonTourCard(tour, idx)).join('');
    } else {
        tourCardsHtml = '<p class="text-center text-gray-500 col-span-full">No hay tours amazónicos disponibles en este momento.</p>';
    }

    return `
        <div class="amazona-tours-section max-w-6xl mx-auto w-full">
            <div class="amazona-section-header">
                <h2 class="amazona-section-title">Aventuras en la <span class="amazona-highlight-green">Selva Amazónica</span> del Perú</h2>
                <div class="amazona-divider11"></div>
                <div class="amazona-section-description">
                    <p class="description-text">
                        La selva amazónica del Perú es una de las zonas con <strong class="amazona-highlight-orange">mayor diversidad biológica</strong> del planeta.
                        Es tan grande la variedad de especies entre flora y fauna que se estima que la mayor parte de ellas sigue sin ser descubierta.
                        La madre selva Amazónica aún cuida celosamente al hermoso jaguar que se puede ver en programas de 7 a más días, aves, lobos de ríos, anacondas, tortugas y más podrás ver en programas de 2, 3 o 4 días.
                        <strong class="amazona-highlight-blue">Elige el programa de tu preferencia</strong> y sumérgete en una experiencia inolvidable.
                    </p>
                </div>
            </div>

            <div id="amazona-cards-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                ${tourCardsHtml}
            </div>

            <div class="amazona-navigate-wrapper flex justify-center mt-16">
                <button id="amazona-navigate-button" class="amazona-navigate-button">
                    Explorar Más Destinos
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right amazona-navigate-arrow">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

export function initAmazonToursLogic() {
    // Create Lucide icons after content is loaded
    if (window.lucide) {
        lucide.createIcons();
    }

    // Add event listener for the navigation button
    const navigateButton = document.getElementById("amazona-navigate-button");
    if (navigateButton) {
        navigateButton.addEventListener("click", handleNavigateButton);
    } else {
        console.error("Navigation button not found.");
    }
}

function handleReadMore(event, index) {
    event.stopPropagation(); // Prevent card hover effects from interfering
    const button = event.currentTarget;
    const cardContent = button.closest('.amazona-tour-card-content');
    const expandableArea = cardContent.querySelector('.amazona-tour-expandable-area'); // Target the new div
    const buttonText = button.querySelector('span');
    const buttonArrow = button.querySelector('.amazona-button-arrow');

    if (expandableArea.classList.contains('expanded')) {
        // Collapse
        expandableArea.classList.remove('expanded');
        buttonText.textContent = 'Ver Detalles';
        buttonArrow.style.transform = 'rotate(0deg)'; // Arrow points right
    } else {
        // Expand
        expandableArea.classList.add('expanded');
        buttonText.textContent = 'Ver Menos';
        buttonArrow.style.transform = 'rotate(-90deg)'; // Arrow points up
    }
    console.log(`Se hizo clic en "Ver Detalles" para el tour: ${amazonToursData[index].title}`);
}

function handleNavigateButton() {
    console.log("Navegando a otra ventana/sección...");
    alert("Simulando navegación a otra ventana. ¡Aquí podrías ir a una página de todos los destinos!");
    // In a real application, you would use window.location.href = 'otra-pagina.html';
}

export function amazonTours() {
    return getAmazonTours();
}

export function initAmazonTours() {
    initAmazonToursLogic();
}

export function refreshAmazonTourCards() {
    const containerParent = document.querySelector('.amazona-tours-section');
    if (containerParent) {
        const oldContainer = document.getElementById('amazona-cards-container');
        if (oldContainer) oldContainer.remove();

        const newContainerDiv = document.createElement('div');
        newContainerDiv.id = 'amazona-cards-container';
        newContainerDiv.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center';

        let tourCardsHtml = '';
        if (amazonToursData && amazonToursData.length > 0) {
            tourCardsHtml = amazonToursData.map((tour, idx) => createAmazonTourCard(tour, idx)).join('');
        } else {
            tourCardsHtml = '<p class="text-center text-gray-500 col-span-full">No hay tours amazónicos disponibles en este momento.</p>';
        }
        newContainerDiv.innerHTML = tourCardsHtml;

        const headerSection = containerParent.querySelector('.amazona-section-header');
        if (headerSection && headerSection.nextElementSibling) {
            containerParent.insertBefore(newContainerDiv, headerSection.nextElementSibling);
        }
    }

    initAmazonToursLogic();
}