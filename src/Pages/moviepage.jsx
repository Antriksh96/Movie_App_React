import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Moviecard from "../components/Moviecard";
function Moviepage() {
    const { state } = useLocation(); // if you use useNavigate hook to render the compo on a path you can see a obj/val with it and you can use the value inside the compo that rendering on that path that you pass while using useNavigate the use vlaue that receive from usenaviagte can you use by using useLocation hook inside the compo that render on on that path usse in useNavigate.
    console.log(state)
    const navigate = useNavigate()

    return (
        <div className="fancy-all w-full h-screen z-0 sans-serif bg-[#000000]">
            <div className="relative w-full h-[520px] overflow-hidden">
                {/* Background image full width */}
                <div
                    className="absolute inset-0 bg-cover bg-right"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${state.backdrop_path})`,
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

                <div className="relative z-10 h-full flex items-center pl-20 max-w-2xl text-white">
                    <div>
                        {/* Title */}
                        <h1 className="text-6xl font-bold mb-4">{state.title}</h1>

                        {/* Rating Row */}
                        <div className="flex items-center gap-4 text-lg text-gray-300 mb-4">
                            <div className=" flex text-purple-500 text-xl">★ ★ ★ ★ ☆</div>
                            <span>{state.vote_average}</span>
                            <span>• 283 Reviews</span>
                            <span>• {state.release_date.slice(1, 4)}</span>
                            <span>• 1h 47min</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {state.overview}
                        </p>

                        {/* Trailer Button */}
                        <button className="flex items-center gap-3 text-xl hover:opacity-80">
                            <i className="clreffect" class="ri-play-large-line"></i>
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
                            src={`https://image.tmdb.org/t/p/w500${state.poster_path}`}
                            alt=""
                        />
                    </div>

                    {/* RIGHT SIDE → DETAILS */}
                    <div className="flex flex-col gap-7 max-w-3xl">
                        <h1 className="text-4xl ml-[-0.5vw] font-bold">Storyline</h1>

                        <p className="text-lg leading-relaxed text-gray-300">
                            {state.overview}
                        </p>

                        <div className="fancy-all grid grid-cols-2 gap-y-5 text-lg">
                            <p>
                                <span className="fancy-all">Released: </span>
                                {state.release_date}
                            </p>
                            <p>
                                <span className="fancy-all">Runtime:</span> 1h 47min
                            </p>

                            <p>
                                <span className="fancy-all">Director:</span> Dan Trachtenberg
                            </p>
                            <p>
                                <span className="fancy-all">Budget:</span> $105,000,000
                            </p>

                            <p>
                                <span className="fancy-all">Revenue:</span> $92,558,870
                            </p>
                            <p>
                                <span className="fancy-all">Language:</span> English
                            </p>

                            <p>
                                <span className="fancy-all ">Status:</span> Released
                            </p>
                            <p>
                                <span className="fancy-all ">Genre:</span> Action, Science
                                Fiction, Adventure
                            </p>
                        </div>

                        <div className="fancy-all">
                            <p className="font-semibold">Production:</p>
                            <p className="text-gray-300 text-[18px]">
                                20th Century Studios, Lawrence Gordon Productions, Davis
                                Entertainment, Toberoff Productions, TSG Entertainment
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
