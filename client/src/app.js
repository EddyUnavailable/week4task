import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLoco from "/vite.svg";
import {  setupCounter } from ".counter.js"

import supabase from "./config/supabaseClient";
console.log(supabase);

document.querySelector("#app").innerHTML =
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src-"${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  </a>
  <h1>Hello Vite!</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
</div>
;