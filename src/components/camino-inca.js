// camino-inca.js
import caminoIncaData from './../jsons/camino-inca.json';
import './../css/camino-inca.css';

function createCaminoIncaCard(tour) {
    return `
        <div class="card-container">
            <div class="card-inner">
                <!-- Imagen principal -->
                <div class="card-image-container">
                    <img src="${tour.image}" 
                         class="card-image" 
                         alt="${tour.alt}" 
                         onerror="this.onerror=null;this.src='https://placehold.co/400x600/F0F0F0/666666?text=Imagen+No+Disponible';">
                    
                    <!-- Overlay con gradiente -->
                    <div class="card-overlay"></div>
                </div>

                <!-- Contenido de la tarjeta -->
                <div class="card-content">
                    <!-- Información principal -->
                    <div class="card-info">
                        <div class="price-badge">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <span class="price-text"> ${tour.price}</span>
                        </div>
                        
                        <h3 class="card-title">${tour.title}</h3>
                        
                        ${tour.duration ? `<div class="tour-duration">
                            <i class="fas fa-clock"></i>
                            <span>${tour.duration}</span>
                        </div>` : ''}
                        
                        ${tour.difficulty ? `<div class="difficulty-badge difficulty-${tour.difficulty.toLowerCase()}">
                            <i class="fas fa-mountain"></i>
                            <span>${tour.difficulty}</span>
                        </div>` : ''}
                        
                        
                        
                        ${tour.description ? `<p class="card-description">${tour.description}</p>` : ''}
                    </div>

                    <!-- Botones de acción -->
                    <div class="card-actions">
                        <button class="btn-primary" onclick="bookTour('${tour.id || tour.title}')">
                            <i class="fas fa-calendar-plus"></i>
                            Reservar Ahora
                        </button>
                        
                        <button class="btn-secondary" onclick="viewDetails('${tour.id || tour.title}')">
                            <i class="fas fa-info-circle"></i>
                            Ver Detalles
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function getCaminoIncaHTML() {
    return `
        <section class="camino-inca-section">
            <div class="container">
                <!-- Header -->
                <div class="section-header">
                    <h2 class="section-title">
                        <i class="fas fa-mountain"></i>
                        Camino Inca a Machu Picchu
                    </h2>
                    <div class="section-divider"></div>
                    <p class="section-description">
                        <strong>El Camino Inca a Machu Picchu</strong> es una de las rutas de senderismo más espectaculares y buscadas del mundo,
                        famosa por combinar aventura, naturaleza y arqueología en un solo viaje. Este antiguo sendero inca serpentea a través de los impresionantes paisajes de los Andes peruanos, bosques nubosos y fascinantes sitios arqueológicos, culminando en la icónica ciudadela de
                        <strong>Machu Picchu</strong>, una de las Siete Maravillas del Mundo Moderno. Recorrer el
                        <span class="highlight-text">Camino Inca</span> no solo permite descubrir la historia de los incas, sino también disfrutar de vistas panorámicas únicas y experiencias inolvidables.
                    </p>
                </div>

                <!-- Tours grid -->
                <div class="tours-section">
                    <h3 class="tours-subtitle">
                        <i class="fas fa-star"></i>
                        Tours Más Recomendados
                    </h3>
                    <div class="tours-grid" id="camino-inca-cards-container">
                        <!-- Las tarjetas se generan dinámicamente aquí -->
                    </div>
                </div>

                <!-- Información adicional -->
                <div class="info-section">
                    <div class="info-grid">
                        <div class="info-card">
                            <i class="fas fa-calendar-alt"></i>
                            <h4>Mejor Época</h4>
                            <p>Mayo a Septiembre (temporada seca)</p>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-users"></i>
                            <h4>Grupos Pequeños</h4>
                            <p>Máximo 16 personas por grupo</p>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-shield-alt"></i>
                            <h4>Seguridad</h4>
                            <p>Guías certificados y equipos de seguridad</p>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-leaf"></i>
                            <h4>Eco-Friendly</h4>
                            <p>Turismo responsable y sostenible</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initCaminoInca() {
    const container = document.getElementById("camino-inca-cards-container");
    if (!container) {
        console.error("Contenedor 'camino-inca-cards-container' no encontrado.");
        return;
    }

    // Limpiar contenedor
    container.innerHTML = '';

    // Crear y agregar tarjetas con animación escalonada
    caminoIncaData.forEach((tour, index) => {
        const html = createCaminoIncaCard(tour);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html.trim();
        const card = tempDiv.firstChild;
        
        if (card) {
            // Añadir delay para animación escalonada
            card.style.animationDelay = `${index * 0.15}s`;
            container.appendChild(card);
        }
    });

    // Inicializar intersection observer para animaciones
    initScrollAnimations();
}

// Funciones auxiliares para interacciones
function bookTour(tourId) {
    // Implementar lógica de reserva
    console.log(`Reservando tour: ${tourId}`);
    // Aquí puedes agregar la lógica para abrir un modal de reserva
    // o redirigir a una página de reserva
}

function viewDetails(tourId) {
    // Implementar lógica para ver detalles
    console.log(`Viendo detalles del tour: ${tourId}`);
    // Aquí puedes agregar la lógica para mostrar más información
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar todas las tarjetas
    document.querySelectorAll('.card-container').forEach(card => {
        observer.observe(card);
    });
}

// Exportar funciones globales para uso desde HTML
window.bookTour = bookTour;
window.viewDetails = viewDetails;