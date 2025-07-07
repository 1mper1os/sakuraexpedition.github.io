import premiosData from '../jsons/reconocimientos.json';

function createAwardLogoElement(award) {
  let innerHtml = '';
  if (award.type === 'tripadvisor') {
    innerHtml = `
      <img src="${award.src}" alt="${award.alt}" class="${award.heightClass} rounded-md">
      <p class="text-center text-sm font-semibold mt-2 text-gray-700">${award.award}</p>
      ${award.bestOfBest ? `<div class="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2 shadow-md">Best of the Best</div>` : ''}
    `;
  } else {
    innerHtml = `
      <img src="${award.src}" alt="${award.alt}" class="${award.heightClass} rounded-md">
    `;
  }

  return `
    <div class="flex-shrink-0 ${award.type === 'tripadvisor' ? 'flex flex-col items-center' : ''} p-2 bg-white rounded-lg shadow-sm">
      ${innerHtml}
    </div>
  `;
}

export function getAwardsSectionHTML() {
  return `
    <section class="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div class="container mx-auto px-4 py-8 bg-white shadow-lg rounded-xl">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Nuestros Reconocimientos</h2>
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10" id="premios-logos-container">
          </div>
      </div>
    </section>
  `;
}

export function initAwardsLogic() {
  const container = document.getElementById("premios-logos-container");

  if (!container) {
    console.warn('Container "premios-logos-container" not found.');
    return;
  }

  if (!premiosData || premiosData.length === 0) {
    console.warn('No awards data available.');
    container.innerHTML = '<p class="text-center text-gray-500 col-span-full">No hay reconocimientos disponibles en este momento.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  let tripAdvisorGroupHtml = '';

  premiosData.forEach(award => {
    if (award.type === 'tripadvisor') {
      // Agrupar los de TripAdvisor
      tripAdvisorGroupHtml += createAwardLogoElement(award);
    } else {
      // Otros logos se añaden directamente
      const div = document.createElement('div');
      div.innerHTML = createAwardLogoElement(award);
      fragment.appendChild(div.firstElementChild);
    }
  });

  // Si hay logos de TripAdvisor, envolverlos en su propio div de grupo
  if (tripAdvisorGroupHtml) {
    const tripAdvisorGroupDiv = document.createElement('div');
    tripAdvisorGroupDiv.className = 'flex flex-wrap items-center justify-center gap-4';
    tripAdvisorGroupDiv.innerHTML = tripAdvisorGroupHtml;
    fragment.insertBefore(tripAdvisorGroupDiv, fragment.children[1]); // Insertar después del primer logo (Safe Travels)
  }

  container.appendChild(fragment);
}

// Funciones de compatibilidad
export function premios() {
  return getAwardsSectionHTML();
}

export function initPremios() {
  initAwardsLogic();
}