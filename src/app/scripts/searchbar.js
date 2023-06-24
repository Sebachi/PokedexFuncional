const d = document
const search_pokemon = d.getElementById('search_pokemon')
const input_pokemon = d.getElementById('input_pokemon')
import { printSmallPokemons, printBigPokemons } from "./printPokemons.js"
import { getPokemon } from "./data.js"


export const newSearchPokemon =  () => {
    const handdletoogle = async () => {
      const pokemonTarget = await getPokemon(input_pokemon.value)
      input_pokemon.value = ''
       const idpokemon = pokemonTarget['id']
       await printBigPokemons(idpokemon)
    await printSmallPokemons(idpokemon, (idpokemon + 4))
    }

    const handleKeyPress = async (event) => {
      if (event.key === "Enter") {
        await handdletoogle()
        }
    }

    input_pokemon.addEventListener('keypress', handleKeyPress);

    search_pokemon.addEventListener('click', async (e) => {
        e.preventDefault();
      await handdletoogle()
    })
   
  }