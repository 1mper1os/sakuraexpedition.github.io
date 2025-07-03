import "./../css/buscador.css";

export function buscador(){
    return `
       <div class="w-11/12 max-w-4xl mx-auto rounded-xl p-5 shadow-xl relative z-10 mt-[-70px]"
         style="animation: fadeInDown 0.7s ease-out forwards; background-color: #aa252e;">
       
        <div class="mb-3 flex items-center">
            
            <svg class="w-6 h-6 lg:w-8 lg:h-8 text-white mr-2 transition-transform duration-200 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <span class="text-white font-bold text-base">¿A dónde quieres ir?</span>
        </div>

        
        <div class="bg-white rounded-full px-4 flex items-center h-14 shadow-inner">
            
            <input type="text" class="flex-grow border-none focus:outline-none text-gray-800 font-bold placeholder-gray-500 placeholder-custom"
                   placeholder="Busca el tour que quieres">

            
            <div class="h-8 w-px mx-4" style="background: linear-gradient(to bottom, #f4a300 50%, #b91d1d 50%);"></div>

            
            <select class="border-none bg-white text-gray-700 w-full lg:w-64 focus:outline-none focus:ring-2 focus:ring-primary-light rounded-md custom-select-arrow">
                <option selected disabled>Selecciona la categoría</option>
                <option value="aventura">Aventura</option>
                <option value="cultural">Cultural</option>
                <option value="gastronomia">Gastronomía</option>
            </select>

            
            <div class="h-8 w-px mx-4" style="background: linear-gradient(to bottom, #f4a300 50%, #b91d1d 50%);"></div>

            
            <button class="bg-transparent border-none text-primary text-2xl w-12 h-12 flex items-center justify-center rounded-full
                           transition-colors duration-200 hover:text-[#a30012] hover:bg-primary-light">
                <!-- Icono de lupa en línea SVG -->
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
    `;
}