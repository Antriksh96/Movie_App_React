import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Loading from "../components/Loading";
import CastCard from "../components/Castcompo";
// import Moviecard from "../components/Moviecard";
import { FaGithub, FaLinkedin } from 'react-icons/fa' //This is a way to use icon by using react icon library also remen=mber to write /fa 
import { FaTwitter } from "react-icons/fa";
function Moviepage() {


    const { state } = useLocation(); // if you use useNavigate hook to render the compo on a path you can see a obj/val with it and you can use the value inside the compo that rendering on that path that you pass while using useNavigate the use vlaue that receive from usenaviagte can you use by using useLocation hook inside the compo that render on on that path usse in useNavigate.
    const navigate = useNavigate()
    const [moviedetails, setMoviedetails] = useState(null)
    const [castdetails, setCastdetails] = useState(null)
    const [loading, setLoading] = useState(false)




    useEffect(() => {                                      // only one time useeffect will run when you load this page if you go back and return or no of time you open same page this will not run.  WHY  ? see below line in front of dependency of this useeffect.
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
                const response = await fetch(`https://api.themoviedb.org/3/movie/${state?.id}`, API_OPTION)           // Api with end point to call that particular movie using the id of that movie.
                const data = await response.json()
                const response2 = await fetch(`https://api.themoviedb.org/3/movie/${state?.id}/credits`, API_OPTION)
                const data2 = await response2.json()
                console.log(data2)
                setMoviedetails(data)
                setCastdetails(data2)
                setTimeout(() => {
                    setLoading(false)
                }, 1000);

            } catch (error) {
                console.log(error)

            }
        }
        getMoviedetails();
    }, [state]) //here i give dependency due to which if i go back or go forward by using browser button this effect call many time due to which api call many time to avoid that i put state means movie id as dependency so if i switch page many time without click on another movie means state = movie id is same then api dosnt call till the id of movie means state get change it only change when i click on other movie card.

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
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
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

                <div onClick={() => { navigate('/') }} className='text-white m-4 text-4xl relative mr-10 cursor-pointer lg:text-6xl'>
                    <i class="ri-arrow-left-circle-fill"></i>
                </div>


                {/* CONTENT AREA */}

                <div className="relative z-10 h-full items-center pl-20 max-w-2xl text-white">
                    <div className="ml-[-15vw] lg:ml-[+1vw] mt-[-2vh] w-[40vw]">
                        {/* Title */}
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-2 lg:mb-5 relative float-left ">{moviedetails?.title}</h1>
                            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-3 float-left">{moviedetails?.tagline}</h3>
                        </div>

                        {/* <h3>{moviedetails.tagline}</h3> */}

                        {/* Rating Row */}
                        <div className="flex items-center gap-4 lg:text-lg text-[0.8rem] text-gray-300 mb-4 float-left">
                            <div className=" flex text-purple-500 w-[28vw] lg:w-auto text-[0.8rem] lg:text-xl">★ ★ ★ ★ ☆</div>
                            <span>{moviedetails?.vote_average?.toFixed(1)}</span>
                            <span>• {moviedetails?.vote_count} Reviews</span>
                            <span>• {moviedetails?.release_date?.slice(0, 4)}</span>
                            <span>• {moviedetails?.runtime} min</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 lg:text-lg text-[1rem] leading-relaxed mb-8 float-left">
                            {moviedetails?.overview}
                        </p>

                        {/* Trailer Button */}
                        <button onClick={() => { navigate('/player', { state: state?.id }) }} className="float-left flex items-center gap-3 cursor-pointer text-xl hover:opacity-80 z-100 sm:absolute sm:top-[-40px] sm:right-[-53vw]">
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
                <div className="mt-10 flex flex-col lg:flex-row gap-10">
                    {/* LEFT SIDE → MOVIE CARD */}
                    <div className="w-[280px] lg:w-[300px] ml-[-5vw] lg:ml-[+2vw]">
                        {/* <MovieCard /> */}
                        <img
                            src={`https://image.tmdb.org/t/p/w500${moviedetails?.poster_path}`}
                            alt=""
                        />
                    </div>

                    {/* RIGHT SIDE → DETAILS */}
                    <div className="flex flex-col gap-7 max-w-3xl">
                        <h1 className="lg:text-4xl text-3xl lg:ml-[-0.5vw] font-bold">Storyline</h1>

                        <p className="lg:text-lg leading-relaxed text-gray-300">
                            {state?.overview}
                        </p>

                        <div className="fancy-all grid grid-cols-2 gap-y-5 text-sm lg:text-lg gap-2 lg:gap-4">
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
                                <span className="fancy-all">Language:</span> {moviedetails?.spoken_languages[0]?.english_name}
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
                            <p className="text-gray-300 lg:text-[18px]">
                                {moviedetails?.production_companies[0]?.name}, {moviedetails?.production_companies[1]?.name}, {moviedetails?.production_companies[2]?.name}, {moviedetails?.production_companies[3]?.name}, {moviedetails?.production_companies[4]?.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cast Section */}

            <div className="fancy-all w-full flex flex-col text-white px-10 py-10">
                {/* ----------- TOP NAV (ONLY OVERVIEW) ----------- */}
                <h2 className="text-white text-xl md:text-2xl font-semibold mb-6 border-b border-gray-700 pb-3">
                    Top Cast
                </h2>
                <div className="flex gap-16 overflow-x-auto scrollbar-hide p-4">

                    {
                        castdetails ? castdetails.cast ? castdetails.cast.map((singlecast) => <CastCard key={singlecast?.id} img={singlecast?.profile_path} name={singlecast?.name} character={singlecast?.character} />) : null : null
                    }

                </div>

            </div>

            {/* footer st */}
            <footer className="w-full bg-[#111] text-gray-300 py-12 px-6 md:px-16 border-t border-gray-800">
                {/* Top Section */}
                <div>
                    <h1 className="text-3xl font-semibold mb-6 relative lg:right-[40vw]">
                        <span className="text-purple-500">REACTFLIX</span>
                    </h1>

                    {/* React + TMDB */}
                    <div className="space-y-4">
                        <p className="flex items-center gap-3 ml-[12vw] lg:ml-[0vw]">
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


                        <p className="text-sm text-center lg:text-left text-gray-400">
                            This project uses the TMDB API but is not endorsed or certified by TMDB.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-6 w-28">
                    {/* Left GitHub Logo Only */}


                    <div className="flex flex-col items-center">
                        <Link to={"https://github.com/Antriksh96"} className="w-8 h-8 flex text-2xl items-center gap-2 hover:text-purple-500 transition"><FaGithub /></Link>    {/** another better way to add social link by replaceing use of anchor tag */} 
                    </div>

                    <div className="flex flex-col items-center">
                        <Link to={"https://x.com/LakdeAntriksh"} className="w-6 h-6 text-2xl flex items-center gap-2 hover:text-purple-500 transition"><FaTwitter /></Link>    {/** another better way to add social link by replaceing use of anchor tag */} 
                    </div>

                    <div className="flex flex-col items-center">
                        <Link to={"https://www.linkedin.com/in/antriksh-lakde-49644a312/"} className="w-6 h-6 text-2xl flex items-center gap-2 hover:text-purple-500 transition"><FaLinkedin /></Link>    {/** another better way to add social link by replaceing use of anchor tag */} 
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Moviepage;
