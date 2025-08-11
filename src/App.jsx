import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      <Header />
        <main>
          <a href="https://www.linkedin.com/in/matthew-asmunt/" title='LinkedIn' target='_blank'><img src='src\assets\Me.jpg' alt="" id='me'/></a>
          <h4 id='description'>I am a programmer, web designer, videogame developer, and animator. This is a collection of my
            applications and websites.</h4>
          <br /><hr />
          
        </main>
      <Footer />
    </div>
  )
}

export default App
