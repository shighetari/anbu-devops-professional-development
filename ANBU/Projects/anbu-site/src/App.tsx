import { useState } from 'react'
import anbuLogo from './assets/anbu.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://discord.gg/ANBUSolutions" target="_blank">
          <img src={anbuLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://discord.gg/ANBUSolutions" target="_blank">
          <img src={anbuLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://discord.gg/ANBUSolutions" target="_blank">
          <img src={anbuLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ANBU Solutions</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Bored? I will grant you {count} wishes! 🧞‍♂️ click me! 🧞‍♀️ 🧞‍♂️  
          
        </button>
        <p>
          Edit <code>src/App.tsx</code> to get started with development! <br />
          Sign up to our discord bellow to join our community! <br />
          <a href="https://discord.gg/ANBUSolutions" target="_blank">
            <img src={anbuLogo} className="logo" alt="ANBU logo" />
          </a>
          
        </p>
      </div>
      <p className="read-the-docs">
        Click on the ANBU logos to learn more and join our discord!
      </p>
    </div>
  )
}

export default App
