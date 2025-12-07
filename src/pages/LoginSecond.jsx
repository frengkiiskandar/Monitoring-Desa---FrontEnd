import { Divider } from '@mui/material'
import metronic from '../assets/metronix.png'
import bg from '../assets/background.jpg'
import mainImage from '../assets/image.png'

const LoginSecond = () => {
return (
    <>
        <div className='box-border flex flex-wrap flex-col-reverse md:flex-row w-full min-h-[100vh] text-xs md:text-sm'>
            {/* kiri */}
            <div className='px-10 py-16 w-full md:w-[50%] flex flex-col justify-center items-center relative '>
                <div className=' flex flex-col justify-center items-center gap-8 bg-white'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold mb-3'>Sign In</h2>
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
                    <div className=' w-full hidden md:block'>
                        <Divider sx={{color :'gray'}}>Or with email</Divider> 
                    </div>

                    <div className='min-w-full px-7 py-5 text-wrap rounded-md bg-violet-50 text-violet-500 '>
                        <p>Use account <span className='font-bold text-purple-700'>admin@demo.com</span> and password <span className='font-bold text-purple-700'>demo</span> to continue . </p>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center gap-5 '>
                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                            <label className='font-medium'>Email</label>
                            <input type="text" className='w-full border rounded-md px-3 py-3 outline-none' placeholder='admin@gmail.com'/>
                        </div>
                        <div className='w-full flex flex-col justify-start items-start gap-2 mb-3'>
                            <label className='font-medium'>Password</label>
                            <input type="password" className='w-full border rounded-md px-3 py-3 outline-none' placeholder='password'/>
                            <p className='w-full flex justify-end text-right text-blue-500 cursor-pointer font-medium'>Forgot Password ?</p>
                        </div>

                        <button className='w-full py-3 rounded-md text-white bg-blue-500 font-medium '>Continue</button>

                        <p className='text-gray-400 font-medium'>Not a Member yet ? <spa className='cursor-pointer text-blue-500'>Sign Up</spa></p>

                        <div className='flex justify-center items-center gap-10 text-blue-500 md:absolute bottom-8'>
                            <p>Terms</p>
                            <p>Plans</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
            </div>
            </div>



            {/* kanan */}
            <div className='py-10 flex flex-grow flex-col justify-center items-center gap-5 md:gap-10 bg-blue-600 text-white text-center' style={{backgroundImage: `url(${bg})`, backgroundPosition:'center', backgroundSize:'cover' }}>
                <div >
                    <img src={metronic} alt=""  className='w-32'/>
                </div>

                <div className='w-[20rem] md:max-w-[40rem] lg:w-[45rem] '>
                    <img src={mainImage} alt=""/>
                </div>
                <div className='w-[25rem] md:w-[30rem] lg:w-[40rem] p-5'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-6'>Fast, Efficient and Productive</h1>
                    <p className='font-semibold'>In this kind of post, <span className='font-bold text-amber-400'>the blogger</span> introduces a person they've interviewed
                        and provides some background information about <span className='font-bold text-amber-400'>the interviewee </span> and their
                        work following this is a transcript of the interview.</p>
                </div>
            </div>
        </div>
    </>
)
}

export default LoginSecond
