import React from 'react'

function Moviecard({image, title, rating, lang, year}) { 

  return (
    <div className='movie-card effect'>
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

