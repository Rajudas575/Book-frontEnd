import axios from 'axios'
import Cards from "./Cards";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

function Course() {
  const [book, setBook] = useState([])

  useEffect(()=>{
    const getBook = async()=>{
      try {
          const res = await axios.get("https://book-back-end.vercel.app/book")
          setBook(res.data.filter((data)=>data.category !== "Free"))
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 justify-center items-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!😊</span></h1>
          <p className='mt-12'>We’re delighted to have you here. Your presence adds value, energy, and warmth to our community. We hope you feel welcomed, inspired, and supported as you explore, learn, and grow with us. Together, let’s create meaningful experiences, share ideas, and build something truly positive and memorable for everyone involved today.</p>
          <Link to="/">
            <button className='mt-6 px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-700 text-white duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
               book.map((item)=>(
                <Cards key={item.id} item={item}/>
               ))
            }
        </div>
      </div>
    </>
  )
}

export default Course