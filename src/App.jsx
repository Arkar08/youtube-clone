import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { useState } from 'react'
import Video from './Pages/Video/Video'

function App() {


  const [close , setClose]  = useState(false);

  const handleClick = () =>{
    setClose(!close)
  }

  const valueChange = (value) =>{
    if(value>=100000){
      return Math.floor(value/100000) +"M"
    }
    else if(value >= 1000){
      return Math.floor(value/1000) + "K"
    }
    else{
      return value
    }
  }
  return (
    <>
     <Navbar handleClick={handleClick}/>
     <Routes>close
        <Route path="/" element={<Home close={close} valueChange={valueChange}/>} />
        <Route path='/video/:catergory/:id' element = {<Video  valueChange={valueChange}/>} />
     </Routes>
    </>
  )
}

export default App;
