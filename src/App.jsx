import { meta } from '@eslint/js'
import { use } from 'react';
import { useEffect, useState } from 'react'

function App() {

  const [searchterm, setSearchterm] = useState('')
  const [data, setData] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  }

  useEffect(() => {

    async function getTrendingMovies() {
      try {
        // const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, API_OPTION)
        const jsondata = await response.json();
        console.log(jsondata)
        setData(jsondata)

      } catch (error) {
        console.log(error)
      }
    }
    getTrendingMovies();
  }, [])


  function fetchenter(e) {         //As user press enter button after typing any movie name in search input the fun call the fun that fetch data from api.
    if (e.key == 'Enter') {
      // getData();
    }
    console.log(e.key)
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
              <input value={searchterm} type="text" placeholder='Search through 300+ movies online' onKeyDown={(e) => { fetchenter(e) }} onChange={(e) => { setSearchterm(e.target.value) }} />
            </div>
          </div>
          <div className='trending'>
            <div><span className='text-white absolute text-4xl translate-y-[-60px]'>Trending</span></div>
            <div>
              <ul>  
              {
                data ? data.results ? data.results.map((e, index) => <li key={e.id}> <p>{index + 1}</p> <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} /> </li>) : null : null
              }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
