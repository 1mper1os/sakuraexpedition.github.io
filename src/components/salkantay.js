import salkantayData from './../jsons/salkantay.json';
import './../css/salkantay.css';

function createSalkantayTourCard(tour) {
  return `
    <div>
      <div class="rounded-xl overflow-hidden relative text-white shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        <img src="${tour.image}" alt="${tour.alt}" class="w-full h-[350px] object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105">
        <div class="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full font-bold box-border">
          <h6 class="text-xl mb-5 w-80">${tour.title}</h6>
          <small class="text-sm opacity-90">${tour.days}</small>
        </div>
        <div class="absolute bottom-0 right-2 bg-[#aa252e] py-3 px-4 text-sm text-center rounded-tl-xl rounded-tr-xl text-white font-bold flex flex-col items-center justify-center shadow-md">
          <div class="text-xs opacity-90">Desde USD</div>
          <strong class="py-1 px-4 rounded-lg bg-white text-[#aa252e] text-2xl font-extrabold mt-1 mb-1">$${tour.price}</strong>
          <div class="text-xs opacity-90">por persona</div>
          <div class="text-xs opacity-70 mt-[3px]" style="text-decoration: line-through;">antes $${tour.oldPrice}</div>
        </div>
      </div>
    </div>
  `;
}

export function getSalkantayHTML() {
  return `
    <div class="container mx-auto my-12 px-4">
      <h2 class="text-center text-[#aa252e] font-bold text-[2.5rem] mb-4">Caminata Salkantay</h2>
      <div class="mx-auto divider4"></div>
      <p class="max-w-8xl mx-auto mb-14 text-justify text-base leading-relaxed px-4">
        El <b class="text-[#aa252e]">Salkantay Trek a <strong class="text-[#2c3e50]">Machu Picchu</strong></b> es una de las rutas de senderismo más impresionantes y populares como alternativa al clásico Camino Inca, ofreciendo una combinación perfecta de aventura, naturaleza y cultura. Esta desafiante travesía atraviesa los paisajes espectaculares de los Andes peruanos, pasando por la majestuosa <strong class="text-[#2c3e50]">Montaña Salkantay</strong> (la segunda cumbre más alta de la región), bosques nubosos y pueblos remotos. A lo largo del camino, los excursionistas experimentan una profunda conexión con la historia ancestral inca y la rica biodiversidad de la zona. La caminata culmina en la impresionante ciudadela de <strong class="text-[#2c3e50]">Machu Picchu</strong>, brindando una recompensa inolvidable para los aventureros. Asegura tu lugar con anticipación, ya que el Salkantay Trek se está convirtiendo rápidamente en la opción favorita para quienes buscan una ruta menos concurrida pero igualmente asombrosa hacia una de las Siete Maravillas del Mundo Moderno.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="salkantay-cards-container"></div>
    </div>
  `;
}

export function initSalkantayLogic() {
  const container = document.getElementById("salkantay-cards-container");
  if (!container) return;

  container.innerHTML = '';
  salkantayData.forEach((tour) => {
    container.innerHTML += createSalkantayTourCard(tour);
  });
}

export function salkantay() {
  return getSalkantayHTML();
}

export function initSalkantay() {
  initSalkantayLogic();
}
