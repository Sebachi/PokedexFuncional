import {URL_API} from "./data.js"
import "../styles/Style.scss"
const d = document
import { printSmallPokemons, printBigPokemons } from "./printPokemons.js"
import arraypokemon from "./data.js"
const input_pokemon = d.getElementById('input_pokemon')
import { autocomplete } from "./autocomplete.js"
import { newSearchPokemon } from "./searchbar.js"
d.addEventListener('DOMContentLoaded', async () => {

 await printSmallPokemons(1,5)
 await printBigPokemons('articuno')
 autocomplete(input_pokemon, arraypokemon)
 newSearchPokemon()
})