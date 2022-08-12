import './style.css'
import Tamagochi from './src/Tamagochi.js';

const tamagochi = new Tamagochi();

document.querySelector('#app').innerHTML = `
  <div>
    <section id="status">
      <p id="hunger">hunger: ${tamagochi.hunger}</p>
      <p id="energy">energy: ${tamagochi.energy}</p>
      <p id="mood">mood: ${tamagochi.mood}</p>
    </section>

    <section id="tamagochi">
      ${tamagochi.tamagochiState()}
    </section>

    <section id="actions">
      <button id="play">play</button>
      <button id="eat">eat</button>
      <button id="sleep">sleep</button>
    </section>
  </div>
`
// -> appendChild

setupCounter(document.querySelector('#counter'))
