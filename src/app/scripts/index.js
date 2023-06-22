import {URL_API} from "./data.js"
import "../styles/style.css"
const d = document
const smallPokemons = d.getElementById('smallPokemons')
const bigPokemon = d.getElementById('bigPokemon')





const getPokemon = async () => {
    try {
      const { data } = await axios.get(`${URL_API}/`);
      return data;
    } catch (error) {
      console.log(error);
      return  error;
    }
  }
  


  const printSmallPokemons = async () => {
    const pokemons = await getPokemon()
    console.log(pokemons);
     for (let i = 1; i < pokemons.length; i++) {
        console.log(pokemons[i].forms.name);
         smallPokemons.innerHTML += `<h2> OTHeRS</h2>
         <section class="pokemons">
         <figure>
             <img class="poke_small" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" alt=""> </figure>
          <figure>  <img class="poke_small" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png" alt=""> </figure> 
          <figure>   <img class="poke_small" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png" alt=""> </figure> 
             <figure>  <img class="poke_small" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png" alt=""> </figure> 
         </section>`
     }
    
  
 
 }

printSmallPokemons()


