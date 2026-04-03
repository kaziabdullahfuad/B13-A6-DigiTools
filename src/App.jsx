import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import UserShow from './Components/UserShow/UserShow'
import { ToastContainer } from 'react-toastify'
import Started from './Components/Started/Started'
import Pricing from './Components/Pricing/Pricing'
import Workflow from './Components/Workflow/Workflow'
import Footer from './Components/Footer/Footer'


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
          <DigitalTools productPromise={productPromise} cart={cart} setCart={setCart}></DigitalTools>
      </Suspense>

      <Started></Started>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>

     {/* Toast */}
      <ToastContainer />
     
    </>
  )
}

export default App
