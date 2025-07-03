import caminoIncaData from './../jsons/camino-inca.json';
import './../css/camino-inca.css';

function createCaminoIncaCard(tour) {
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden relative group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 animate-popIn">
            <img src="${tour.image}" class="w-full h-78 object-cover rounded-t-lg" alt="${tour.alt}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F0F0F0/000000?text=Imagen+No+Disponible';">
            <div class="absolute inset-x-0 top-0 bg-gradient-to-b from-black via-black/50 to-transparent flex items-start p-4">
                <h6 class="text-lg font-semibold leading-tight text-white" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.7);">${tour.title}</h6>
            </div>
            <div class="absolute bottom-4 right-4 bg-[#004351] text-white font-bold py-1 px-3 rounded-full text-sm shadow-md">
                Desde USD $${tour.price}
            </div>
        </div>
    `;
}

export function getCaminoIncaHTML() {
    return `
        <div class="min-h-screen flex items-center justify-center  ">
            <div class="w-11/12 md:w-5/6 lg:w-4/5 xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
                <h2 class=" text-4xl sm:text-5xl font-extrabold mb-4 animate-bounce-in text-center" style="color:#aa252e">
                    Camino Inca a Machu Picchu
                </h2>
                <div class="mx-auto divider3"></div>
                <p class="text-lg leading-relaxed mb-8">
                    <strong class="font-bold">El Camino Inca a Machu Picchu</strong> es una de las rutas de senderismo más espectaculares y buscadas del mundo,
                    famosa por combinar aventura, naturaleza y arqueología en un solo viaje. Este antiguo sendero inca serpentea a través de los impresionantes paisajes de los Andes peruanos, bosques nubosos y fascinantes sitios arqueológicos, culminando en la icónica ciudadela de 
                    <strong class="font-bold">Machu Picchu</strong>, una de las Siete Maravillas del Mundo Moderno. Recorrer el 
                    <span class="text-[#e27e08] font-semibold">Camino Inca</span> no solo permite descubrir la historia de los incas, sino también disfrutar de vistas panorámicas únicas y experiencias inolvidables.
                </p>
                <div class="flex flex-wrap gap-4 mb-12">
                    ${[
                        { icon: 'calendar-alt', label: 'Ver disponibilidad' },
                        { icon: 'question-circle', label: 'FAQ Camino Inca' },
                        { icon: 'arrow-right', label: 'Ver más' },
                        { icon: 'images', label: 'Galería de fotos' },
                    ].map(btn => `
                        <button  class="bg-white text-[#aa252e] border border-[#aa252e]  font-bold  px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#aa252e] hover:text-white flex items-center space-x-2">
                            <i class="fas fa-${btn.icon}"></i><span>${btn.label}</span>
                        </button>
                    `).join('')}
                </div>
                <h4 class="text-2xl font-bold mb-6 text-gray-800">Más recomendados:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " id="camino-inca-cards-container"></div>
            </div>
        </div>
    `;
}

export function initCaminoIncaLogic() {
    const container = document.getElementById("camino-inca-cards-container");
    if (!container) return;

    container.innerHTML = '';
    caminoIncaData.forEach((tour, index) => {
        const html = createCaminoIncaCard(tour);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html.trim();
        const card = tempDiv.firstChild;
        card.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(card);
    });
}

export function caminoInca() {
    return getCaminoIncaHTML();
}

export function initCaminoInca() {
    initCaminoIncaLogic();
}
