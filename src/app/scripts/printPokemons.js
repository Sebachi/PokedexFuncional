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
  if (!(a <= 0) && !(b > 1011) ) {
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
  else if (a <= 0) {
  for (let i = 1007; i < 1011; i++) {
    const pokemonsData = await getPokemon(i);
    const { other } = pokemonsData['sprites'];
    const spritesPokemon = other['official-artwork'].front_default;
    smallPokemons.innerHTML += `
      <figure id='${i}'>
        <img class="poke_small" src="${spritesPokemon}" alt="">
      </figure>
    `;
  }
}
else if (b > 1011) {
for (let i = 1; i < 5; i++) {
  const pokemonsData = await getPokemon(i);
  const { other } = pokemonsData['sprites'];
  const spritesPokemon = other['official-artwork'].front_default;
  smallPokemons.innerHTML += `
    <figure id='${i}'>
      <img class="poke_small" src="${spritesPokemon}" alt="">
    </figure>
  `;
}
}
}

export const arrows = (a, b) => {
  arrowLeft.addEventListener("click", () => {
    if (!(a <= 0) || (b >= 1281)) {
      a = a 
      b = b 
      a = a - 4
      b = b - 4 
      printSmallPokemons(a, b);
      console.log("izquierda", a, b);
}});

  arrowRight.addEventListener("click", () => {

      a += 4
      b += 4
      printSmallPokemons(a, b);
      console.log("derecha", a, b);
  });
};

const arrayBigpokemon = []
 export const printBigPokemons = async (pokemonId) => {
  const pokemonsData =  await getPokemon(pokemonId)
  console.log(pokemonsData);
  const abilities = pokemonsData['abilities']
  const ability = abilities[0]['ability']['name'];
  const name = pokemonsData['name']
  const types = pokemonsData['types']
  const type = pokemonsData['types'][0]['type']['name']
  let type2
   if (!(types[1] === undefined)){ type2 = pokemonsData['types'][1]['type']['name']}
   else {type2 = `None`}

  const type1Moji = typesEmojis(type) 
  const type2Moji = typesEmojis(type2) 
  const height = pokemonsData['height']
  const weight = pokemonsData['weight']
  const sprite = pokemonsData['sprites']['other']['official-artwork'].front_default
  

  const id = pokemonsData['id']
      bigPokemon.innerHTML =
    `
       <section class="pokemon">
       <div class="titular"> <h1>
        ${type1Moji}${type2Moji} ${name}
        </h1> </div>
        <figure><img class="poke_big" src="${sprite}" alt="Pokemonimg"> </figure>
    </section>
    <section class="stats">
        <ul class="values">
            <li>NO.</li>
            <li>TYPE</li>
            <li>2ND TYPE</li>
            <li>HABILITY</li>
            <li>HEIGHT</li>
            <li>WEIGHT</li>
        </ul>
        <ul class="data">
            <li>${id}</li>
            <li>${type}</li>
            <li>${type2}</li>
            <li>${ability}</li>
            <li>${height} M</li>
            <li>${weight} Kg</li>
        </ul>
    </section>`

   }