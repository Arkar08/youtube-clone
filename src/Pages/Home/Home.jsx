import Main from '../../Components/Main/Main';
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'
import { useState, useEffect } from 'react';
const Home = ({close,valueChange}) => {

  const [category , setCategory] = useState(0);

  const [data , setData] = useState([])

  const key = "AIzaSyBgxhVYmuq_whYoGSkDGtY90QtHFaYIsnU";

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${key}`

  const getData = async() =>{
    const res = await fetch(url)
    const result = await res.json()
    setData(result.items)
  }

  useEffect(() =>{
      getData()
  },[category])


 
  return (
    <div className='home_container'>
        <Sidebar close={close} setCategory={setCategory} category={category} data={data}/>
        <Main close={close} data={data} valueChange={valueChange}/>
    </div>
  )
}

export default Home;