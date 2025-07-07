import salkantayData from './../jsons/salkantay.json';
import './../css/salkantay.css';

function createSalkantayTourCard(tour) {
  return `
    <div class="tour-card-wrapper group">
      <div class="rounded-xl overflow-hidden relative bg-white shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
        <div class="relative overflow-hidden">
          <img
            src="${tour.image}"
            alt="${tour.alt}"
            class="w-full h-[280px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

          <div class="absolute top-4 right-4 z-20">
            <div class="bg-[#aa252e] py-2 px-3 text-sm text-center rounded-lg text-white font-bold shadow-lg backdrop-blur-sm">
              <div class="text-xs opacity-90 mb-1">Desde USD</div>
              <div class="text-2xl font-extrabold leading-none">${tour.price}</div>
              <div class="text-xs opacity-90 mt-1">por persona</div>
              ${tour.oldPrice ? `<div class="text-xs opacity-70 mt-1 line-through">antes ${tour.oldPrice}</div>` : ''}
            </div>
          </div>

          <div class="absolute bottom-0 left-0 p-4 w-full z-10">
            <h3 class="text-xl mb-2 font-bold text-white leading-tight">${tour.title}</h3>
            <div class="flex items-center gap-2 text-sm text-white/90">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
              </svg>
              <span>${tour.days}</span>
            </div>
          </div>
        </div>

        <div class="p-4 space-y-3">
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <svg class="w-4 h-4 text-[#aa252e]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
            <span>Cusco - Machu Picchu</span>
          </div>

          <div class="flex items-center gap-2 text-sm text-gray-600">
            <svg class="w-4 h-4 text-[#aa252e]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Guía profesional incluido</span>
          </div>

          <div class="flex items-center gap-2 text-sm text-gray-600">
            <svg class="w-4 h-4 text-[#aa252e]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
            <span>Disponible todo el año</span>
          </div>

          <div class="pt-2 border-t border-gray-100">
            <button class="w-full bg-[#aa252e] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#8a1f26] transition-colors duration-200 text-sm">
              Ver Detalles y Reservar
            </button>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  `;
}

