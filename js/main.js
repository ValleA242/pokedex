//Example fetch using pokemonapi.co
document.querySelector('#search-btn').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#name-input').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${poke1}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let pokeName = data.forms[0].name.charAt(0).toUpperCase() + data.forms[0].name.slice(1); //assign pokemon name to variable 
        let pokeType = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1); // assign pokemon type to variable 


        
        
        document.querySelector('#name-screen').innerText = pokeName //display pokemon name in pokedex 
        document.querySelector('#type-screen').innerText = pokeType //display pokemon type in pokedex 
        document.querySelector('#weight').innerText = `Weight: ${Number(data.weight)/10}kg` //display pokemon weight in pokedex 
        document.querySelector('#height').innerText = `Height: ${data.height / 10}m` // display pokemon height in pokedex 
        document.querySelector('#main-screen').style.backgroundImage = `url(${data.sprites.other.home.front_default})` //
        document.querySelector('#id-screen').innerText = `#${data.id}`
        console.log(data.sprites.other.home.front_default)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}
