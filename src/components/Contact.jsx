import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Contact() {
     const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
        
          const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className='flex h-screen justify-center items-center '>
        <div id="my_modal_3" className="bg-slate-100 border border-pink-300 shadow-lg p-6 rounded-md">
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className='mt-4 space-y-2'>
                    <span>Name</span><br/>
                    <input type='text' placeholder='Enter your full name' className='w-80 px-3 py-1 border border-pink-300 rounded-md outline-none' {...register("name", { required: true })}/><br/>
                    {errors.name && <span className='text-sm text-red-500'> This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span><br/>
                    <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border border-pink-300 rounded-md outline-none'{...register("email", { required: true })}/><br/>
                    {errors.email && <span className='text-sm text-red-500'> This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Message</span><br/>
                    <textarea type='text' placeholder='Type your message..' className='w-80 px-3 py-1 border border-pink-300 rounded-md outline-none'{...register("message", { required: true })}/><br/>
                    {errors.message && <span className='text-sm text-red-500'> This field is required</span>}
                </div>
                <div className='flex justify-around mt-5'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
                    
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact