import caminoIncaData from './../jsons/camino-inca.json';
import '../css/camino-inca.css';

function createCaminoIncaCard(tour, index) {
    const tourHasDiscount = index === 0 || tour.ribbon || tour.oldPrice > tour.price;
    
    return `
        <div class="mb-4 animate-slideInUp">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden card-tour h-full flex flex-col">
                <div class="relative">
                    <img src="${tour.image}" class="w-full h-60 object-cover" alt="${tour.alt}">
                    
                    <span class="days-badge"><i class="bi bi-calendar-week-fill mr-2"></i> ${tour.duration || 'Consultar'}</span>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h5 class="text-2xl font-bold mb-2" style="color:#004351">${tour.title}</h5>
                    <p class="text-sm mb-2" style="color:#e27e08">
                        <i class="bi bi-geo-alt-fill mr-1"></i> ${tour.location || 'Cusco, Machu Picchu'}
                    </p>
                    <p class="text-gray-600 text-sm mb-4">${tour.description || 'Una experiencia única en el famoso Camino Inca hacia Machu Picchu.'}</p>
                    <hr class="border-gray-200 my-4">
                    
                    <p class="mb-2 text-gray-700">
                        <strong>Incluye:</strong>
                        ${tour.includes ? tour.includes.map(icon => 
                            `<i class="bi bi-${icon} mr-1" style="color:#004351" title="${getIconTitle(icon)}"></i>`
                        ).join("") : '<i class="bi bi-camera mr-1" style="color:#004351" title="Cámara"></i><i class="bi bi-person mr-1" style="color:#004351" title="Guía"></i><i class="bi bi-h-square mr-1" style="color:#004351" title="Hotel"></i>'}
                    </p>
                    
                    <p class="mb-2 text-gray-700">
                        <strong>Nivel de Dificultad:</strong><br>
                        <span class="flex gap-1">${generateDifficultyIcons(tour.difficulty ? getDifficultyLevel(tour.difficulty) : 3)}</span>
                    </p>
                    
                    <p class="mb-4 text-gray-700">
                        <strong>Calificación:</strong><br>
                        <span class="flex gap-1">${generateStarRating(tour.rating || 5)}</span>
                        ${tour.totalReviews ? `<span class="text-sm text-gray-500 ml-2">(${tour.totalReviews} reseñas)</span>` : '<span class="text-sm text-gray-500 ml-2">(20+ reseñas)</span>'}
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

// Función auxiliar para obtener el título del icono
function getIconTitle(icon) {
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

// Función auxiliar para generar iconos de dificultad
function generateDifficultyIcons(level) {
    let icons = '';
    const maxDifficulty = 5;
    for (let i = 0; i < maxDifficulty; i++) {
        icons += i < level
            ? '<i class="bi bi-circle-fill" style="color:#004351"></i>'
            : '<i class="bi bi-circle text-gray-400"></i>';
    }
    return icons;
}

// Función auxiliar para generar estrellas de calificación
function generateStarRating(rating) {
    let stars = '';
    const maxRating = 5;
    for (let i = 0; i < maxRating; i++) {
        stars += i < rating
            ? '<i class="bi bi-star-fill text-[#e27e08]"></i>'
            : '<i class="bi bi-star text-gray-400"></i>';
    }
    return stars;
}

// Función auxiliar para convertir dificultad texto a número
function getDifficultyLevel(difficulty) {
    if (typeof difficulty === 'string') {
        switch (difficulty.toLowerCase()) {
            case 'fácil': return 1;
            case 'moderado': return 3;
            case 'difícil': return 4;
            case 'muy difícil': return 5;
            default: return 3;
        }
    }
    return difficulty || 3;
}

export function getCaminoIncaHTML() {
    return `
        <section class="container mx-auto py-8 px-4">
            <div class="text-center mb-16 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
                <h2 class="text-center text-4xl font-extrabold mb-8 animate-fadeIn" style="color:#aa252e">
                    <i class="fas fa-mountain text-3xl text-[#004351] mr-3"></i>
                    Camino Inca a Machu Picchu
                </h2>
                <div class="mx-auto divide7"></div>
                <p class="text-lg leading-relaxed text-gray-800 max-w-7xl mx-auto mt-6">
                    <strong>El Camino Inca a Machu Picchu</strong> es una de las rutas de senderismo más espectaculares y buscadas del mundo,
                    famosa por combinar aventura, naturaleza y arqueología en un solo viaje. Este antiguo sendero inca serpentea a través de los impresionantes paisajes de los Andes peruanos, bosques nubosos y fascinantes sitios arqueológicos, culminando en la icónica ciudadela de
                    <strong>Machu Picchu</strong>, una de las Siete Maravillas del Mundo Moderno.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="camino-inca-cards-container">
                <!-- Las tarjetas se generan dinámicamente aquí -->
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

    // Crear y agregar tarjetas
    caminoIncaData.forEach((tour, index) => {
        const html = createCaminoIncaCard(tour, index);
        container.innerHTML += html;
    });
}

// Funciones auxiliares para interacciones
function bookTour(tourId) {
    console.log(`Reservando tour: ${tourId}`);
    // Aquí puedes agregar la lógica para abrir un modal de reserva
}

function viewDetails(tourId) {
    console.log(`Viendo detalles del tour: ${tourId}`);
    // Aquí puedes agregar la lógica para mostrar más información
}

// Exportar funciones globales para uso desde HTML
window.bookTour = bookTour;
window.viewDetails = viewDetails;