export function getSalkantayHTML() {
  return `
    <section class="bg-gray-50">
      <div class="container mx-auto py-16 px-4">
        <header class="text-center mb-16">
          <h2 class="text-[#aa252e] font-bold text-4xl lg:text-5xl mb-6">
            Aventura Salkantay
          </h2>
          <div class="mx-auto divider4"></div>
          <p class="max-w-6xl mx-auto mb-8 text-center text-lg leading-relaxed text-gray-700">
            El <b class="text-[#aa252e]">Salkantay Trek a <strong class="text-[#2c3e50]">Machu Picchu</strong></b> es una de las rutas de senderismo más impresionantes y populares como alternativa al clásico Camino Inca, ofreciendo una combinación perfecta de aventura, naturaleza y cultura. Esta desafiante travesía atraviesa los paisajes espectaculares de los Andes peruanos, pasando por la majestuosa <strong class="text-[#2c3e50]">Montaña Salkantay</strong> (la segunda cumbre más alta de la región), bosques nubosos y pueblos remotos. A lo largo del camino, los excursionistas experimentan una profunda conexión con la historia ancestral inca y la rica biodiversidad de la zona. La caminata culmina en la impresionante ciudadela de <strong class="text-[#2c3e50]">Machu Picchu</strong>, brindando una recompensa inolvidable para los aventureros. Asegura tu lugar con anticipación, ya que el Salkantay Trek se está convirtiendo rápidamente en la opción favorita para quienes buscan una ruta menos concurrida pero igualmente asombrosa hacia una de las Siete Maravillas del Mundo Moderno.
          </p>
        </header>

        <!-- Solo 3 Tours -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="salkantay-cards-container">
          <!-- Las tarjetas se generan dinámicamente aquí -->
        </div>

        <div class="text-center mx-auto">
          <button
            id="ver-mas-destinos"
            class="mx-auto bg-gradient-to-r from-[#aa252e] to-[#8a1f26] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#8a1f26] hover:to-[#aa252e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

export function initSalkantayLogic() {
  const container = document.getElementById("salkantay-cards-container");
  
  if (!container) {
    console.warn('Container "salkantay-cards-container" not found');
    return;
  }

  // Verificar que tenemos datos
  if (!salkantayData || salkantayData.length === 0) {
    console.warn('No Salkantay data available');
    const errorMessage = '<div class="text-center text-gray-500 col-span-full"><p>No hay tours disponibles en este momento.</p><p class="text-sm mt-2">Por favor, inténtalo más tarde.</p></div>';
    container.innerHTML = errorMessage;
    return;
  }

  // Renderizar solo 3 tours
  renderTours(salkantayData.slice(0, 3), container);

  // Configurar botones
  setupButtons();
}

function renderTours(tours, container) {
  if (!container || !tours || tours.length === 0) return;

  container.innerHTML = '';
  const fragment = document.createDocumentFragment();

  tours.forEach((tour, index) => {
    if (!tour.title || !tour.image) {
      console.warn('Invalid tour data:', tour);
      return;
    }

    const cardElement = document.createElement('div');
    cardElement.innerHTML = createSalkantayTourCard(tour);

    const cardWrapper = cardElement.firstElementChild;
    
    // Configurar eventos
    setupCardEvents(cardWrapper, tour, index);

    fragment.appendChild(cardWrapper);
  });

  container.appendChild(fragment);
}

function setupCardEvents(cardWrapper, tour, index) {
  if (!cardWrapper) return;

  cardWrapper.addEventListener('click', () => handleTourCardClick(tour, index));
  cardWrapper.style.cursor = 'pointer';
  cardWrapper.setAttribute('role', 'button');
  cardWrapper.setAttribute('tabindex', '0');
  cardWrapper.setAttribute('aria-label', `Ver detalles del tour ${tour.title}`);

  // Soporte para teclado
  cardWrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTourCardClick(tour, index);
    }
  });
}

function setupButtons() {
  // CORRECCIÓN: Cambiar el ID para que coincida con el HTML
  const verMasButton = document.getElementById('ver-mas-destinos');

  if (verMasButton) {
    verMasButton.addEventListener('click', handleVerMasClick);
    // Mostrar/ocultar según cantidad de tours
    verMasButton.style.display = salkantayData.length > 3 ? 'block' : 'none';
  } else {
    console.warn('Button "ver-mas-destinos" not found');
  }
}

function handleVerMasClick() {
  console.log('Ver más destinos clicked');

  // Dispatch evento personalizado
  const event = new CustomEvent('verMasDestinosClick', {
    detail: {
      action: 'show_more_tours',
      totalTours: salkantayData.length,
      currentlyShowing: 3
    }
  });
  document.dispatchEvent(event);

  showAllTours();
}

function showAllTours() {
  const container = document.getElementById("salkantay-cards-container");
  if (!container) return;

  renderTours(salkantayData, container);

  // Ocultar el botón "Ver Más"
  const verMasButton = document.getElementById('ver-mas-destinos');
  if (verMasButton) {
    verMasButton.style.display = 'none';
  }

  // Scroll suave hacia las nuevas tarjetas
  container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleTourCardClick(tour, index) {
  console.log('Tour clicked:', tour.title, 'Index:', index);
  
  // Dispatch evento personalizado
  const event = new CustomEvent('tourCardClick', {
    detail: { tour, index }
  });
  document.dispatchEvent(event);

  // Aquí puedes agregar más lógica específica
  // Por ejemplo: abrir modal, redirigir, etc.
}

// Funciones de compatibilidad
export function salkantay() {
  return getSalkantayHTML();
}

export function initSalkantay() {
  initSalkantayLogic();
}

// Función para recargar las tarjetas
export function refreshSalkantayCards() {
  initSalkantayLogic();
}

// Función para obtener datos específicos
export function getSalkantayData() {
  return salkantayData;
}

// Función para filtrar tours
export function filterTours(filterFn) {
  if (typeof filterFn !== 'function') {
    console.warn('filterTours requires a function parameter');
    return;
  }

  const filteredTours = salkantayData.filter(filterFn);
  const container = document.getElementById("salkantay-cards-container");
  
  if (container) {
    renderTours(filteredTours, container);
  }
}

// Función adicional para mostrar/ocultar el botón programáticamente
export function toggleVerMasButton(show = true) {
  const verMasButton = document.getElementById('ver-mas-destinos');
  if (verMasButton) {
    verMasButton.style.display = show ? 'block' : 'none';
  }
}

// Función para verificar si el botón está visible
export function isVerMasButtonVisible() {
  const verMasButton = document.getElementById('ver-mas-destinos');
  return verMasButton && verMasButton.style.display !== 'none';
}