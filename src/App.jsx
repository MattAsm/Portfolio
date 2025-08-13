import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer';
import SiteCard from './Components/siteCard';

function App() {

  return (
    <div>
      <a href="https://mattasm.github.io/"><img src="src\assets\Logo.png" alt="My logo" title='Homepage' id='logo'/></a>
      <Header />
        <main>
          <a href="https://www.linkedin.com/in/matthew-asmunt/" title='LinkedIn' target='_blank'><img src='src\assets\Me.jpg' alt="" id='me'/></a>
          <h4 id='description'>I am a programmer, web designer, videogame developer, and animator. This is a collection of my
            applications and websites.</h4>
          <br /><hr />
          
          <details open>
            <summary className='dropdowns'>React Based Websites</summary>
                <div id='apps'>
                  <SiteCard siteName={"Pomodoro App"} URL={"https://mattasm.github.io/PomodoroApp/"} img={"./src/assets/Pomodoro.JPG"} />
                  <SiteCard siteName={"Memory Game"} URL={"https://mattasm.github.io/MemoryGame/"} img={"./src/assets/MemoryGame.JPG"} />
                  <SiteCard siteName={"Pokemon Search"} URL={"https://mattasm.github.io/PokemonSearch/"} img={"./src/assets/PkmnSearch.JPG"} />
                  <SiteCard siteName={"React Playground"} URL={"https://mattasm.github.io/React-Playground/"} img={"./src/assets/ReactPlayground.JPG"} />
                </div>
          </details>

          <details open>
            <summary className='dropdowns'>JavaScript Websites</summary>
                <div id='apps'>
                  <SiteCard siteName={"Mockup Company Website"} URL={"https://mattasm.github.io/SiteMockUp/"} img={"./src/assets/Mockup.JPG"} />
                  <SiteCard siteName={"Link Tree"} URL={"https://mattasm.github.io/LinkTreePortfolio/"} img={"./src/assets/AndrewPortfolio.JPG"} />
                  <SiteCard siteName={"Pokemon Team Builder"} URL={"https://mattasm.github.io/PokemonTeamMaker/"} img={"./src/assets/PKMNTeam.JPG"} />
                  <SiteCard siteName={"Pokemon Battle (WIP)"} URL={"https://mattasm.github.io/PokemonBattle/"} img={"./src/assets/PkmnBtl.png"} />
                </div>
          </details>

        </main>
      <Footer />
    </div>
  )
}

export default App
