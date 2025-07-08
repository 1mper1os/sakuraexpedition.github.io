import "./../css/header.css";

export function getHeader3HTML() {
  return `
        <nav class="w-full mx-auto shadow-lg relative z-50 bg-[#aa252e]">
            <div class="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between lg:justify-center">
                <button id="navbar-toggler" class="lg:hidden p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-lg" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>

                <div class="hidden lg:flex flex-grow lg:flex-grow-0 lg:w-auto w-full absolute top-full left-0 bg-[#aa252e] lg:relative lg:top-auto lg:left-auto lg:bg-transparent transition-all duration-300 ease-in-out" id="navbarNav">
                    <ul class="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 p-4 lg:p-0 w-full lg:justify-center">
                        
                        <li class="group nav-item relative">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700
                                        aria-[current=page]:text-white aria-[current=page]:font-semibold aria-[current=page]:bg-red-700 cursor-pointer"
                               aria-current="page">
                                Camino Inca | Salkantay trek
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 group-[aria-current=page]:scale-x-100"></span>
                            </a>
                            <div class="lg:absolute left-0 mt-2 lg:mt-0 w-full lg:w-80 bg-white rounded-lg shadow-xl lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 ease-in-out transform lg:group-hover:translate-y-0 lg:-translate-y-2 z-50">
                                <div class="p-4">
                                    <div class="mb-4">
                                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Camino Inca a Machu Picchu</h3>
                                        <ul class="space-y-1">
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Camino Inca a Machu Picchu</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Camino Inca Express 1 Día</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Camino Inca 2 días + noche</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Camino Inca 2 días - servicio privado</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Camino Inca Clásico 4 días</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Camino Inca a Machu Picchu privado 4 días</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Valle VIP + conexión Camino Inca un día</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Valle Sagrado & Camino Inca 4 días</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Caminatas Salkantay a Machu Picchu</h3>
                                        <ul class="space-y-1">
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Caminata a la Laguna Huamantay y Salkantay Trek 2 días</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Salkantay Trek a Machu Picchu 3 días Domos</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Salkantay Trek 5 días con domos</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-[#aa252e] block py-1">Salkantay Trek 4 días privado + Domos Geodésicos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="group nav-item relative">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700 cursor-pointer">
                                Machu Picchu por Tren
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <div class="lg:absolute left-0 mt-2 lg:mt-0 w-full lg:w-72 bg-white rounded-lg shadow-xl lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 ease-in-out transform lg:group-hover:translate-y-0 lg:-translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Machu Picchu por tren Expedition 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Machu Picchu por tren Vistadome 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Machu Picchu por tren + Waynapicchu 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Machu Picchu por tren 2 Días</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Machu Picchu por tren + Waynapicchu 2 Días 1 noche</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Valle Sagrado + Machu Picchu 2 Días</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="group nav-item relative">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700 cursor-pointer">
                                Caminatas de 1 Día
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <div class="lg:absolute left-0 mt-2 lg:mt-0 w-full lg:w-72 bg-white rounded-lg shadow-xl lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 ease-in-out transform lg:group-hover:translate-y-0 lg:-translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Montaña de colores 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Montaña de colores con valle rojo full day</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Montaña de colores en cuatrimoto</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Laguna Huamantay - 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Palcoyo - Montaña colores 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Pallay Punchu 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Waqrapukara 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Queswachaka y 4 Lagunas 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Ausangate y 7 Lagunas 1 día</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="group nav-item relative">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700 cursor-pointer">
                                Paquetes Perú
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <div class="lg:absolute left-0 mt-2 lg:mt-0 w-full lg:w-72 bg-white rounded-lg shadow-xl lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 ease-in-out transform lg:group-hover:translate-y-0 lg:-translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Perú Machu Picchu encantador 4D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Tour Machu Picchu oro 4D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Tour Machu Picchu inca 5D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Tour Perú Magnífico Machu Picchu 6D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Tour Machu Picchu Cusco 6D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Tour Perú centro & sur 7D</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="group nav-item">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700"
                               href="#">
                                Top Tours Perú
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>

                        <li class="group nav-item">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700"
                               href="#">
                                Tours Cusco
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>

                        <li class="group nav-item relative">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700 cursor-pointer">
                                Tour Selva Amazónica
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <div class="lg:absolute left-0 mt-2 lg:mt-0 w-full lg:w-72 bg-white rounded-lg shadow-xl lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 ease-in-out transform lg:group-hover:translate-y-0 lg:-translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Eco Jungle 2d/1n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Ecológico 3d/1n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Eco mágico 3d/2n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Eco sandoval - puerto maldonado 3D/2n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Eco aventura 4d/3n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Eco paraíso 5d/4n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Manu zona cultural 4 días</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Manu zona reservada 7 días</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="group nav-item relative">
                            <a class="relative block py-2 px-3 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                        hover:text-white hover:bg-red-700 cursor-pointer">
                                Destinos Perú
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <div class="lg:absolute left-0 mt-2 lg:mt-0 w-full lg:w-72 bg-white rounded-lg shadow-xl lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-all duration-300 ease-in-out transform lg:group-hover:translate-y-0 lg:-translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Paracas - Huacachina 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Isla de Uros y Taquile 2d/1n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Puno, Uros y Taquile 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Cañón del colca 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-[#aa252e] block py-2">Cañón del colca 2 días</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    `;
}

