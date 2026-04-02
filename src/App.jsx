import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import UserShow from './Components/UserShow/UserShow'

function App() {
  
  const [cart,setCart]=useState([]);

  return (
    <>
     <Navbar cart={cart}></Navbar>
     <Banner></Banner>
     <UserShow></UserShow>
     <DigitalTools></DigitalTools>
    </>
  )
}

export default App
