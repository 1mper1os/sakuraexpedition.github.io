import footerData from '../jsons/footer.json';

function createFooterLinkList(items) {
  return items.map(item => `<li><a href="${item.url}" class="text-white hover:text-gray-300 transition-colors duration-200">${item.text}</a></li>`).join('');
}

function createContactInfoList(contacts) {
  return contacts.map(contact => {
    let iconPath = '';
    let link = '';
    let displayValue = contact.value;

    switch (contact.type) {
      case 'email':
        iconPath = 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z';
        link = `mailto:${contact.value}`;
        break;
      case 'phone':
        iconPath = 'M3 5a1 1 0 011-1h2.586a1 1 0 01.707.293l2.586 2.586a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0L6.707 9.293a1 1 0 00-1.414 0L4 10.586a1 1 0 00-.293.707V15a1 1 0 001 1h6a1 1 0 001-1v-2.293a1 1 0 00-.293-.707l-1.586-1.586a1 1 0 010-1.414l2.586-2.586A1 1 0 0118 8V5a1 1 0 011-1z';
        link = `tel:${contact.value.replace(/\s/g, '')}`; // Eliminar espacios para el enlace tel
        if (contact.label) displayValue = `${contact.label}: ${contact.value}`; // Mostrar etiqueta si existe
        break;
      case 'address':
        iconPath = 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z';
        link = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.value)}`; // Enlace a Google Maps
        break;
      default:
        return ''; // No renderizar si el tipo es desconocido
    }

    return `
      <li class="flex items-start mb-2 last:mb-0">
        <svg class="w-5 h-5 text-gray-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="${iconPath}" clip-rule="evenodd"></path>
        </svg>
        <a href="${link}" target="${contact.type === 'address' ? '_blank' : '_self'}" rel="${contact.type === 'address' ? 'noopener noreferrer' : ''}" class="text-white hover:text-gray-300 transition-colors duration-200">
          ${displayValue}
        </a>
      </li>
    `;
  }).join('');
}


export function getFooterHTML() {
  const { companyName, aboutUsLinks, contactInfo, ourDestinations } = footerData;

  return `
    <footer class="bg-[#aa252e] py-12 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: url('/img/map-pattern.png'); background-repeat: repeat; background-size: 200px;"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-white">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-4 border-b border-white/30 pb-2">${companyName}</h3>
            <ul class="space-y-2 text-sm">
              ${createFooterLinkList(aboutUsLinks)}
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4 border-b border-white/30 pb-2">Contactos</h3>
            <ul class="space-y-2 text-sm">
              ${createContactInfoList(contactInfo)}
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4 border-b border-white/30 pb-2">Nuestros destinos</h3>
            <ul class="space-y-2 text-sm">
              ${createFooterLinkList(ourDestinations)}
            </ul>
          </div>
        </div>

        <div class="text-center mt-12 pt-8 border-t border-white/30 text-sm text-gray-200">
          &copy; ${new Date().getFullYear()} ${companyName}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `;
}

export function initFooterLogic() {
  // No hay lógica interactiva compleja aquí, solo renderizado.
  // Pero la función se mantiene por consistencia si en el futuro se añade interactividad.
  console.log('Footer logic initialized (if any).');
}

// Funciones de compatibilidad
export function footer() {
  return getFooterHTML();
}

export function initFooter() {
  initFooterLogic();
}