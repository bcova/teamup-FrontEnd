import { useState,useEffect } from 'react'
import './index.css'
import axios from 'axios'
import { Navbar } from './components'
import { Login, SignUp } from './pages'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

 function App () {

  const [users, setUsers] = useState([])
  
  useEffect(() => {
getAll()
    },[])

    async function getAll(){
      const {data:users}= await axios.get('http://localhost:3000/users')
      setUsers(users)
    }

  return (
<div className='min-h-screen flex flex-col main'>
    <div className=''>
        <Navbar />
    </div>
    <div className='relative flex flex-grow flex-col justify-center items-center'>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/signup" element={<SignUp />}/>
      </Routes>
    </Router>
    </div>
</div>
  )
}

export default App
