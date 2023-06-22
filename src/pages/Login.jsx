import emailIcon from '../assets/mail.svg'
import password from '../assets/password.svg'
const Login = () => {
  return (
    <div className=" w-96 h-96 rounded-3xl border-2 border-hunyadi-yellow flex flex-col justify-center items-center gap-5 overflow-hidden relative text-gray-200 backdrop-blur-sm shadow-lg">
      <form className='w-full h-full flex flex-col gap-8 justify-center items-center form '>
      <div className='relative w-full flex justify-center'>
        <span className='absolute left-7 bg-office-green rounded-l-lg w-14 h-12 flex justify-center z-50'>
          <img src={emailIcon} className='w-8 fill-amber-500' />
        </span>
            <input type="email" 
                    placeholder="Email" 
                    className="input input-bordered w-full max-w-xs pl-16 focus:placeholder:invisible bg-rich-black focus-within:outline-hunyadi-yellow caret-office-green shadow-md peer invalid:text-red-600 z-10"
                     />
                     <p className='invisible peer-invalid:visible peer-invalid:top-12 duration-300 text-red-600 absolute top-0 bg-rich-black rounded-md px-4'>Please provide a valid email address.</p>
      </div>
     
      <div className='relative w-full flex justify-center'>
            <span className='absolute left-7 bg-office-green rounded-l-lg w-14 h-12 flex justify-center'>
                <img src={password} className='w-8' />
            </span>
            <input type="password" 
                    placeholder="password" 
                    className="input input-bordered w-full max-w-xs pl-16  focus:placeholder:invisible bg-rich-black focus-within:outline-hunyadi-yellow caret-office-green shadow-md"
                    required  />
      </div>
        <button className="btn sm:btn-sm md:btn-md bg-rich-black shadow-md text-gray-200 border-2 border-office-green" type='submit'>Log In</button>
      </form>
      <p className='absolute bottom-0 h-10 w-full flex justify-center items-center bg-gray-900'>New to TeamUp? Click <a href='/signup' className='underline underline-offset-2 font-semibold mx-1 text-hunyadi-yellow'>HERE</a> to sign up.</p>
    </div>
  )
}

export default Login