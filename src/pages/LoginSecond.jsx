import { Divider } from '@mui/material'
import React from 'react'

const LoginSecond = () => {
return (
    <>
        <div className='box-border flex w-full min-h-[100vh] text-sm'>
            {/* kiri */}
            <div className='px-[12%] w-[50%] flex flex-col justify-center items-center'>
                <div className=' flex flex-col justify-center items-center gap-8 bg-white '>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold mb-2'>Sign In</h2>
                        <p className='text-gray-400 font-semibold'>Your Social Campaign</p>
                    </div>

                    <div className='w-full flex justify-between items-center gap-2'>
                        <button className='flex w-[50%] justify-center items-center gap-3 border rounded-md px-5 py-2'>
                            <div>
                                <img 
                                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                                    alt="Google" 
                                    className="w-4 h-4"
                                    />

                            </div>
                            <p>Sign In with Gogle</p>
                        </button>
                        <button className='flex flex-grow justify-center items-center gap-3 border rounded-md px-5 py-2'>
                            <div>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                    alt="Apple"
                                    className="w-3 h-4"
                                    />

                            </div>
                            <p>Sign In with Apple</p>
                        </button>
                    </div>

                    {/* <p className='text-gray-500'>Or with email</p> */}
                    <div className=' w-full'>
                        <Divider >Or with email</Divider> 
                    </div>

                    <div className='p-5 rounded-md bg-purple-50 text-purple-500'>
                        <p>Use account <span className='font-bold text-purple-700'>admin@demo.com</span> and password <span className='font-bold text-purple-700'>demo</span> to continue</p>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center gap-5'>
                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                            <label>Email</label>
                            <input type="text" className='w-full border rounded-md px-3 py-3 outline-none' placeholder='admin@gmail.com'/>
                        </div>
                        <div className='w-full flex flex-col justify-start items-start gap-2 mb-3'>
                            <label>Password</label>
                            <input type="password" className='w-full border rounded-md px-3 py-3 outline-none' placeholder='password'/>
                            <p className='w-full flex justify-end text-right text-blue-500 cursor-pointer font-medium'>Forgot Password ?</p>
                        </div>

                        <button className='w-full py-3 rounded-md text-white bg-blue-500 font-medium '>Continue</button>

                        <p className='text-gray-500'>Not a Member yet ? <spa className='cursor-pointer text-blue-500'>Sign Up</spa></p>

                        <div className='flex justify-center items-center gap-10 text-blue-500 absolute bottom-8'>
                            <p>Terms</p>
                            <p>Plans</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
            </div>
            </div>


            {/* kanan */}
            <div className=' flex flex-grow justify-center items-center gap-20 bg-blue-700 '>
                <div>
                <h1>Metronic</h1>
                </div>
            </div>
        </div>
    </>
)
}

export default LoginSecond
