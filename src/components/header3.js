export function getHeader3HTML() {
    return `
        <nav class="w-full mx-auto shadow-lg  p-4" style="background: #aa252e">
            <!-- Main container for the toggle button and navigation links -->
            <!-- On small screens, the button aligns to the right (justify-end). -->
            <!-- On large screens (lg), the menu centers (lg:justify-center). -->
            <div class="flex flex-wrap items-center justify-end lg:justify-center">
                <!-- Toggle button for small screens (hidden on lg and above) -->
                <!-- Added id="navbar-toggler" for easier JavaScript selection -->
                <button id="navbar-toggler" class="lg:hidden px-3 py-2 text-white hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light rounded-lg" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>

                <!-- Navigation links -->
                <!-- By default, it's hidden on small screens and becomes a flex container on large screens. -->
                <!-- The JavaScript will toggle the 'hidden' class for mobile view. -->
                <div class="hidden lg:flex lg:w-auto w-full" id="navbarNav">
                    <ul class="flex flex-col lg:flex-row lg:space-x-2 mt-4 lg:mt-0 lg:justify-center w-full">
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light
                                      aria-[current=page]:text-primary aria-[current=page]:font-semibold aria-[current=page]:bg-primary-light"
                               aria-current="page" href="#">
                                Camino Inca y Salkantay trek
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 group-[aria-current=page]:scale-x-100"></span>
                            </a>
                        </li>
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Machu Picchu por Tren
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Caminatas de 1 Día
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Paquetes Perú
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Top Tours Perú
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Tours Cusco
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Tour Selva Amazónica
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li class="group nav-item">
                            <a class="relative block py-3 px-5 text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 ease-in-out
                                      hover:text-primary hover:-translate-y-1 hover:bg-primary-light"
                               href="#">
                                Destinos Perú
                                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100"></span>
                            </a>
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
}