
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'

function App() {
  

  const [added, setAdded] = useState(0);

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
            <h1>Count : {handleAdded.length} </h1>
          </div>
      </div>
      
    </>
  )
}

export default App
