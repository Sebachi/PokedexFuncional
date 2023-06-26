
import { getPokemon } from "./data.js"
const d = document
const smallPokemons = d.getElementById('smallPokemons')
const bigPokemon = d.getElementById('bigPokemon')
const arrowLeft = d.querySelector(".arrow__left")
const arrowRight = d.querySelector(".arrow__right")

export const printSmallPokemons = async (a, b) => {
  smallPokemons.innerHTML = ""
  if (!(a <= 0) && !(a > 1007) ) {
    for (let i = a; i < b; i++) {
      const pokemonsData = await getPokemon(i);
      const { other } = pokemonsData['sprites'];
      const spritesPokemon = other['official-artwork'].front_default;
      smallPokemons.innerHTML += `
        <figure id='${i}' class="pokemon_small">
          <img class="poke_small" src="${spritesPokemon}" alt="">
        </figure>
      `;

    }
  }
  else{
    for (let i = 1; i < 5; i++) {
      const pokemonsData = await getPokemon(i);
      const { other } = pokemonsData['sprites'];
      const spritesPokemon = other['official-artwork'].front_default;
      smallPokemons.innerHTML += `
        <figure id='${i}' class="pokemon_small">
          <img class="poke_small" src="${spritesPokemon}" alt="">
        </figure>
      `;
    }
  }

}

export const arrows = (a, b) => {
   arrowLeft.addEventListener("click", () => {
      // a = a - 4
      a -= 4
      // b = b - 4 
      b -= 4
      printSmallPokemons(a, b);
});

  arrowRight.addEventListener("click", () => {
      a += 4
      b += 4
      printSmallPokemons(a, b);
  });
 
};


const typesEmojis = (callback) => { 
  let emoji = ''
  switch (callback) {
  case 'bug':
  emoji =  '🐞'
    break;
  case 'dark':
    emoji =  '👹'
    break;
  case 'dragon':
    emoji =   '🐉'
      break;
  case 'electric':
    emoji =  '⚡'
    break;
  case 'fairy':
    emoji =  '🧚‍♀️'
    break;
  case 'fighting':
    emoji =  '🥊'
    break;
    case 'fire':
      emoji =  '🔥'
    break;
    case 'flying':
      emoji =  '🦅'
    break;
    case 'ghost':
      emoji = '👻'
    break;
    case 'grass':
      emoji = '🍃'
    break;
    case 'ice':
      emoji =  '🧊'
    break;
    case 'poison':
      emoji =  '🍷'
      break;
      case 'normal':
        emoji = '🌀'
    break;
    case 'psychic':
      emoji = '🔮'
    break;
    case 'rock':
      emoji = '🪨'
    break;
    case 'steel':
      emoji = '🛡️'
    break;
    case 'water':
      emoji = '💦'
    break;
    case 'ground':
      emoji =  '⛱️'
    break;
  default: emoji = ''
  break;
  
}
return emoji
}

 export const printBigPokemons = async (pokemonId) => {
  const pokemonsData =  await getPokemon(pokemonId)
  const abilities = pokemonsData['abilities']
  let ability
  if (!(abilities[0] === undefined)){ ability= abilities[0]['ability']['name']}
  else {ability= `None`}

  let hAbility
  if (!(abilities[1] === undefined)){ hAbility= abilities[1]['ability']['name']}
  else {hAbility = `None`}
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
            <li>ABILITY</li>
            <li class='pseudohidden'>H. ABILITY</li>
            <li class='pseudohidden'>HEIGHT</li>
            <li class='pseudohidden'>WEIGHT</li>
        </ul>
        <ul class="data">
            <li>${id}</li>
            <li>${type}</li>
            <li>${type2}</li>
            <li>${ability}</li>
            <li class='pseudohidden'>${hAbility}</li>
            <li class='pseudohidden'>${height} M</li>
            <li class='pseudohidden'>${weight} </li>
        </ul>
    </section>`

   }

export const  readingSmallpokemon =  () => {
  smallPokemons.addEventListener('click', async (event) => {
      const clickedElement = event.target.closest('.pokemon_small') || null;
      if (!(clickedElement === null))
      {let pokeId = clickedElement.getAttribute("id") ;
      let cpokeId = Number(pokeId) + 4
      console.log(cpokeId);
      await printBigPokemons(Number(pokeId))
      await printSmallPokemons(Number(pokeId), cpokeId)
    }
      else{
        console.log('no pokemon in this space');
      }
    })
  }

