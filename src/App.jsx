
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'

function App() {
  

  const [added, setAdded] = useState([]);

  const handleAdded = (blog) => {
    setAdded([...added, blog])
  };



  return (
    <>

      <Navbar></Navbar>

      <div className="full-container flex gap-5">
          <div className='left-container flex justify-center w-[70%] bg-gray-50'>
              <Blogs handleAdded={handleAdded}></Blogs>
          </div>
          <div className="right-container text-center w-[30%] bg-gray-50">
            <h1 className='text-2xl uppercase font-stretch-75% my-2 pb-3 border-b'>Added : {added.length} </h1> 
            {
              added.map((add)=> <p key={add.id} className='p-2 border border-orange-100 rounded-2xl bg-orange-200 m-2 text-xl shadow-md'> {add.name} added this title {add.title}. <br /> Other's Details : Id Code-{add.id}, Age-{add.age} </p>)
            }
            
          </div>
      </div>
      
    </>
  )
}

export default App
