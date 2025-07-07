import afiliacionesData from '../jsons/afiliaciones.json';

function createAffiliationLogoElement(logo) {
 return `
    <div class="afiliacion-logo-wrapper flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
      <img src="${logo.src}" alt="${logo.alt}" class="${logo.heightClass} rounded-md object-contain">
    </div>
  `;
}

export function getAfiliacionesSectionHTML() {
  return `
    <section class="bg-gray-50 py-10">
      <div class="container mx-auto px-4 py-8 bg-white shadow-lg rounded-xl">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Nuestras Afiliaciones</h2>
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10" id="afiliaciones-logos-container">
          </div>
      </div>
    </section>
  `;
}

export function initAfiliacionesLogic() {
  const container = document.getElementById("afiliaciones-logos-container");

  if (!container) {
    console.warn('Container "afiliaciones-logos-container" not found.');
    return;
  }

  if (!afiliacionesData || afiliacionesData.length === 0) {
    console.warn('No affiliations data available.');
    container.innerHTML = '<p class="text-center text-gray-500 col-span-full">No hay afiliaciones disponibles en este momento.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();

  afiliacionesData.forEach(logo => {
    const div = document.createElement('div');
    div.innerHTML = createAffiliationLogoElement(logo);
    fragment.appendChild(div.firstElementChild);
  });

  container.appendChild(fragment);
}

// Funciones de compatibilidad
export function afiliaciones() {
  return getAfiliacionesSectionHTML();
}

export function initAfiliaciones() {
  initAfiliacionesLogic();
}