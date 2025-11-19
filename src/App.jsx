import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Mainpage from './mainpage'
import ScrollToTop from './components/ScrollToTop'
import Searchmoviespage from './Pages/Searchmoviespage'
import Moviepage from './Pages/moviepage'
import Player from './Pages/Player'
import Loginpage from './Pages/Loginpage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [searchterm, setSearchterm] = useState('');
  const [data, setData] = useState(null); 
  const navigate = useNavigate();

   useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        navigate('/')
      }
      else{
        navigate('/loginpage')
      }
    })
   },[])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Mainpage searchterm={searchterm} setSearchterm={setSearchterm} setData={setData} />} />
        <Route path='/searchresult' element={<Searchmoviespage searchterm={searchterm} data={data} />} />
        <Route path='/moviepage' element={<Moviepage />} />
        <Route path='/player' element={<Player />} />
        <Route path='/loginpage' element={<Loginpage />} />
      </Routes>
    </>
  );
}
export default App
