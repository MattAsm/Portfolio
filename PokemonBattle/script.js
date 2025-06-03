const startGameBtn = document.getElementById("startGameBtn");

const enemySprite = document.getElementById("enemySprite");
const enemyName = document.getElementById("enemyName");
const enemyHealth = document.getElementById("enemyHealth");

const playerSprite = document.getElementById("playerSprite");
const playerName = document.getElementById("playerName");
const playerHealth = document.getElementById("playerHealth");

const field = document.getElementById("container");
const load = document.getElementById("loader");

let enemy;
let you;
let yourTurn;

const BGM = document.getElementById("BGM");
const musicBtn = document.getElementById("musicBtn");
const help = document.getElementById("help");

let enemyHp = 100;
let playerHp;

function pokemon(name, hp, atk, def, spAtk, spDef, spd, sprite){
            this.name = name;
            this.hp = hp;
            this.atk = atk;
            this.def = def;
            this.spAtk = spAtk;
            this.spDef = spDef;
            this.spd = spd;
            this.sprite = sprite;
        }


async function loadPokemonData(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    
    if(!response.ok){
        throw new Error("Error, problem with HTTPS connection ;-;");

        
    }
    
    const data = await response.json();

    const names = data.results.map(x => x.name);

    const pkmnName = names[Math.floor(Math.random() * names.length)];

    const pkmnResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnName}`);
    const pkmnData = await pkmnResponse.json();


    let Pkmn = new pokemon(pkmnData.species.name, 
        pkmnData.stats[0].base_stat, pkmnData.stats[1].base_stat, 
        pkmnData.stats[2].base_stat, pkmnData.stats[3].base_stat, 
        pkmnData.stats[4].base_stat, pkmnData.stats[5].base_stat,
        pkmnData.sprites.front_default);

    return {Pkmn};
}

async function setUp(){
    startGameBtn.remove();
    load.style.display = "block";
    enemy = await loadPokemonData();
    you = await loadPokemonData();

    enemySprite.src = enemy.Pkmn.sprite;
    enemySprite.alt = enemy.Pkmn.name;
    enemySprite.style.width = "100%";
    enemyName.textContent = enemy.Pkmn.name.charAt(0).toUpperCase() + enemy.Pkmn.name.slice(1);
    enemyHealth.textContent =`HP: ${enemy.Pkmn.hp}/${enemy.Pkmn.hp}`;


    playerSprite.src = you.Pkmn.sprite;
    playerSprite.alt = you.Pkmn.name;
    playerSprite.style.width = "100%";
    playerName.textContent = you.Pkmn.name.charAt(0).toUpperCase() + you.Pkmn.name.slice(1);
    playerHealth.textContent =`HP: ${you.Pkmn.hp}/${you.Pkmn.hp}`;

    field.style.display = "block";
    load.style.display = "none";
    BGM.volume = 0.1;
    BGM.play();
    fight(enemy.Pkmn, you.Pkmn);
}

function fight(enemyPkmn, yourPkmn){
    //If Defending, goes first, 
    //Attack heal and bide rely on speed
    enemyLogic(enemyPkmn);

    if(enemyPkmn.spd > yourPkmn.spd){
        yourTurn = false;
    }
    else{
        yourTurn = true;
    }
}

function enemyLogic(pokemon){
    if(enemyHp > pokemon.hp/3)
    {
        let x = Math.floor(Math.random() * 4) + 1;
        switch(x){
            case 1:
                Attack();
                break;
            case 2:
                Defend();
                break;
            case 3:
                Bide();
                break;
            case 4:
                Heal();
                break;
            default:
                Attack();
        }
    }
}

function volumeUp(){
    if(BGM.volume > 0.9){
        BGM.volume = 1;
    }
    else{
        BGM.volume += 0.1; 
    }

    console.log(BGM.volume);
}

function volumeDown(){
    if(BGM.volume < 0.1){
        BGM.volume = 0;
    }
    else{
        BGM.volume -= 0.1; 
    }
    console.log(BGM.volume);
}

function playPause(){
    if(BGM.paused){
        BGM.play();
        musicBtn.textContent = 'Pause';
    }
    else{
        BGM.pause();
        musicBtn.textContent = 'Play';
    }
}

function helpDisplay(){
    if(help.style.display == "block"){
        help.style.display = "none"
    }
    else
        help.style.display = "block";
}

