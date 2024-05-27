import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import {Home} from './Home';
import {Header} from './Header';
import { Login } from './Login';

function App() {

  return (
  <div >
   <Router  >
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes> 
   </Router>
 
  </div>

  )
}

export default App