// ---
// Javascript para el toggle del menú móvil
// ---

export function initHeaderListeners() {
  const navbarToggler = document.getElementById('navbar-toggler');
  const navbarNav = document.getElementById('navbarNav');

  if (navbarToggler && navbarNav) {
    navbarToggler.addEventListener('click', function() {
      navbarNav.classList.toggle('hidden');
      // Añadir la clase 'active-menu' o similar para estilos cuando el menú está abierto
      navbarNav.classList.toggle('active-menu'); 
      const expanded = !navbarNav.classList.contains('hidden');
      this.setAttribute('aria-expanded', expanded);
    });
  }

  // Cerrar submenús al hacer clic en cualquier lugar fuera de ellos
  document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.nav-item > div'); // Selecciona todos los submenús
    dropdowns.forEach(dropdown => {
      // Verifica si el clic no fue dentro del submenú ni en el elemento que lo activa
      if (!dropdown.contains(event.target) && !event.target.closest('.nav-item')) {
        // Asegura que solo se oculten en pantallas grandes donde el hover es el trigger
        if (window.innerWidth >= 1024) { // 'lg' breakpoint en Tailwind
          dropdown.classList.add('opacity-0', 'invisible', '-translate-y-2');
          dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
        }
      }
    });

    // Cerrar el menú móvil si se hace clic fuera de la navegación principal
    const nav = document.querySelector('nav');
    if (navbarNav && navbarToggler && !nav.contains(event.target)) {
      if (!navbarNav.classList.contains('hidden')) {
        navbarNav.classList.add('hidden');
        navbarNav.classList.remove('active-menu'); 
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Manejo del hover para submenús en desktop
  // Esto es para asegurar que los submenús se muestren al hacer hover en desktop
  // y se oculten al quitar el hover. Es lo que ya tenías, pero vale la pena mencionarlo.
  const navItemsWithDropdown = document.querySelectorAll('.nav-item.relative');
  navItemsWithDropdown.forEach(item => {
    item.addEventListener('mouseenter', function() {
      if (window.innerWidth >= 1024) { // Solo en desktop
        const dropdown = this.querySelector('.lg\\:absolute'); // Seleccionar el div del submenu
        if (dropdown) {
          dropdown.classList.remove('opacity-0', 'invisible', '-translate-y-2');
          dropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
        }
      }
    });

    item.addEventListener('mouseleave', function() {
      if (window.innerWidth >= 1024) { // Solo en desktop
        const dropdown = this.querySelector('.lg\\:absolute'); // Seleccionar el div del submenu
        if (dropdown) {
          dropdown.classList.add('opacity-0', 'invisible', '-translate-y-2');
          dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
        }
      }
    });
  });

  // Para el menú móvil: Abrir y cerrar submenús al hacer click en el enlace padre
  // Esto necesita JavaScript adicional porque el hover no funciona igual en táctil.
  const navLinksWithDropdown = document.querySelectorAll('.nav-item.relative > a');
  navLinksWithDropdown.forEach(link => {
    // Solo si el enlace tiene un SVG (indicador de dropdown) y es en móvil
    if (link.querySelector('svg') && window.innerWidth < 1024) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la navegación
        const parentLi = this.closest('.nav-item');
        const dropdown = parentLi.querySelector('.lg\\:absolute'); // El div del submenu

        if (dropdown) {
          // Si el dropdown está visible (no 'hidden' en móvil)
          if (dropdown.classList.contains('hidden')) {
            // Oculta todos los otros dropdowns abiertos
            document.querySelectorAll('.nav-item > div:not(.hidden)').forEach(openDropdown => {
                openDropdown.classList.add('hidden');
            });
            // Abre este
            dropdown.classList.remove('hidden');
          } else {
            // Cierra este
            dropdown.classList.add('hidden');
          }
        }
      });
    }
  });

  // Cerrar el menú móvil y los submenús si se redimensiona a desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) { // Si es desktop
      if (navbarNav && !navbarNav.classList.contains('hidden')) {
        navbarNav.classList.add('hidden'); // Asegura que el menú principal esté oculto
        navbarNav.classList.remove('active-menu');
        if (navbarToggler) {
          navbarToggler.setAttribute('aria-expanded', 'false');
        }
      }
      // Asegura que todos los submenús estén ocultos por defecto en desktop (solo via hover)
      document.querySelectorAll('.nav-item > div').forEach(dropdown => {
        dropdown.classList.add('opacity-0', 'invisible', '-translate-y-2');
        dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0', 'hidden'); // Remover 'hidden' si estaba en móvil
      });
    } else { // Si es móvil o tableta
        // Asegura que los submenús estén ocultos por defecto en móvil para que el JS los controle
        document.querySelectorAll('.nav-item > div').forEach(dropdown => {
            dropdown.classList.add('hidden');
            dropdown.classList.remove('opacity-0', 'invisible', '-translate-y-2', 'opacity-100', 'visible', 'translate-y-0');
        });
    }
  });
}