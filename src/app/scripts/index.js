
import "../styles/Style.scss"
const d = document
import { printSmallPokemons, printBigPokemons, arrows } from "./printPokemons.js"
import arraypokemon from "./data.js"
const input_pokemon = d.getElementById('input_pokemon')
import { autocomplete } from "./autocomplete.js"
import { newSearchPokemon } from "./searchbar.js"
import { readingSmallpokemon } from "./printPokemons.js"

d.addEventListener('DOMContentLoaded', async () => {

    await printSmallPokemons(1,5)
    await printBigPokemons(1)
    arrows(1,5)
    autocomplete(input_pokemon, arraypokemon)
    newSearchPokemon()
    readingSmallpokemon()
})