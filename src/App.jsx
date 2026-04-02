import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import UserShow from './Components/UserShow/UserShow'

const fetchData=async()=>{

  const res=await fetch("/productData.json")
  return res.json()
}

function App() {
  
  const [cart,setCart]=useState([]);
  const productPromise=fetchData();
  
  

  return (
    <>
     <Navbar cart={cart}></Navbar>
     <Banner></Banner>
     <UserShow></UserShow>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <DigitalTools productPromise={productPromise} cart={cart}></DigitalTools>
      </Suspense>
     
    </>
  )
}

export default App
