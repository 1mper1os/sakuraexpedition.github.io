import "./../css/header.css";

export function getHeader2HTML() {
  return `
   <nav class="bg-white shadow-sm">
  <div class="contenedor container flex flex-wrap justify-between items-center mx-auto">
    <!-- LOGO -->
    <a href="#">
      <img class="h-25 sm:h-35" src="/log-v.png" alt="Logo">
    </a>

    <!-- BLOQUE ICONOS Y CONTACTO -->
    <div class="flex flex-wrap gap-3 justify-end items-center">
      <!-- Email -->
      <div class="flex items-center py-0.5 px-3 rounded-full border border-red-500">
        <i class="text-red-600 bi bi-envelope-fill"></i>
        <div class="leading-tight hidden sm:block ml-2">
          <small class="block text-red-600">Email</small>
          <span class="font-bold text-gray-800">ventas@sakuraexpedition.com</span>
        </div>
      </div>

      <!-- WhatsApp -->
      <div class="flex items-center py-0.5 px-3 rounded-full border border-red-500">
        <i class="text-red-600 bi bi-whatsapp"></i>
        <div class="leading-tight hidden sm:block ml-2">
          <small class="block text-red-600">Ventas y Cotizaciones (+51)</small>
          <span class="font-bold text-gray-800">941 411 418 / 980 532 600</span>
        </div>
      </div>

      <!-- Teléfono solo en móvil -->
      <div class="flex items-center py-0.5 px-3 rounded-full border border-red-500 sm:hidden">
        <i class="text-red-600 bi bi-telephone-fill"></i>
      </div>

      <!-- Social Icons (solo en pantallas grandes) -->
      <div class="hidden sm:flex gap-2 items-center text-xl text-red-600">
        <a href="#"><i class="bi bi-tripadvisor"></i></a>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-youtube"></i></a>
        <a href="#"><i class="bi bi-tiktok"></i></a>
      </div>

      <!-- Language -->
      <div class="hidden sm:flex items-center">
        <img src="https://flagcdn.com/es.svg" width="24" height="16" class="mr-1" alt="Español">
        <span class="font-bold">ES <i class="bi bi-caret-down-fill"></i></span>
      </div>

      <!-- Book Now Button -->
      <a href="#" class="hidden sm:flex items-center py-1.5 px-4 font-bold text-white rounded-full hover:bg-yellow-500" style="background-color: #e27e08;">
        BOOK NOW <i class="ml-2 bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
</nav>



  `;
}
