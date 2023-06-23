export const URL_API = "https://pokeapi.co/api/v2/pokemon/"

const URL_POKEMONS = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"




let arraypokemon = []
const getArrayPokemon = async () => {
    try {
      const {data} = await axios.get(`${URL_POKEMONS}`);
      const pokemons = data['results']
    pokemons.forEach(pokemon => { 
        arraypokemon.push(pokemon.name)
    });
       return arraypokemon;
    } catch (error) {
      console.log(error);
      return  error;
    }
  }
  getArrayPokemon()




export default arraypokemon