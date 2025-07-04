export function contacto() {
  return `
    <div class="bg-red-700 text-white py-12 px-8 lg:px-48 text-center rounded-lg shadow-lg w-full fade-in">
      <div class="flex flex-col md:flex-row-reverse justify-center items-center max-w-screen-xl mx-auto">
        <div class="mb-8 md:mb-0 md:ml-8">
          <img src="/public/ll.png" alt="Asesora" 
            class="w-60 h-60 rounded-full border-4 border-white object-cover transform transition-transform duration-300 hover:scale-105 shadow-md" />
        </div>
        <div class="text-center md:text-center flex-1">
          <h2 class="font-extrabold text-4xl md:text-5xl mb-2">¿Tienes preguntas?</h2>
          <p class="text-lg md:text-xl mb-6">
            Contáctanos las <span class="font-bold text-white">24 horas del día</span>
          </p>

          <div class="flex flex-wrap justify-center md:justify-center gap-6 my-6">
            <div>
              <button class="bg-white text-black font-semibold rounded-full py-2 px-4 inline-flex items-center gap-2 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95">
                +51 941 411 418
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Whatsapp" class="w-5 h-5" />
              </button>
              <div class="text-sm mt-1 text-gray-200">Whatsapp</div>
            </div>
            <div>
              <button class="bg-white text-black font-semibold rounded-full py-2 px-4 inline-flex items-center gap-2 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95">
                +51 941 411 418
                <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Llamada" class="w-5 h-5" />
              </button>
              <div class="text-sm mt-1 text-gray-200">Llamada</div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center md:justify-center gap-6 mt-4">
            <div>
              <button class="bg-white text-black font-semibold rounded-full py-2 px-4 inline-flex items-center gap-2 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95">
                reservas@sakuraexpedition.com
                <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Correo Electrónico" class="w-5 h-5" />
              </button>
              <div class="text-sm mt-1 text-gray-200">Correo Electrónico</div>
            </div>
            <div>
              <button class="bg-white text-black font-semibold rounded-full py-2 px-4 inline-flex items-center gap-2 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95">
                <strong class="font-bold">Reserva Ahora</strong>
                <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="Reserva" class="w-5 h-5" />
              </button>
              <div class="text-sm mt-1 text-gray-200">Sistema de Reservas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
