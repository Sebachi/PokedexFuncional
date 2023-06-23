import {URL_API} from "./data.js"
import "../styles/Style.scss"
const d = document
import { printSmallPokemons } from "./printPokemons.js"
import arraypokemon from "./data.js"
import { printBigPokemons } from "./printPokemons.js"

d.addEventListener('DOMContentLoaded', async () => {

 await printSmallPokemons(1,5)
 await printBigPokemons(3)


})