import { toUpper, upperCase } from "lodash"
import {URL_API} from "./data.js"
import axios from "axios"
const d = document
const smallPokemons = d.getElementById('smallPokemons')
const bigPokemon = d.getElementById('bigPokemon')


const getPokemon = async (index) => {
    try {
      const {data} = await axios.get(`${URL_API}${index}`);
      return data;
    } catch (error) {
      console.log(error);
      return  error;
    }
  }

  export   const printSmallPokemons = async (a,b) => {
    smallPokemons.innerHTML = ``
     for (let i = a; i < b; i++) {
        const pokemonsData = await getPokemon(i)
        const {other} =  pokemonsData['sprites'];
        const spritesPokemon = other['official-artwork'].front_default
         smallPokemons.innerHTML +=
         `
              <figure id='${i}'>
                 <img class="poke_small" src="${spritesPokemon}" alt=""> </figure>`

     }
 }

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
            <li>${pokemonId}</li>
            <li>100</li>
            <li>${type}</li>
            <li>${ability}</li>
            <li>${height} M</li>
            <li>${weight} Kg</li>
        </ul>
    </section>`

   }