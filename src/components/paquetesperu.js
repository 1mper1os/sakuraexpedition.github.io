import peruPackagesData from './../jsons/paquetesperu.json';
import "./../css/paquetesperu.css";

function createPeruPackageCard(pkg) {
  return `
    <div class="one-day-tour-card-wrapper group">
      <div class="rounded-xl overflow-hidden relative bg-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl border border-gray-100 flex flex-col h-full">
        <div class="relative overflow-hidden flex-shrink-0">
          <img
            src="${pkg.image}"
            alt="${pkg.alt}"
            class="w-full h-52 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

          <div class="absolute top-4 right-4 z-20">
            <div class="bg-[#e25e08] py-1 px-3 text-sm text-center rounded-lg text-white font-bold shadow-lg backdrop-blur-sm">
              <div class="text-xs opacity-90 mb-0.5">Desde USD</div>
              <div class="text-xl font-extrabold leading-none">${pkg.price}</div>
              <div class="text-xs opacity-90 mt-0.5">por persona</div>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 p-4 w-full z-10">
            <h3 class="text-lg font-bold text-white leading-tight">${pkg.title}</h3>
          </div>
        </div>

        <div class="p-4 flex-grow flex flex-col justify-between">
          <div>
            <p class="text-sm text-gray-700 mb-3 text-description-80">${pkg.description}</p>

            <div class="space-y-2 text-gray-600 text-sm mb-4">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#004351]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <span>${pkg.duration}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#004351]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span>${pkg.location}</span>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-gray-100">
            <button class="w-full bg-[#004351] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#004351] transition-colors duration-200 text-sm">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function getPaquetesPeru() {
  let cardsHTML = '';

  if (peruPackagesData && peruPackagesData.length > 0) {
    cardsHTML = peruPackagesData.map(pkg => createPeruPackageCard(pkg)).join('');
  } else {
    cardsHTML = '<p class="text-center text-gray-500 col-span-full">No hay paquetes disponibles en este momento.</p>';
  }

  return `
    <section class="one-day-tours-section bg-gray-50">
      <div class="container mx-auto  px-4">
        <header class="text-center mb-16">
          <h2 class="text-[#aa252e] font-bold text-4xl lg:text-5xl mb-6">
            Paquetes Perú
          </h2>
          <div class="mx-auto divider9"></div>
          <p class="max-w-5xl mx-auto mb-8 text-center text-lg leading-relaxed text-gray-700">
            Perú es un país de Sudamérica con una rica diversidad cultural y paisajística. Explora Machu Picchu, Lima, Puno, el Lago Titicaca y mucho más en nuestros programas especialmente diseñados.
            Elige el programa de tu preferencia y combina varias experiencias inolvidables.
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          ${cardsHTML}
        </div>
        <div class="text-center mx-auto">
          <button
            id="ver-mas-destinos"
            class="mb-10 mx-auto bg-gradient-to-r from-[#004351] to-[#004358] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#004451] hover:to-[#004458] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Más Destinos
            <svg class="w-5 h-5 ml-2 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}