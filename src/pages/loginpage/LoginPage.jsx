import React from 'react'
import login from '../../assets/login.jpg'


const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-start">
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[20%] left-[10%] flex flex-col'>
            <h1 className='text-4xl text-white font-extrabold'>Turn scraps into cash</h1>
            <p className='text-xl text-white font-normal'>Start for free and get exciting offers</p>
            </div>
       <img src={login} alt='' className='w-full h-full object-cover'/>
        </div>
      
      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-[#060606] font-semibold'>Brand</h1>

        <div className='w-full flex flex-col max-w-[500px]'>
            <div className='w-full flex flex-col mb-10'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
         <p className='text-base mb-2'>Welcome Back! Please enter your details</p>
            </div>

            <div className='w-full flex flex-col'>
                <input type='email' placeholder='Email' className='w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none'/>

                <input type='password' placeholder='Password' className='w-full my-2 py-2 bg-transparent text-black border-b border-black outline-none focus:outline-none'/>

                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox"className='w-4 h-4 mr-2'/>
                        <p className='text-sm'>Remember Me</p>

                    </div>

                    <p className='text-sm cursor-pointer underline font-medium whitespace-nowrap underline-offset-2'>Forgot Password ?</p>
                </div>

                <div className='w-full flex flex-col '>
                    <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center '>Log in</button>

                    <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center '>Sign Up</button>

                    <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center '>Sign Up As A Dealer</button>

                </div>
            </div>
        </div>
  
        <div className='w-full flex my-4 items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Don't have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign Up for free </span></p>
        </div>
      </div>
    </div>
  );
  
}

export default LoginPage