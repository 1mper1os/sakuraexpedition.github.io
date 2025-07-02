import "./style.css";

import { getHeader1HTML } from "./components/header1";
import { getHeader2HTML } from "./components/header2.js";

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.querySelector("#app");

  if (appDiv) {
    appDiv.innerHTML = getHeader1HTML() + getHeader2HTML();
  } else {
    console.log("El elemento con ID 'app' no fue encontrado en el DOOM");
  }
});
