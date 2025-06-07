const pokeList = document.getElementById("pokemonList");
const teamList = document.getElementById("team-list");
const totalLvl = document.getElementById("totalLvl");
let team = [];

const pokedex = [
  { name: "Pikachu", level: 15, type: "Electric" },
  { name: "Charmander", level: 14, type: "Fire" },
  { name: "Bulbasaur", level: 13, type: "Grass" },
  { name: "Squirtle", level: 12, type: "Water" },
  { name: "Eevee", level: 11, type: "Normal" },
  { name: "Quaxly", level: 10, type: "Water"},
  { name: "Bidoof", level: 19, type: "Normal"}
];

const typeStyle = {
  Fire: "#ff0000",
  Water: "#16d0ff",
  Grass: "#19d800",
  Electric: "#ffff00",
  Normal: "#d1d1d1"
}

pokedex.forEach( ({name, level, type}) => {
  let pokemonH3 = document.createElement("h3");
  pokemonH3.textContent = `${name}, ${type}, Lvl: ${level}`;
  pokemonH3.style.color = typeStyle[type];
  pokemonH3.style.width = "250px";
  ////////////
  let addToTeamBtn = document.createElement("button");
  addToTeamBtn.textContent = "Add To Team";
  addToTeamBtn.style.backgroundColor = typeStyle[type];
  ////////////
  addToTeamBtn.addEventListener("click", () => {
    if(team.some(p => p.name === name)){
      console.log("Duplicate");
    }
    else if(team.length > 5){
      console.log("Team's full");
    }
    else{
      addToTeam({name, level, type});
    }
  });
  ////////////
  pokeList.append(pokemonH3, addToTeamBtn);
})

function addToTeam({name, level, type}){
    team.push({name, level, type});
    //////////
    let teamLi = document.createElement("li");
    teamLi.innerHTML = `${name}, ${type}, Lvl: ${level}<br>`;
    teamLi.style.color = typeStyle[type];
    teamLi.style.width = "250px";
    teamList.append(teamLi);
    /////////
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.backgroundColor = typeStyle[type];
    /////////
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        let pokeSprite = document.createElement("img");
        pokeSprite.src = data.sprites.front_default;
        pokeSprite.style.width = "200px";
        teamLi.append(pokeSprite);
      })
    //////////
    removeBtn.addEventListener("click", () => {  
      team = team.filter(p => p.name !== name);
      teamLi.remove();
      removeBtn.remove();
    });
    ///////////
    teamLi.append(removeBtn);
}