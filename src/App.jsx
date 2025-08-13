import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer';
import SiteCard from './Components/siteCard';

import logo from './assets/Logo.png';
import me from './assets/Me.jpg';
import pomodoro from './assets/Pomodoro.JPG';
import memoryGame from './assets/MemoryGame.JPG';
import pkmnSearch from './assets/PkmnSearch.JPG';
import reactPlayground from './assets/ReactPlayground.JPG';
import mockup from './assets/Mockup.JPG';
import andrewPortfolio from './assets/AndrewPortfolio.JPG';
import pkmnTeam from './assets/PKMNTeam.JPG';
import pkmnBattle from './assets/PkmnBtl.png';

function App() {

  return (
    <div>
      <a href="https://mattasm.github.io/Portfolio"><img src={logo} alt="My logo" title='Homepage' id='logo'/></a>
      <Header />
        <main>
          <a href="https://www.linkedin.com/in/matthew-asmunt/" title='LinkedIn' target='_blank'><img src={me} alt="" id='me'/></a>
          <h4 id='description'>I am a programmer, web designer, videogame developer, and animator. This is a collection of my
            applications and websites.</h4>
          <br /><hr />
          
          <details open>
          <summary className="dropdowns">React Based Websites</summary>
          <div id="apps">
            <SiteCard siteName="Pomodoro App" URL="https://mattasm.github.io/PomodoroApp/" img={pomodoro} />
            <SiteCard siteName="Memory Game" URL="https://mattasm.github.io/MemoryGame/" img={memoryGame} />
            <SiteCard siteName="Pokemon Search" URL="https://mattasm.github.io/PokemonSearch/" img={pkmnSearch} />
            <SiteCard siteName="React Playground" URL="https://mattasm.github.io/React-Playground/" img={reactPlayground} />
          </div>
        </details>

        <details open>
          <summary className="dropdowns">JavaScript Websites</summary>
          <div id="apps">
            <SiteCard siteName="Mockup Company Website" URL="https://mattasm.github.io/SiteMockUp/" img={mockup} />
            <SiteCard siteName="Link Tree" URL="https://mattasm.github.io/LinkTreePortfolio/" img={andrewPortfolio} />
            <SiteCard siteName="Pokemon Team Builder" URL="https://mattasm.github.io/PokemonTeamMaker/" img={pkmnTeam} />
            <SiteCard siteName="Pokemon Battle (WIP)" URL="https://mattasm.github.io/PokemonBattle/" img={pkmnBattle} />
          </div>
        </details>

        </main>
      <Footer />
    </div>
  )
}

export default App
