import { toUpper, upperCase } from "lodash"
import {URL_API} from "./data.js"
import axios from "axios"
import { getPokemon } from "./data.js"
const d = document
const smallPokemons = d.getElementById('smallPokemons')
const bigPokemon = d.getElementById('bigPokemon')
const arrowLeft = d.querySelector(".arrow__left")
const arrowRight = d.querySelector(".arrow__right")

export const printSmallPokemons = async (a, b) => {
  smallPokemons.innerHTML = ""
  if (!(a <= 0) || !(b >= 1281) ) {
    for (let i = a; i < b; i++) {
      const pokemonsData = await getPokemon(i);
      const { other } = pokemonsData['sprites'];
      const spritesPokemon = other['official-artwork'].front_default;
      smallPokemons.innerHTML += `
        <figure id='${i.value}'  class="pokemon__id">
          <img class="poke_small" src="${spritesPokemon}" alt="">
        </figure>
      `;
      const id = d.querySelector(".pokemon__id")
      id.addEventListener("click", () => {
        printBigPokemons(i)
      })
    }
    
  //   const figure = d.querySelector(".pokemon__id")
  //   figure.addEventListener("click", (event) => {
  //     const clickedFigure = event.target.closest("figure");
  //     const id = clickedFigure.id;
  //    printBigPokemons(id);
  //   })
  // }
  }
  else{ alert('No more pokemons')}
}

export const arrows = async(a, b) => {
  arrowLeft.addEventListener("click", () => {
    console.log("capturado");
    if (!(a <= 0) || (b >= 1281)) {
      a = a 
      b = b 
      a = a - 4
      b = b - 4 
      printSmallPokemons(a, b);
      console.log("izquierda", a, b);
    } else {
      console.log("Valor no válido");
    }
  });

  arrowRight.addEventListener("click", () => {
    if (!(a <= 0) || (b >= 1281)) {
      a = a 
      b = b 
      a = a + 4
      b = b + 4
      printSmallPokemons(a, b);
      console.log("derecha", a, b);
    } else {
      console.log("Valor no válido");
    }
  });
};

// export const pokemonId = () => {
//   const id = d.querySelector(".pokemon__id")
//   id.addEventListener("click", () => {
//     console.log("el id de estee es", );
//   })
// }

const arrayBigpokemon = []
 export const printBigPokemons = async (pokemonId) => {
  const pokemonsData =  await getPokemon(pokemonId)
  const abilities = pokemonsData['abilities']
  const ability = abilities[0]['ability']['name'];
  const name = pokemonsData['name']
  const type = pokemonsData['types'][0]['type']['name']
  const height = pokemonsData['height']
  const weight = pokemonsData['weight']
  const sprite = pokemonsData['sprites']['other']['official-artwork'].front_default
const id = pokemonsData['id']
      bigPokemon.innerHTML =
    `
       <section class="pokemon">
       <div class="titular"> <h1>
         ${name}
        </h1> </div>
        <figure><img class="poke_big" src="${sprite}" alt="Pokemonimg"> </figure>
    </section>
    <section class="stats">
        <ul class="values">
            <li>NO.</li>
            <li>LEVEL</li>
            <li>TYPE</li>
            <li>HABILITY</li>
            <li>HEIGHT</li>
            <li>WEIGHT</li>
        </ul>
        <ul class="data">
            <li>${id}</li>
            <li>100</li>
            <li>${type}</li>
            <li>${ability}</li>
            <li>${height} M</li>
            <li>${weight} Kg</li>
        </ul>
    </section>`

   }