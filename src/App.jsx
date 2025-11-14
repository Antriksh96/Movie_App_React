import { useState } from 'react'

function App() {

   async function getData() {
    const response = await fetch('')
    const data = await response.json()
   }

  return (
    <main>
      <div className='pattern'>     {/* here i learn pattern is a class name that is utility class define in index.css file have tailwind style so that it become reusable style. */}
        <div className='wrapper'>
          <header>
            <img className='logo' src="logo.png" alt="" />
            <img src="/hero-img.png" alt="" />
            <h1 className='fancy-text'>Find <span className='text-gradient'>Movies</span> You’ll Love Without the Hassle</h1>
          </header>
          <div className='search'>
            <div>
              <img src="search.png" alt="" />
              <input type="text" placeholder='Search through 300+ movies online' />
            </div>
          </div>
          <div className='trending'>
            <h2>Trending</h2>

          </div>
        </div>
      </div>
    </main>
  )
}

export default App
