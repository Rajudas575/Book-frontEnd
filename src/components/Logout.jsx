import React from 'react'
import { useAuth } from '../context/useAuth'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser,setAuthUser] = useAuth()

    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Logout successfully!")
            setTimeout(()=>{
                window.location.reload()
            },1000)
        } catch (error) {
            toast.error("Error: " + error)
            setTimeout(()=>{},1000)
        }
    }
  return (
    <div>
        <button onClick={handleLogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout