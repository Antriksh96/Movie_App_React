import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, Route, Routes, useSearchParams } from 'react-router-dom'
import Mainpage from './mainpage'
import ScrollToTop from './components/ScrollToTop'
import Searchmoviespage from './Pages/Searchmoviespage'
import Moviepage from './Pages/moviepage'
import Player from './Pages/Player'
import Loginpage from './Pages/Loginpage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import ResetEmailPage from './Pages/Resetemail' 
import Newpasswordpage from './Pages/Newpasspage' 

function App() {
  const [searchterm, setSearchterm] = useState('');
  const [data, setData] = useState(null); 
  const navigate = useNavigate(); 

   useEffect(() => {
  const params = new URLSearchParams(window.location.search);            //URLSearchParams(window.location.search) give whole things in url when we open that page like Newpasspage
  const mode = params.get("mode");
 
  if (mode === "resetPassword") return;

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/", { replace: true });
    } else {
      navigate("/loginpage", { replace: true });
    }
  });

  return () => unsubscribe();
}, []);


  return (
    <>
      <ScrollToTop />  {/*whenever any route activated means whenever we go to differenet page from one of the follwing route this scrollToTop component render and it make that page apper from top if we not put this then whever we go to other page the pager apper first it bottom section we need to scroll to see top.*/}
      <Routes>
        <Route path='/' element={<Mainpage searchterm={searchterm} setSearchterm={setSearchterm} setData={setData} />} />
        <Route path='/searchresult' element={<Searchmoviespage searchterm={searchterm} data={data} />} />
        <Route path='/moviepage' element={<Moviepage />} />
        <Route path='/player' element={<Player />} />
        <Route path='/loginpage' element={<Loginpage />} />
        <Route path='/Resetemail' element={<ResetEmailPage />} /> 
        <Route path='/Newpasspage' element={<Newpasswordpage />} />  
      </Routes>
    </>
  );
}
export default App
