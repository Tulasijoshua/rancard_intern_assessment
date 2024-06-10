import React, { useState } from 'react'
import profile from "../assets/profile.jpg"
import Modal from '../common/Modal'
import AddPayment from '../pages/views/cart/AddPayment';

const Navbar = () => {
    const [showPay, setShowPay] = useState(false);
    const [isBack, setIsBack] = useState(false);


  return (
    <div className='w-full py-[0.5rem] bg-white shadow-sm border-b border-gray-100 z-[99]'>
        <Modal isOn={showPay} name="Payment" onClose="Back" isBack={isBack} setIsBack={setIsBack} close={()=>setShowPay(false)} content={<AddPayment close={()=>{
                setShowPay(false)
            }} cancel={()=>setShowPay(false)}/>}
        />
      <section className='maxContainer w-[90%] mx-auto flex justify-between items-center gap-[2rem]'>
        <h2 className='care md:text-[1.8rem] text-[1.6rem] font-medium text-[#0DD983]'>Syst</h2>
        <div className='lg:w-[300px] sm:w-[200px] h-[40px] sm:border rounded-[2rem] flex justify-center items-center gap-[0.5rem]'>
            <div className='text-gray-400 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <input type="text" className='sm:block hidden outline-none text-[0.8rem] leading-[0.1rem] border-none' placeholder='Search' />
        </div>

        <div className='pops flex justify-end items-center gap-[0.8rem] '>
            <div onClick={() => {setShowPay(true); setIsBack(true)}} className='py-[0.3rem] px-[0.7rem] text-white flex justify-center items-center gap-[0.5rem] bg-[#0DD983] rounded-[2rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span className='text-[1rem] font-medium leading-[1.5rem]'>0</span>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </div>
            <div className='w-[35px] h-[35px]'>
                <img className='w-full h-full rounded-full object-cover' src={profile} alt="Profile" />
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar
