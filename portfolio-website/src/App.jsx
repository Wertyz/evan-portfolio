import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <h1>
         

              <div className="socials">
                     
                  <a href="https://www.linkedin.com/in/evanlegard" target="_blank" className="social-icon linkedin">LinkedIn<i className="fab fa-linkedin-in"></i></a>
                  <a href="https://store.steampowered.com/app/2185320/Lost_Trials/" target="_blank" className="social-icon lostrials">Lost Trials<i className="fab fa-linkedin-in"></i></a>
                  <a href="https://play.google.com/store/apps/details?id=com.GaslightDash.Minecart" target="_blank" className="social-icon gaslightdash">Gaslight Dash<i className="fab fa-linkedin-in"></i></a>

              </div>
             
          </h1>
    </>
  )
}

export default App
