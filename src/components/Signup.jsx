import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
    const loaction = useLocation()
    const navigate = useNavigate()
    const from = loaction.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
       await axios.post("https://book-back-end.vercel.app/user/signup",userInfo)
        .then((res)=>{
            console.log(res)
            if(res.data){
                toast.success("Signup successfully.");
                navigate(from, {replace:true});
            }
            localStorage.setItem("User",JSON.stringify(res.data.user))
            
        }).catch((err)=>{
            if(err.response){
                console.log(err)
                toast.error("Error:"+ err.response.data.message)
            }
        })
      }
  return (
    <>
        <div className='flex h-screen justify-center items-center '>
        <div id="my_modal_3" className="bg-slate-100 border border-pink-300 shadow-lg p-6 rounded-md">
            <div className="">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-lg">Signup</h3>
                <div className='mt-4 space-y-2'>
                    <span>Full Name</span><br/>
                    <input type='text' placeholder='Enter your full name' className='w-80 px-3 py-1 border border-pink-300 rounded-md outline-none' {...register("fullname", { required: true })}/><br/>
                    {errors.fullname && <span className='text-sm text-red-500'> This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span><br/>
                    <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border border-pink-300 rounded-md outline-none'{...register("email", { required: true })}/><br/>
                    {errors.email && <span className='text-sm text-red-500'> This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Password</span><br/>
                    <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border border-pink-300 rounded-md outline-none'{...register("password", { required: true })}/><br/>
                    {errors.password && <span className='text-sm text-red-500'> This field is required</span>}
                </div>
                <div className='flex justify-around mt-5'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                    <p>Have account ? <Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link>
                    </p>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup