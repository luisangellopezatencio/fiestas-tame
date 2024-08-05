// Variables de estado
let respNav = true;
let respMap = true;

// Elementos del DOM
const barraNavegacion = document.getElementById("barraNavegacion");
const hamburguesa = document.getElementById("hamburguesa");
const navegacion = document.getElementById("navegacion");
const mapa = document.getElementById("map");
const mostrarMapaBtn = document.getElementById("mostrarMapa-btn");
const mostrarMapaIcon = document.getElementById("mostrarMapa-img");
const ubicacionesBtn = document.getElementsByClassName("ubicacion");
const ubicacionSponsors = document.getElementsByClassName("mapSponsors")

// Función para mostrar/ocultar la barra de navegación
function mostrarNav() {
  if (respNav) {
    barraNavegacion.classList.remove("translate-x-[-220px]");
    barraNavegacion.classList.add("transition-all", "duration-500");
  } else {
    barraNavegacion.classList.add("translate-x-[-220px]");
  }
}

// Función para mostrar/ocultar el mapa
function mostrarMapa() {
  if (respMap) {
    mapa.classList.add("h-[200px]");
    mapa.classList.remove("h-0");
    mapa.classList.add("transition-all", "duration-500");
  } else {
    mapa.classList.add("h-0");
    mapa.classList.remove("h-[200px]");
  }
}

// Función para ocultar la barra de navegación
function ocultarBarraNavegacion() {
  barraNavegacion.classList.add("translate-x-[-220px]");
}

// Función para ocultar/mostrar la barra de navegación y formulario de búsqueda
function ocultarMostrarBuscar() {
  navegacion.classList.toggle("hidden");
  form.classList.toggle("hidden");
  form.classList.toggle("flex");
}

// Función para animar el ícono de flecha del mapa
function animarFlechaMapa(trigger) {
  if (trigger) {
    mostrarMapaIcon.classList.toggle("rotate-180");
  }
}

// Event listeners

// Toggle de la barra de navegación al hacer clic en el ícono de hamburguesa
hamburguesa.addEventListener("click", () => {
  mostrarNav();
  navegacion.classList.toggle("hidden");
  respNav = !respNav;
});

// Ocultar barra de navegación al hacer clic fuera de la misma
document.addEventListener("click", (e) => {
  if (!respNav && !e.target.closest("#hamburguesa")) {
    ocultarBarraNavegacion();
    navegacion.classList.toggle("hidden");
    respNav = !respNav;
  }
});

// Fijar la barra de navegación al hacer scroll
window.addEventListener("scroll", () => {
  const scrollPosicion = window.scrollY;
  if (scrollPosicion > 640) {
    navegacion.classList.add("fixed", "top-0", "bg-black");
    navegacion.classList.remove("mt-5");
  } else {
    navegacion.classList.remove("fixed", "top-0", "bg-black");
    navegacion.classList.add("mt-5");
  }
});

// Toggle del mapa al hacer clic en el botón correspondiente
mostrarMapaBtn.addEventListener("click", () => {
  mostrarMapa();
  animarFlechaMapa(true);
  respMap = !respMap;
});

// Toggle de la visibilidad del patrocinador al hacer clic en una ubicación
Array.from(ubicacionesBtn).forEach((ubicacion, index) => {
  ubicacion.addEventListener("click", (e) => {
    const sponsorIndex = Math.floor(index / 2);
    
    if (sponsorIndex < ubicacionSponsors.length) {
      ubicacionSponsors[sponsorIndex].classList.toggle("h-0");
    }
  });
});
