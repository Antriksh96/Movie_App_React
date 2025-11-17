import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
// import Moviecard from "../components/Moviecard";
function Moviepage() {


    const { state } = useLocation(); // if you use useNavigate hook to render the compo on a path you can see a obj/val with it and you can use the value inside the compo that rendering on that path that you pass while using useNavigate the use vlaue that receive from usenaviagte can you use by using useLocation hook inside the compo that render on on that path usse in useNavigate.
    const navigate = useNavigate()
    const [moviedetails, setMoviedetails] = useState(null)
    const [loading, setLoading] = useState(false)




    useEffect(() => {                                      // only one time useeffect will run when you load this page if you go back and return or no of time you open same page this will not run.
        async function getMoviedetails() {
            setLoading(true)

            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

            const API_OPTION = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
            };

            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${state?.id}`, API_OPTION)
                const data = await response.json()
                setMoviedetails(data)
                setTimeout(() => {
                    setLoading(false)
                }, 1000);

            } catch (error) {
                console.log(error)

            }
        }
        getMoviedetails();
    }, [state])

    if (loading) {
            return (
                <div className="flex justify-center items-center h-screen bg-black">
                    <Loading />
                </div>
            );
        }

    return (
        <div className="fancy-all w-full h-screen z-0 sans-serif bg-[#000000]">
            <div className="relative w-full h-[520px] overflow-hidden">
                {/* Background image full width */}
                <div
                    className="absolute inset-0 bg-cover bg-right"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${moviedetails?.backdrop_path})`,
                    }}
                ></div>

                {/* LEFT SIDE GRADIENT OVERLAY (smooth like screenshot) */}
                <div className="absolute inset-0 bg-gradient-to-r 
  from-black 
  via-black/70 
  via-35%
  to-transparent
  to-60%">
                </div>

                <div onClick={() => { navigate('/') }} className='text-white m-4 text-6xl relative mr-10 cursor-pointer'>
                    <i class="ri-arrow-left-circle-fill"></i>
                </div>


                {/* CONTENT AREA */}

                <div className="relative z-10 h-full items-center pl-20 max-w-2xl text-white">
                    <div>
                        {/* Title */}
                        <div>
                            <h1 className="text-6xl font-bold mb-4 relative float-left">{moviedetails?.title}</h1>
                            <h3 className="text-2xl font-bold mb-4 float-left">{moviedetails?.tagline}</h3>
                        </div>

                        {/* <h3>{moviedetails.tagline}</h3> */}

                        {/* Rating Row */}
                        <div className="flex items-center gap-4 text-lg text-gray-300 mb-4 float-left">
                            <div className=" flex text-purple-500 text-xl">★ ★ ★ ★ ☆</div>
                            <span>{moviedetails?.vote_average?.toFixed(1)}</span>
                            <span>• {moviedetails?.vote_count} Reviews</span>
                            <span>• {moviedetails?.release_date?.slice(0, 4)}</span>
                            <span>• {moviedetails?.runtime} min</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 float-left">
                            {moviedetails?.overview}
                        </p>

                        {/* Trailer Button */}
                        <button onClick={() => { navigate('/player', { state: state?.id }) }} className="float-left flex items-center gap-3 cursor-pointer text-xl hover:opacity-80">
                            <i className="clreffect float-left" class="ri-play-large-line"></i>
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </div>

            {/* middle page st */}

            <div className="fancy-all w-full flex flex-col text-white px-10 py-10">
                {/* ----------- TOP NAV (ONLY OVERVIEW) ----------- */}
                <div className="flex justify-center w-full border-b border-gray-700 pb-4">
                    <button className="text-3xl font-semibold tracking-wide">
                        OVERVIEW
                    </button>
                </div>

                {/* ----------- CONTENT SECTION ----------- */}
                <div className="mt-10 flex gap-10">
                    {/* LEFT SIDE → MOVIE CARD */}
                    <div className="w-[350px]">
                        {/* <MovieCard /> */}
                        <img
                            src={`https://image.tmdb.org/t/p/w500${moviedetails?.poster_path}`}
                            alt=""
                        />
                    </div>

                    {/* RIGHT SIDE → DETAILS */}
                    <div className="flex flex-col gap-7 max-w-3xl">
                        <h1 className="text-4xl ml-[-0.5vw] font-bold">Storyline</h1>

                        <p className="text-lg leading-relaxed text-gray-300">
                            {state?.overview}
                        </p>

                        <div className="fancy-all grid grid-cols-2 gap-y-5 text-lg">
                            <p>
                                <span className="fancy-all">Released: </span>
                                {state?.release_date}
                            </p>
                            <p>
                                <span className="fancy-all">Runtime:</span> {moviedetails?.runtime} min
                            </p>

                            <p>
                                <span className="fancy-all">Origin:</span> {moviedetails?.origin_country[0]}
                            </p>
                            <p>
                                <span className="fancy-all">Budget:</span> ${moviedetails?.budget}
                            </p>

                            <p>
                                <span className="fancy-all">Revenue:</span> ${moviedetails?.revenue}
                            </p>
                            <p>
                                <span className="fancy-all">Language:</span> {moviedetails?.spoken_languages[0].english_name}
                            </p>

                            <p>
                                <span className="fancy-all ">Status:</span> {moviedetails?.status}
                            </p>
                            <p>
                                <span className="fancy-all ">Genre:</span> {moviedetails?.genres[0].name}, {moviedetails?.genres[1].name}
                                {moviedetails?.genres[1].name}
                            </p>
                        </div>

                        <div className="fancy-all">
                            <p className="font-semibold">Production:</p>
                            <p className="text-gray-300 text-[18px]">
                                {moviedetails?.production_companies[0]?.name}, {moviedetails?.production_companies[1]?.name}, {moviedetails?.production_companies[2]?.name}, {moviedetails?.production_companies[3]?.name}, {moviedetails?.production_companies[4]?.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer st */}
            <footer className="w-full bg-[#111] text-gray-300 py-12 px-6 md:px-16 border-t border-gray-800">
                {/* Top Section */}
                <div>
                    <h1 className="text-3xl font-semibold mb-6 relative right-[39vw]">
                        <span className="text-purple-500">React Movies</span>
                    </h1>

                    {/* React + TMDB */}
                    <div className="space-y-4">
                        <p className="flex items-center gap-3">
                            Made with
                            {/* React Logo */}
                            <span className="w-10 h-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 841.9 595.3"
                                    className="w-10 h-10"  // change size as needed
                                >
                                    <g fill="none" stroke="white" strokeWidth="35">
                                        <ellipse cx="420.9" cy="296.5" rx="300" ry="120" />
                                        <ellipse
                                            cx="420.9"
                                            cy="296.5"
                                            rx="300"
                                            ry="100"
                                            transform="rotate(60 420.9 296.5)"
                                        />
                                        <ellipse
                                            cx="420.9"
                                            cy="296.5"
                                            rx="300"
                                            ry="120"
                                            transform="rotate(120 420.9 296.5)"
                                        />
                                    </g>
                                    <circle cx="420.9" cy="296.5" r="45" fill="white" />
                                </svg>

                            </span>
                            <span className="text-purple-500">React</span>
                        </p>


                        <p className="text-sm text-gray-400">
                            This project uses the TMDB API but is not endorsed or certified by TMDB.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-6">
                    {/* Left GitHub Logo Only */}
                    <a
                        href="https://github.com/Antriksh96"
                        className="flex items-center gap-2 hover:text-purple-500 transition"
                    >
                        {/* GitHub Logo */}
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.66.26 2.88.13 3.18a4.6 4.6 0 0 1 1.23 3.23c0 4.64-2.81 5.66-5.49 5.96.43.38.82 1.12.82 2.26v3.35c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                            />
                        </svg>

                        <span className="text-white font-medium">GitHub</span>
                    </a>

                    {/* Language Selector */}
                    <select className="bg-transparent border border-gray-700 px-4 py-2 rounded-lg hover:border-purple-500 transition">
                        <option className="text-black">Deutsch</option>
                        <option className="text-black">English</option>
                        <option className="text-black">Hindi</option>
                    </select>
                </div>
            </footer>
        </div>
    );
}

export default Moviepage;
