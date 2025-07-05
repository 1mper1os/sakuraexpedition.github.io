export function nosotros(){
    return `
        <section class="container mx-auto px-4 py-12 m-5 bg-white rounded-xl shadow-lg
                    animate-fade-in-up" style="animation: fadeInUp 0.7s ease-out forwards;">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Columna de texto -->
            <div class="lg:col-span-1">
                
                <div class="mb-6 flex items-center justify-center">
                    <img src="/log-h.png" alt="Logo Sakura" class="w-full max-w-xs h-auto rounded-xl ">
                </div>
                <p class="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                    Agencia de viajes auténtica y profesional 100% local, con un equipo profesional de trabajadores cusqueños apasionados por su cultura e historia y trabajando de la mano con las comunidades de bajos recursos económicos, organizamos todo tipo de servicios turísticos en la ciudad de Cusco, desde viajes clásicos, tradicionales, aventura, caminatas, como:
                    <span class="font-bold " style="color:#e27e08">Camino Inca</span>,
                    <span class="font-bold " style="color:#004351">Machu Picchu tour por tren</span>,
                    <span class="font-bold " style="color:#004351">con excursiones de un día, como Montaña de Colores o Montaña de 7 colores, Valle Sagrado de los incas, Laguna Humantay, Pallaypuncho Caminata 1 día, Palcoyo Montaña, Waqrapukara un día</span>.
                    También hemos preparado programas de 4 días y 7 días cubriendo Norte, Sur y centro del Perú, Ica, Lago Titicaca, Cañón del Colca y más con los mejores destinos que no debes dejar de visitar, elige el de tu preferencia.
                </p>
                <p class="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                    Somos Operadores directos de los tours en Cusco con un servicio de calidad y personalizado. Esto nos convierte en una de las empresas mejor calificadas en la ciudad de Cusco nuestros clientes hablan por nosotros en
                    <span class="font-bold " style="color: #e27e08">TripAdvisor</span>, y otras redes sociales.
                </p>
            </div>

            
            <div class="lg:col-span-1 flex flex-col md:flex-row gap-4">
                
                <div class="w-full md:w-1/2">
                    <img src="/n-1.jpg" alt="Equipo de Sakura" class="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
                </div>
                
                <div class="w-full md:w-1/2 flex flex-col gap-4">
                    <img src="/l-1.jpg" alt="Cusco" class="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
                    <img src="/l-2.jpg" alt="Machu Picchu" class="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
                </div>
            </div>
        </div>
    </section>
    `;
}