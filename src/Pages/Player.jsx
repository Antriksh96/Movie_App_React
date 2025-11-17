import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

function Player() {
    const { state } = useLocation()
    const [movieData, setMovieData] = useState(null)
    const [movieDatakey, setMovieDatakey] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        if (!state) return;

        async function getMovieKey() {
            setLoading(true);

            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const API_OPTION = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
            };

            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${state}/videos?language=en-US`,
                    API_OPTION
                );

                const data = await response.json();
                setMovieData(data);

                const trailer = data.results
                    .filter(v => v.site === "YouTube" && v.type === "Trailer" && v.official)
                    .sort((a, b) => b.size - a.size)[0];

                const youtubeKey = trailer?.key;
                setMovieDatakey(youtubeKey);
            } catch (error) {
                console.log(error);
            } finally {
                 setTimeout(() => {
                    setLoading(false);
                 }, 1000);  // ALWAYS STOPS LOADER
            }
        }

        getMovieKey();
    }, [state]);


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <Loading />
            </div>
        );
    }


    return (
        <div className='h-screen w-screen bg-[#212121] text-white'>
            <div onClick={() => { navigate('/moviepage', { state: movieData }) }} className='text-[3rem] absolute left-6 top-5'>
                <i class="ri-arrow-left-circle-fill"></i>
            </div>
            <iframe width='100%' height='100%' title='trailer' src={`https://www.youtube.com/embed/${movieDatakey}`} frameBorder="0"></iframe>
        </div>
    )
}

export default Player