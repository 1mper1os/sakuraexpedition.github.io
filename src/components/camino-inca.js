import caminoIncaData from './../jsons/camino-inca.json';
import './../css/camino-inca.css';

function createCaminoIncaCard(tour) {
    return `
        <div class="w-full max-w-[350px] opacity-0 translate-y-5 scale-100 animate-[cardSlideIn_0.6s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]">
            <div class="bg-white rounded-xl shadow-md overflow-hidden relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <!-- Imagen principal -->
                <div class="relative h-60 overflow-hidden">
                    <img src="${tour.image}" 
                         class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" 
                         alt="${tour.alt}" 
                         onerror="this.onerror=null;this.src='https://placehold.co/400x600/F0F0F0/666666?text=Imagen+No+Disponible';">
                    
                    <!-- Overlay con gradiente -->
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,67,81,0.1)] to-[rgba(0,67,81,0.3)] opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                </div>

                <!-- Contenido de la tarjeta -->
                <div class="p-6 flex flex-col h-[calc(100%-240px)]">
                    <!-- Información principal -->
                    <div class="flex-1">
                        <div class="inline-flex items-center gap-2 bg-[#e27208] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <i class="fa-solid fa-dollar-sign text-xs"></i>
                            <span>${tour.price}</span>
                        </div>
                        
                        <h3 class="text-xl font-bold text-gray-800 mb-3 leading-snug">${tour.title}</h3>
                        
                        ${tour.duration ? `<div class="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <i class="fas fa-clock text-[#e27208]"></i>
                            <span>${tour.duration}</span>
                        </div>` : ''}
                        
                        ${tour.difficulty ? `<div class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold mb-4 ${
                            tour.difficulty.toLowerCase() === 'fácil' ? 'bg-[#c6f6d5] text-[#22543d]' : 
                            tour.difficulty.toLowerCase() === 'moderado' ? 'bg-[#fef5e7] text-[#c05621]' : 
                            'bg-[#fed7d7] text-[#c53030]'
                        }">
                            <i class="fas fa-mountain"></i>
                            <span>${tour.difficulty}</span>
                        </div>` : ''}
                        
                        ${tour.description ? `<p class="text-gray-500 leading-relaxed mb-4 line-clamp-3">${tour.description}</p>` : ''}
                    </div>

                    <!-- Botones de acción -->
                    <div class="flex flex-col gap-3 mt-auto">
                        <button class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer border-none text-sm bg-[#004351] text-white hover:bg-[#005f73] hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-[#e27208] focus:outline-offset-2" onclick="bookTour('${tour.id || tour.title}')">
                            <i class="fas fa-calendar-plus"></i>
                            Reservar Ahora
                        </button>
                        
                        <button class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer text-sm bg-transparent text-[#004351] border-2 border-[#004351] hover:bg-[#004351] hover:text-white hover:-translate-y-0.5 focus:outline-2 focus:outline-[#e27208] focus:outline-offset-2" onclick="viewDetails('${tour.id || tour.title}')">
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
        <section class="min-h-screen py-16 bg-gradient-to-br from-[#f7fafc] to-[#edf2f7]">
            <div class="max-w-7xl mx-auto px-5 md:px-10">
                <!-- Header -->
                <div class="text-center mb-16 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-[#aa252e] mb-4 flex items-center justify-center gap-3">
                        <i class="fas fa-mountain text-3xl text-[#004351]"></i>
                        Camino Inca a Machu Picchu
                    </h2>
                    <div class="mx-auto divider8"></div>
                    <p class="text-lg leading-relaxed text-gray-800 max-w-11xl mx-auto">
                        <strong>El Camino Inca a Machu Picchu</strong> es una de las rutas de senderismo más espectaculares y buscadas del mundo,
                        famosa por combinar aventura, naturaleza y arqueología en un solo viaje. Este antiguo sendero inca serpentea a través de los impresionantes paisajes de los Andes peruanos, bosques nubosos y fascinantes sitios arqueológicos, culminando en la icónica ciudadela de
                        <strong>Machu Picchu</strong>, una de las Siete Maravillas del Mundo Moderno. Recorrer el
                        <span class="text-[#e27208] font-semibold">Camino Inca</span> no solo permite descubrir la historia de los incas, sino también disfrutar de vistas panorámicas únicas y experiencias inolvidables.
                    </p>
                </div>

                <!-- Tours grid -->
                <div class="mb-16">
                    <div class="flex justify-between items-center mb-1">
                        <h3 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <i class="fas fa-star text-[#e27208]"></i>
                            Tours Más Recomendados
                        </h3>
                        <button class="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer text-sm bg-[#004351] text-white hover:bg-[#005f73] hover:-translate-y-0.5 hover:shadow-md focus:outline-2 focus:outline-[#e27208] focus:outline-offset-2">
                            <span>Ver Más</span>
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" id="camino-inca-cards-container">
                        <!-- Las tarjetas se generan dinámicamente aquí -->
                    </div>
                </div>

                <!-- Información adicional -->
                <div class="mt-16">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <div class="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <i class="fas fa-calendar-alt text-3xl text-[#e27208] mb-4"></i>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Mejor Época</h4>
                            <p class="text-gray-500 leading-normal">Mayo a Septiembre (temporada seca)</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <i class="fas fa-users text-3xl text-[#e27208] mb-4"></i>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Grupos Pequeños</h4>
                            <p class="text-gray-500 leading-normal">Máximo 16 personas por grupo</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <i class="fas fa-shield-alt text-3xl text-[#e27208] mb-4"></i>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Seguridad</h4>
                            <p class="text-gray-500 leading-normal">Guías certificados y equipos de seguridad</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <i class="fas fa-leaf text-3xl text-[#e27208] mb-4"></i>
                            <h4 class="text-lg font-semibold text-gray-800 mb-2">Eco-Friendly</h4>
                            <p class="text-gray-500 leading-normal">Turismo responsable y sostenible</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// El resto del código (initCaminoInca, bookTour, viewDetails, initScrollAnimations) permanece igual
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