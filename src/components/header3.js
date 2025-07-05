export function getHeader3HTML() {
    return `
        <nav class="w-full mx-auto shadow-lg p-4 relative z-50" style="background: #aa252e">
            <div class="flex flex-wrap items-center justify-end lg:justify-center">
                <!-- Toggle button for mobile -->
                <button id="navbar-toggler" class="lg:hidden px-3 py-2 text-white hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light rounded-lg" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>

                <!-- Navigation links -->
                <div class="hidden lg:flex lg:w-auto w-full" id="navbarNav">
                    <ul class="flex flex-col lg:flex-row lg:space-x-2 mt-4 lg:mt-0 lg:justify-center w-full">
                        
                        <!-- Camino Inca y Salkantay Trek -->
                        <li class="group nav-item relative">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light
                                      aria-[current=page]:text-primary aria-[current=page]:font-semibold aria-[current=page]:bg-primary-light cursor-pointer"
                               aria-current="page">
                                Camino Inca | Salkantay trek
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 group-[aria-current=page]:scale-x-100"></span>
                            </a>
                            <!-- Submenu -->
                            <div class="absolute left-0 mt-0 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 z-50">
                                <div class="p-4">
                                    <div class="mb-4">
                                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Camino Inca a Machu Picchu</h3>
                                        <ul class="space-y-1">
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Camino Inca a Machu Picchu</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Camino Inca Express 1 Día</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Camino Inca 2 días + noche</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Camino Inca 2 días - servicio privado</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Camino Inca Clásico 4 días</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Camino Inca a Machu Picchu privado 4 días</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Valle VIP + conexión Camino Inca un día</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Valle Sagrado & Camino Inca 4 días</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-semibold text-gray-700 mb-2">Caminatas Salkantay a Machu Picchu</h3>
                                        <ul class="space-y-1">
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Caminata a la Laguna Huamantay y Salkantay Trek 2 días</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Salkantay Trek a Machu Picchu 3 días Domos</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Salkantay Trek 5 días con domos</a></li>
                                            <li><a href="#" class="text-xs text-gray-600 hover:text-red-600 block py-1">Salkantay Trek 4 días privado + Domos Geodésicos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- Machu Picchu por Tren -->
                        <li class="group nav-item relative">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light cursor-pointer">
                                Machu Picchu por Tren
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <!-- Submenu -->
                            <div class="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Machu Picchu por tren Expedition 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Machu Picchu por tren Vistadome 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Machu Picchu por tren + Waynapicchu 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Machu Picchu por tren 2 Días</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Machu Picchu por tren + Waynapicchu 2 Días 1 noche</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Valle Sagrado + Machu Picchu 2 Días</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <!-- Caminatas de 1 Día -->
                        <li class="group nav-item relative">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light cursor-pointer">
                                Caminatas de 1 Día
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <!-- Submenu -->
                            <div class="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Montaña de colores 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Montaña de colores con valle rojo full day</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Montaña de colores en cuatrimoto</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Laguna Huamantay - 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Palcoyo - Montaña colores 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Pallay Punchu 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Waqrapukara 1 día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Queswachaka y 4 Lagunas 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Ausangate y 7 Lagunas 1 día</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <!-- Paquetes Perú -->
                        <li class="group nav-item relative">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light cursor-pointer">
                                Paquetes Perú
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <!-- Submenu -->
                            <div class="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Perú Machu Picchu encantador 4D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Tour Machu Picchu oro 4D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Tour Machu Picchu inca 5D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Tour Perú Magnífico Machu Picchu 6D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Tour Machu Picchu Cusco 6D</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Tour Perú centro & sur 7D</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <!-- Top Tours Perú -->
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Top Tours Perú
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>

                        <!-- Tours Cusco -->
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Tours Cusco
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>

                        <!-- Tour Selva Amazónica -->
                        <li class="group nav-item relative">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light cursor-pointer">
                                Tour Selva Amazónica
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <!-- Submenu -->
                            <div class="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Eco Jungle 2d/1n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Ecológico 3d/1n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Eco mágico 3d/2n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Eco sandoval - puerto maldonado 3D/2n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Eco aventura 4d/3n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Eco paraíso 5d/4n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Manu zona cultural 4 días</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Manu zona reservada 7 días</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <!-- Destinos Perú -->
                        <li class="group nav-item relative">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light cursor-pointer">
                                Destinos Perú
                                <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                            <!-- Submenu -->
                            <div class="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2 z-50">
                                <div class="p-4">
                                    <ul class="space-y-1">
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Paracas - Huacachina 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Isla de Uros y Taquile 2d/1n</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Puno, Uros y Taquile 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Cañón del colca 1 Día</a></li>
                                        <li><a href="#" class="text-sm text-gray-600 hover:text-red-600 block py-2">Cañón del colca 2 días</a></li>
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

export function initHeaderListeners() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function() {
            navbarNav.classList.toggle('hidden');
            const expanded = !navbarNav.classList.contains('hidden');
            this.setAttribute('aria-expanded', expanded);
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        if (!nav.contains(event.target)) {
            // Optional: Close mobile menu when clicking outside
            if (navbarNav && !navbarNav.classList.contains('hidden')) {
                navbarNav.classList.add('hidden');
                if (navbarToggler) {
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });
}