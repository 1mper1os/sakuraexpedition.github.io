export function getHeader1HTML() {
  const lema = "Even if Machu Picchu tickets are sold out, your adventure isn't over: the 2 days Inca Trail awaits.";
  const buttonText = "BOOK NOW →";
  const buttonLink = "#enlace-camino-inca-2-dias"; // Puedes ajustar este enlace

  // NO se inyecta ninguna etiqueta <style> aquí, ya que las animaciones vienen de tailwind.config.js

  return `
    <div class="bg-[#004351] text-white py-3 sm:py-4 overflow-hidden relative">
      <div class="container mx-auto flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <p class="text-sm sm:text-base font-semibold tracking-wide animate-slide-in-left mb-2 sm:mb-0 sm:mr-4">
          ${lema}
        </p>
        
        <a href="${buttonLink}" 
           class="bg-[#e53e3e] text-white font-bold py-2 px-4 rounded-md shadow-md 
                  hover:bg-[#c62828] transform hover:scale-105 transition-all duration-200 ease-in-out 
                  animate-slide-in-right whitespace-nowrap">
          ${buttonText}
        </a>
      </div>
    </div>
  `;
}

export function initHeader1Logic() {
  // No hay inyección de estilos CSS aquí
  console.log('Header 1 (anuncio) inicializado con animaciones de Tailwind y centrado.');
}

// Funciones de compatibilidad para la importación en index.html
export function header1() {
  return getHeader1HTML();
}

export function initHeader1() {
  initHeader1Logic();
}