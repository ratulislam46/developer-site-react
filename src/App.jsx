
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'
import Added from './components/Added/Added'

function App() {
  

  return (
    <>

      <Navbar></Navbar>

      <div className="full-container flex gap-5">
          <div className='left-container flex justify-center w-[70%] bg-gray-50'>
              <Blogs></Blogs>
          </div>
          <div className="right-container text-center w-[30%] bg-gray-50">
              <Added></Added>
          </div>
      </div>
      
    </>
  )
}

export default App
