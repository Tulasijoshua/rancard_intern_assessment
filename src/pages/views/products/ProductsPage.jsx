import React from 'react'
import { prodHistory } from '../../../utils/products'

const ProductsPage = () => {
  return (
    <section className='maxSection w-full lg:px-[2rem] px-[1rem] sm:py-[3rem] py-[1.5rem]'>
      <h2 className='uncut text-left 2xl:text-[1.8rem] xl:text-[1.6rem] md:text-[1.5rem] text-[1.5rem] font-semibold'>Product History</h2>
      <div className='w-full py-[2rem] overflow-auto'>
        <table className='min-w-[500px] w-full uncut-regular'>
            <thead className='w-full xl:text-[1.1rem] text-[1rem] bg-[#EFEFEF]'>
                <tr className=' text-left'>
                    <th className='pl-[1.5rem] py-[0.8rem]'>Name</th>
                    <th className='py-[0.8rem]'>Variants</th>
                    <th className='py-[0.8rem]'>Qty.</th>
                    <th className='py-[0.8rem]'>Min. Price</th>
                    <th className='py-[0.8rem]'>Action</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {
                    prodHistory.map((history, index) => (
                        <tr key={index} className='xl:text-[1rem] text-[0.9rem] bg-white border-b-2 transition-all hover:scale-[1.02]'>
                            <td className='py-[1rem] pl-[1.5rem]'>{history.name}</td>
                            <td>{history.variant}</td>
                            <td>{history.quantity}</td>
                            <td>{history.price}</td>
                            <td className='text-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:size-5 size-4 text-[#F5222D]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className='w-full py-[2rem] bg-white'>
            
        </div>
      </div>
    </section>
  )
}

export default ProductsPage
