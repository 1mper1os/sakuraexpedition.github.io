import "./../css/blogs.css";

export function getBlogsHTML() {
  return `
    <section class="bg-gray-100 py-12 fade-in">
      <div class="max-w-screen-xl mx-auto px-4 my-12">
        <!-- Encabezado -->
        <div class="mb-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div class="mx-auto md:mx-0">
            <div class="font-bold text-3xl text-[#003b4f] mb-2">Blogs</div>
            <div class="mx-auto divider7"></div>
          </div>
          <button class="bg-white text-gray-800 font-bold shadow-md rounded-full py-2 px-6 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95 mt-6 md:mt-0">
            Explorar todo <span class="ml-2">»</span>
          </button>
        </div>

        <!-- Contenido principal -->
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Imagen principal -->
          <div class="w-full md:w-1/2 flex justify-center">
            <img src="https://www.machupicchuperutours.com/wp-content/uploads/elementor/thumbs/Machu-picchu-Cusco-1-2-q9lrgdn6oz1xq8yeekqf4x2km0rpsj8y2wxjgrc86c.jpg" alt="Inti Raymi" class="w-3/4 md:w-full max-w-lg rounded-xl shadow-lg block transform transition-transform duration-300 hover:scale-105" />
          </div>

          <!-- Tarjetas secundarias -->
          <div class="w-full md:w-1/2 flex flex-col gap-6">
            ${getBlogCards()}
          </div>
        </div>
      </div>
    </section>
  `;
}

function getBlogCards() {
  const blogs = [
    {
      title: "Lanzamiento Inty Raymi",
      subtitle: "Reseñas positivas",
      image: "https://portal.andina.pe/EDPmedia/fotografia/2023/03/23/59336_inti%20tb.jpg",
      comments: 25
    },
    {
      title: "Montaña Nuevo Ingreso",
      subtitle: "Reseñas positivas",
      image: "https://www.incatrilogytours.com/wp-content/uploads/2023/12/1-1.jpg",
      comments: 15
    },
    {
      title: "Machupicchu abre sus puertas",
      subtitle: "Reseñas positivas",
      image: "https://www.incatrilogytours.com/wp-content/uploads/2021/11/machu-picchu-cusco-peru-1.jpg",
      comments: 15
    }
  ];

  return blogs.map(blog => `
    <div class="p-4 shadow-md rounded-xl flex items-center bg-white transition-transform duration-300 hover:scale-[1.02]">
      <img src="${blog.image}" alt="${blog.title}" class="rounded-lg mr-4 w-48 h-32 object-cover" />
      <div class="flex-1">
        <p class="mb-1 text-gray-500 text-sm">${blog.subtitle}</p>
        <h6 class="font-bold text-xl md:text-2xl text-blue-700">${blog.title}</h6>
        <hr class="border-t border-gray-300 my-2">
        <div class="flex items-center justify-between mt-4">
          <small class="text-gray-600 flex items-center blog-card-icon-container">
            ${getCommentIcon()}
            ${blog.comments} Comentarios
          </small>
          <button class="bg-red-700 text-white py-1 px-3 rounded-full text-sm transition-all duration-300 hover:bg-red-800 active:scale-95">Ver más...</button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCommentIcon() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor"
      class="blog-icon w-4 h-4 mr-1 transition-transform duration-300">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 
           .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 
           .375.375 0 0 1 .75 0Zm0 0H16.5M21 12c0 4.556-4.03 8.25-9 
           8.25a9.75 9.75 0 0 1-3.484-.626l-3 1.05a1.5 1.5 0 0 1-1.89-1.89l1.05-3.484A9.75 
           9.75 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  `;
}

export function blogs() {
  return getBlogsHTML();
}
