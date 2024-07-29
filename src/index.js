let respNav = true;
let respMap = true;
const barraNavegacion = document.getElementById("barraNavegacion");
const hamburguesa = document.getElementById("hamburguesa");
const navegacion = document.getElementById("navegacion");
const search = document.getElementById("search");
const form = document.querySelector("form");
const volverBtn = document.getElementById("volver-btn");
const mapa = document.getElementById("map");
const mostrarMapaBtn = document.getElementById("mostrarMapa-btn");
const mostrarMapaIcon = document.getElementById("mostrarMapa-img");
const ubicaciones = document.getElementsByClassName("ubicacion");
const ubicacionSponsor1 = document.getElementById("ubicacion-sponsor1");

function mostrarNav() {
  if (respNav) {
    barraNavegacion.classList.remove("translate-x-[-220px]");
    // Agregar transicion
    barraNavegacion.classList.add("transition-all");
    barraNavegacion.classList.add("duration-500");
  } else {
    barraNavegacion.classList.add("translate-x-[-220px]");
  }
}

function MostrarMapa() {
  if (respMap) {
    mapa.classList.add("h-[200px]");
    mapa.classList.remove("h-0");
    // Agregar transicion
    mapa.classList.add("transition-all");
    mapa.classList.add("duration-500");
  } else {
    mapa.classList.add("h-0");
    mapa.classList.remove("h-[200px]");
  }
}

function OcultarBarraNavegacion() {
  barraNavegacion.classList.add("translate-x-[-220px]");
}

function OcultarMostrarBuscar() {
  navegacion.classList.toggle("hidden");
  form.classList.toggle("hidden");
  form.classList.toggle("flex");
}

function AnimarFlecheMapa(trigger) {
    if(trigger){
        mostrarMapaIcon.classList.toggle("rotate-180");
    }
}

hamburguesa.addEventListener("click", () => {
  mostrarNav();
  navegacion.classList.toggle("hidden");
  respNav = !respNav;
});

document.addEventListener("click", (e) => {
  if (!respNav && !e.target.closest("#hamburguesa")) {
    OcultarBarraNavegacion();
    navegacion.classList.toggle("hidden");
    respNav = !respNav;
  }
});

search.addEventListener("click", () => {
  OcultarMostrarBuscar();
});

volverBtn.addEventListener("click", () => {
  OcultarMostrarBuscar();
});

window.addEventListener("scroll", () => {
  const scrollPosicion = window.scrollY;
  console.log(scrollPosicion);
  if (scrollPosicion > 640) {
    navegacion.classList.add("fixed");
    navegacion.classList.add("top-0");
    navegacion.classList.remove("mt-5");
    navegacion.classList.add("bg-black");
  } else {
    navegacion.classList.remove("fixed");
    navegacion.classList.remove("top-0");
    navegacion.classList.add("mt-5");
    navegacion.classList.remove("bg-black");
  }
});

mostrarMapaBtn.addEventListener("click", () => {
  MostrarMapa();
  AnimarFlecheMapa(true);
  respMap = !respMap;
});

Array.from(ubicaciones).forEach((ubicacion) => {
  ubicacion.addEventListener("click", () => {
    ubicacionSponsor1.classList.toggle("h-0");
  });
});
