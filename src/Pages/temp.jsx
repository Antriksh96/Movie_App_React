import React, { useState } from 'react'
import Moviecard from '../components/Moviecard';
import { useNavigate } from 'react-router-dom';

function SearchMoviesPage({ searchterm, data }) {    //que why i did'nt make [data,setdata] state here why i make in app because i reuried data in searchpage compo and setData fun in below api fun i cant acces that state changing fun in below if i make in searchpage compo so i put that state and state changing fun both in parent component.
    const navigate = useNavigate()
    console.log(data) 

    return (
        <div className='all-movies'>
            <div className='flex items-center justify-between mb-5'><span className='text-white absolute text-4xl m-10 relative'>Search Results for: {searchterm}</span> <span onClick={() => {navigate('/')}} className='text-white text-6xl relative mr-10 cursor-pointer'><i className='clreffect' class="ri-arrow-left-circle-fill"></i></span></div>
            <ul>
                {
                    data ? data.results ? data.results.map((e) => <Moviecard key={e.id} data = {e} image={e.backdrop_path ? e.backdrop_path : e.poster_pathe } title={e.title} rating={e.vote_average} lang={e.original_language} year={e.release_date} />) : null : null
                }
            </ul>

        </div>
    )
}

export default SearchMoviesPage


export async function getSearchtermmovies(searchterm) {

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const API_OPTION = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    console.log(`from searchpage ${searchterm}`)
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchterm}`, API_OPTION)
        return (await response.json());

    } catch (error) {
        console.log(error)

    } 
}
