import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Wrapper = ({Page}) => {
  return (
    <div className='w-full h-full overflow-hidden bg-[#F5F5F5]'>
      <Navbar />
      <div className='w-full flex justify-between gap-[1rem]'>
        <Sidebar />
        <div className='grow overflow-auto'>
            {Page}
        </div>
      </div>
    </div>
  )
}

export default Wrapper
