import React from 'react'

const Button = ({onClick, title}) => {
  return (
    <div className='w-fit'>
            <button onClick={onClick} className='xl:px-[1.8rem] xs:px-[1.5rem] px-[1rem] xl:py-[0.8rem] py-[0.5rem] md:text-[0.9rem] text-[0.8rem] text-white font-medium border bg-[#0DD983] rounded-[2rem]'>{title}</button>
    </div>
  )
}

export default Button
