import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Searchmoviespage from './Pages/searchmoviespage.jsx' 
import './index.css'
import App from './App.jsx'

function Root(){
  const [searchterm, setSearchterm] = useState('')
  const [data, setData] = useState(null)

  return(
    <Routes>
        <Route path='/' element = {<App searchterm = {searchterm} setSearchterm = {setSearchterm} setData = {setData} />}/>
        <Route path='/searchresult' element = {<Searchmoviespage searchterm = {searchterm} data = {data}/>}/>
      </Routes>
  )
}

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <BrowserRouter>
       <Root/>
    </BrowserRouter>

  </StrictMode>,
)
