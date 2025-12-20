import { useEffect, useState } from 'react'
import Moviecard from './components/Moviecard';
import { getSearchtermmovies } from './Pages/SearchMoviesPage';
import { useNavigate } from 'react-router-dom';
import { logout } from './firebase';

function Mainpage({ searchterm, setSearchterm, setData }) {


    const [trendingMovies, setTrendingMovies] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null)
    const navigate = useNavigate();                                    //always use useNavigate hook at top of component like we define state and use naviaget wherever you want.

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const API_OPTION = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };




    useEffect(() => {

        async function getTrendingMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, API_OPTION)
                const jsondata = await response.json();
                // console.log(jsondata)
                setTrendingMovies(jsondata)

            } catch (error) {
                console.log(error)

            }
        }
        getTrendingMovies();
    }, [])


    useEffect(() => {

        async function getPopularMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, API_OPTION)
                const jsondata = await response.json();
                // console.log(jsondata)
                setPopularMovies(jsondata)

            } catch (error) {
                console.log(error)

            }
        }
        getPopularMovies();
    }, [])




    function fetchenter(e) {         //As user press enter button after typing any movie name in search input the fun call the fun that fetch data from api.
        console.log(e.key)

        if (e.key == 'Enter') {

            getSearchtermmovies(searchterm).then((res) => setData(res)).catch((error) => console.log(error))
            navigate('/searchresult')
        }
    }



    return (
        <main>
            <div className='pattern'>     {/* here i learn pattern is a class name that is utility class define in index.css file have tailwind style so that it become reusable style. */}
                <div className='wrapper'>
                    <header>
                        
                        <button onClick={() => {logout()}} aria-label="Logout" className="flex items-center lg:px-4 lg:py-3 p-1.5 text-sm bg-white text-purple-500 font-semibold rounded-xl shadow hover:bg-gray-100 transition-all absolute lg:right-[-5vw] top-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ display: 'block' }}
                                aria-hidden="true"
                            >
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg> Logout
                        </button>

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
                                    trendingMovies ? trendingMovies.results ? trendingMovies.results.map((e, index) => <li className='effect' key={e.id}> <p>{index + 1}</p> <img src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} /> </li>) : null : null
                                }
                            </ul>
                        </div>
                    </div>
                    {/* All movie cards */}
                    <div className='all-movies'>
                        <div><span className='text-white absolute text-4xl translate-y-[-20px]'>All Movies</span></div>
                        <ul>
                            {
                                popularMovies ? popularMovies.results ? popularMovies.results.map((e) => <Moviecard key={e.id} data={e} image={e.backdrop_path ? e.backdrop_path : "https://via.placeholder.com/150?text=No+Image"} title={e.title} rating={e.vote_average} lang={e.original_language} year={e.release_date} />) : null : null
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </main>

    )
}

export default Mainpage