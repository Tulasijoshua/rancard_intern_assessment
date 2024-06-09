import React from 'react'

const Login = () => {
  return (
    <div className='maxContainer h-[100vh] flex flex-col justify-center '>
      <div className=' w-full max-h-[60rem] h-[100vh] flex justify-between items-center overflow-hidden'>
        <section className='auth-img lg:flex-1 w-[40%] md:block hidden h-full flex flex-col justify-center items-start'>
          <div className='care w-full p-[3rem] lg:text-[3rem] text-[2rem] text-[#0DD983] font-semibold '>
            Syst
          </div>
        </section>
        <section className='flex-1 h-full bg-white '>
          <div className='lg:w-[70%] md:w-[90%] sm:w-[70%] xs:w-[90%] w-[95%] mx-auto h-full pr-[2rem] pl-[4rem] flex flex-col justify-center'>
            <h2 className='pb-[2rem] xl:text-[2rem] text-[1.5rem] sm:font-semibold font-bold'>Log in to Syst</h2>
            <form className='flex flex-col xl:gap-[1rem] gap-[0.5rem]'>
              <div className='w-full flex pb-[1rem] flex-col xl:gap-[0.5rem]'>
                <label className='sm:text-[0.9rem] text-[0.8rem] text-gray-500'>Username</label>
                <input type="text" className='outline-none border-b-2 bg-transparent lg:text-[1rem] text-[0.9rem] font-semibold' />
              </div>
              <div className='w-full pb-[1rem] flex flex-col xl:gap-[0.5rem]'>
                <label className='sm:text-[0.9rem] text-[0.8rem] text-gray-500'>Password</label>
                <input type="password" className='outline-none border-b-2 bg-transparent lg:text-[1.2rem] text-[1rem] font-bold' />
              </div>
              <button disabled className='w-full xl:py-[0.7rem] md:py-[0.5rem] py-[0.5rem] px-[1rem] lg:text-[1rem] sm:text-[0.9rem] text-[1rem] text-[#16CB7F] font-medium bg-[#0DD9834F] rounded-[2rem]'>Log in</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
