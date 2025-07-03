import "./style.css";

import { getHeader1HTML } from "./components/header1";
import { getHeader2HTML } from "./components/header2.js";
import { getHeader3HTML, initHeaderListeners } from "./components/header3.js";
import { portada } from "./components/portada.js";
import { buscador } from "./components/buscador.js";
import { nosotros } from "./components/nosotros.js";
import { promociones, initPromociones } from "./components/promociones.js";
import {getTrainToursHTML, initTrainTours} from "./components/tours-machupicchu.js";
import { getCaminoIncaHTML, initCaminoInca  } from "./components/camino-inca.js";
import { getSalkantayHTML, initSalkantay } from "./components/salkantay.js";

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.querySelector("#app");

  if (appDiv) {
    appDiv.innerHTML =
      getHeader1HTML() +
      getHeader2HTML() +
      getHeader3HTML() +
      portada() +
      buscador() +
      nosotros() +
      promociones() +
      getTrainToursHTML() +
      getCaminoIncaHTML() +
      getSalkantayHTML();


    initHeaderListeners();
    initPromociones();
    initTrainTours(); 
    initCaminoInca();
    initSalkantay();
  } else {
    console.log("El elemento con ID 'app' no fue encontrado en el DOM");
  }
});