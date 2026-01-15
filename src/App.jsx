import Home from './components/home/Home'
import {Navigate, Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import ContactUs from './components/contactus/ContactUs'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/useAuth'
import Aboutus from './components/contactus/Aboutus'

function App() {
   const [authUser, setAuthUser] = useAuth()
   console.log(authUser)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={authUser ? <Courses/> : <Navigate to="/signup"/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
