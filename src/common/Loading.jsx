import React from 'react'
import loadIcon from '../Assets/Snake.gif'

function Loading() {
  return (
    <section className='w-screen h-screen flex fixed top-0 right-0 left-0 bottom-0 justify-center items-center bg-[#3d3d3d4d] z-20'>
      <div className='w-[200px] h-[70px] flex justify-center items-center bg-white rounded-xl'>
          <img src={loadIcon} width={25} alt="" />
          <p className="ml-3">Loading...</p>
      </div>
    </section>
  )
}

export default Loading