import "./../css/header.css";

export function getHeader2HTML() {
  return `
   <nav class="bg-white shadow-sm">
  <div class="container mx-auto px-1 py-1">
    <div class="flex flex-wrap justify-between items-center">
      <!-- LOGO -->
      <div class="flex items-center">
        <a href="#" class="flex items-center">
          <img class="h-15 sm:h-20 " src="/log-v.png" alt="Logo">
        </a>
      </div>

      <!-- BLOQUE ICONOS Y CONTACTO -->
      <div class="flex flex-wrap gap-3 justify-center items-center">
        <!-- Email -->
        <div class="flex items-center py-2 px-3 rounded-full border" style="color: #aa252e">
          <i class="bi bi-envelope-fill" style="color: #aa252e"></i>
          <div class="leading-tight hidden sm:block ml-2 text-center">
            <small class="block" style="color: #aa252e">Email</small>
            <span class="font-bold text-gray-800">ventas@sakuraexpedition.com</span>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="flex items-center py-2 px-3 rounded-full border" style="color: #aa252e">
          <i class="bi bi-whatsapp" style="color: #aa252e"></i>
          <div class="leading-tight hidden sm:block ml-2 text-center">
            <small class="block" style="color: #aa252e">Ventas y Cotizaciones (+51)</small>
            <span class="font-bold text-gray-800">941 411 418 / 980 532 600</span>
          </div>
        </div>

        <!-- Teléfono solo en móvil -->
        <div class="flex items-center justify-center py-2 px-3 rounded-full border sm:hidden" style="color: #aa252e;">
          <i class="bi bi-telephone-fill" style="color: #aa252e"></i>
        </div>

        <!-- Social Icons (solo en pantallas grandes) -->
        <div class="hidden sm:flex gap-2 items-center justify-center text-xl" style="color: #aa252e">
          <a href="#" class="flex items-center justify-center"><i class="bi bi-tripadvisor"></i></a>
          <a href="#" class="flex items-center justify-center"><i class="bi bi-facebook"></i></a>
          <a href="#" class="flex items-center justify-center"><i class="bi bi-instagram"></i></a>
          <a href="#" class="flex items-center justify-center"><i class="bi bi-youtube"></i></a>
          <a href="#" class="flex items-center justify-center"><i class="bi bi-tiktok"></i></a>
        </div>

        <!-- Language -->
        <div class="hidden sm:flex items-center justify-center">
          <img src="https://flagcdn.com/es.svg" width="24" height="16" class="mr-1" alt="Español">
          <span class="font-bold">ES <i class="bi bi-caret-down-fill"></i></span>
        </div>

        <!-- Book Now Button -->
        <a href="#" class="hidden sm:flex items-center justify-center py-2 px-4 font-bold text-white rounded-full hover:bg-yellow-500 transition-colors" style="background-color: #e27e08;">
          BOOK NOW <i class="ml-2 bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</nav>
  `;
}