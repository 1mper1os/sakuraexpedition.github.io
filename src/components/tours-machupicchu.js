import trainToursData from './../jsons/train-tours.json';
import "./../css/train-tours.css";

function generateStarRating(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="bi bi-star-fill text-yellow-400"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="bi bi-star-half text-yellow-400"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="bi bi-star text-yellow-400"></i>';
    }
    return starsHtml;
}

function createTrainTourCard(tour) {
    return `
        <div class="relative bg-white rounded-xl shadow-lg overflow-hidden min-w-[380px] max-w-[380px] flex-shrink-0 mb-4 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
            <img src="${tour.image}" class="w-full h-82 object-cover" alt="${tour.alt}" onerror="this.onerror=null;this.src='https://placehold.co/400x288/CCCCCC/333333?text=Imagen+No+Disp.'">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end text-white">
                <div class="absolute top-4 right-4 flex items-start">
                    <span class="text-xl font-bold text-white drop-shadow-md px-2 py-1" style="background-color:#004351af; border-radius:10px;">
                        ${tour.price ? `US$${tour.price}` : ''}
                    </span>
                </div>
                <div class="flex flex-col">
                    <h6 class="font-bold text-xl mb-2 drop-shadow-md leading-tight">${tour.title}</h6>
                    <p class="text-sm font-normal text-white drop-shadow-md max-w-[100%] ">${tour.location}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-yellow-400 text-xl drop-shadow-md">
                            ${generateStarRating(tour.rating)}
                        </span>
                        <small class="text-white text-base font-normal drop-shadow-md">${tour.durationText}</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function getTrainToursHTML() {
    return `
        <section>
            <div class="container mx-auto px-2 max-w-8xl">
                <h2 class="text-center  text-4xl sm:text-5xl font-extrabold mb-6 animate-fade-in" style="color:#aa252e">
                    Los mejores tours a Machu Picchu por tren
                </h2>
                <div class="mx-auto divider2"></div>
                <div class="mb-10 text-center max-w-3xl mx-auto">
                    <p class="text-gray-700 text-lg leading-relaxed animate-fade-in-delay">
                        Vive una experiencia única hacia <strong class=" font-bold" style="color:#aa252e">Machu Picchu viajando en tren</strong> desde Cusco.
                        Descubre los impresionantes paisajes andinos, disfruta de un viaje cómodo y seguro, y llega al corazón de una de las maravillas del mundo.
                        Nuestros <strong class=" font-bold" style="color:#e27e08">tours en tren</strong> están diseñados para brindarte la mejor experiencia. Con guías expertos, atención personalizada y un enfoque en tu seguridad, garantizamos un viaje inolvidable.
                        <strong class=" font-bold"style="color:#004351">Reserva ahora</strong> y vive la magia de Machu Picchu con la tranquilidad de un servicio confiable y profesional.
                    </p>
                </div>

                <div class="relative">
                    <button class="absolute left-0 top-1/2 -translate-y-1/2 text-5xl text-orange-500 hover:text-orange-600 transition-transform duration-300 transform hover:scale-110 focus:outline-none z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-md"
                            onclick="scrollCarousel(-1, 'train-carousel')" aria-label="Scroll left">
                        <i class="bi bi-chevron-left-circle-fill"></i>
                    </button>

                    <div id="train-carousel" class="flex overflow-x-scroll no-scrollbar scroll-smooth px-8  space-x-6"></div>

                    <button class="absolute right-0 top-1/2 -translate-y-1/2 text-5xl text-orange-500 hover:text-orange-600 transition-transform duration-300 transform hover:scale-110 focus:outline-none z-10 p-2 rounded-full bg-white bg-opacity-75 shadow-md"
                            onclick="scrollCarousel(1, 'train-carousel')" aria-label="Scroll right">
                        <i class="bi bi-chevron-right-circle-fill"></i>
                    </button>
                </div>
            </div>
        </section>
    `;
}

export function initTrainToursLogic() {
    const container = document.getElementById("train-carousel");
    if (container) {
        container.innerHTML = trainToursData.map(createTrainTourCard).join('');
    }
}

export function trainTours() {
    return getTrainToursHTML();
}

export function initTrainTours() {
    initTrainToursLogic();
}

function scrollCarousel(direction, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const scrollAmount = 404;
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}
