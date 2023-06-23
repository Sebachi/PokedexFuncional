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

  export   const printSmallPokemons = async () => {
    smallPokemons.innerHTML = ``
     for (let i = 1; i < 5; i++) {
        const pokemonsData = await getPokemon(i)
        const {other} =  pokemonsData['sprites'];
        const spritesPokemon = other['official-artwork'].front_default
        console.log(spritesPokemon);
         smallPokemons.innerHTML +=
         `
              <figure id=''>
                 <img class="poke_small" src="${spritesPokemon}" alt=""> </figure>`

     }
 }

