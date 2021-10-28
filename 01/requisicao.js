/*fetch('https://pokeapi.co/api/v2/pokemon').then((response) => 
    response.json()
).then(json => {
    console.log(json)
})
*/

async function fetchPokemons(url) {
    const response = await fetch(url)
    
    const json = await response.json()
    return json
}

const pokemons = fetchPokemons('https://pokeapi.co/api/v2/pokemon')
