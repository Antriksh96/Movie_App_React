import React from 'react'
import { useNavigate } from 'react-router-dom'

function Moviecard({data, image, title, rating, lang, year}) { 
  const navigate = useNavigate()

  return (
    <div className='movie-card effect' onClick={() => {navigate('/moviepage', {state : data})}}>  {/** i pass data inside state in navigate by using useNavigate hook now i can acces the value in moviepage component by using uselocation hook */}
        <img src={`https://image.tmdb.org/t/p/w500${image}`} />
        <h3>{title}</h3>
        <div className='content'>
            <div className='rating'>
                <img src="/star.png" alt="" />
                <p>{rating ? rating.toFixed(1) : null}</p>
            </div>
            <span>•</span>
             <div className='lang'>{lang}</div>
             <span>•</span>
             <div className='year'>{year ? year.slice(0,4) : null}</div>
        </div>
    </div>
  )
}

export default Moviecard

