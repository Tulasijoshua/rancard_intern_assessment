import React from 'react'
import prod from "../../../assets/products/pizza.jpg";
import Button from '../../../common/Button';
import { useDispatch, useSelector } from 'react-redux';

const AddToCart = () => {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);
    console.log(items)
  return (
    <div className='w-full h-[95%] flex flex-col justify-between items-start overflow-hidden'>
        <div className='w-full lg:px-[2rem] px-[1rem]'>
            <div className='lg:px-[1rem] sm:px-[0.7rem] px-[0.3rem] 2xl:pt-[1rem] pt-[0.6rem] 2xl:pb-[1.5rem] pb-[1.2rem] flex justify-start gap-[1rem] border-b-[1px] border-gray-400'>
                <div className='2xl:w-[150px] lg:w-[130px] sm:w-[120px] w-[100px] 2xl:h-[100px] lg:h-[90px] sm:h-[80px] h-[70px]'>
                    <img className='w-full h-full object-cover rounded-md' src={prod} alt="Product" />
                </div>
                <div className=''>
                    <div className='2xl:text-[1rem] xs:text-[0.9rem] text-[0.8rem] font-semibold'>4 Meat Pizza</div>
                    <div className='2xl:text-[1rem] xs:text-[0.9rem] text-[0.8rem] font-bold'>GHS 100 - 250</div>
                </div>
            </div>
            <div className='w-full pb-[1rem] border-b-[1px] border-gray-400 '>
                <div className='px-[1rem] 2xl:py-[1.2rem] py-[1rem] 2xl:text-[1rem] text-[0.9rem] font-bold'>Select</div>
                <div className='w-full overflow-auto'>
                    <div className="min-w-[400px] sm:w-[80%] xs:w-[90%] pl-[1rem]">
                        <div className='w-full 2xl:pb-[1rem] pb-[0.8rem] flex justify-start items-center '>
                            <small className='w-[30%] 2xl:text-[1rem] text-[0.9rem] font-semibold'>Small</small>
                            <small className='w-[30%] 2xl:text-[1rem] text-[0.9rem] font-semibold'>GHS 100</small>
                            <div className='flex-1 flex justify-end items-center gap-[1rem]'>
                                <div className='2xl:leading-[1.5rem] leading-[1.2rem] 2xl:px-[1rem] px-[0.8rem] lg:text-[1rem] sm:text-[0.9rem] text-[0.8rem] font-bold rounded-xl border border-gray-400 bg-[#DFDFDF]'>+</div>
                                <div className='2xl:text-[1rem] text-[0.9rem] 2xl:px-[0.6rem] px-[0.4rem] 2xl:py-[0.5rem] py-[0.3rem] border-2 leading-[0.6rem]'>0</div>
                                <div className='2xl:leading-[1.5rem] leading-[1.2rem] 2xl:px-[1rem] px-[0.8rem] lg:text-[1rem] sm:text-[0.9rem] text-[0.8rem] font-bold rounded-xl border border-gray-400 bg-[#DFDFDF]'>-</div>
                            </div>
                        </div>
                        <div className='w-full 2xl:pb-[1rem] pb-[0.8rem] flex justify-start items-center '>
                            <small className='w-[30%] 2xl:text-[1rem] text-[0.9rem] font-semibold'>Medium</small>
                            <small className='w-[30%] 2xl:text-[1rem] text-[0.9rem] font-semibold'>GHS 150</small>
                            <div className='flex-1 flex justify-end items-center gap-[1rem]'>
                                <div className='2xl:leading-[1.5rem] leading-[1.2rem] 2xl:px-[1rem] px-[0.8rem] lg:text-[1rem] sm:text-[0.9rem] text-[0.8rem] font-bold rounded-xl border border-gray-400 bg-[#DFDFDF]'>+</div>
                                <div className='2xl:text-[1rem] text-[0.9rem] 2xl:px-[0.6rem] px-[0.4rem] 2xl:py-[0.5rem] py-[0.3rem] border-2 leading-[0.6rem]'>0</div>
                                <div className='2xl:leading-[1.5rem] leading-[1.2rem] 2xl:px-[1rem] px-[0.8rem] lg:text-[1rem] sm:text-[0.9rem] text-[0.8rem] font-bold rounded-xl border border-gray-400 bg-[#DFDFDF]'>-</div>
                            </div>
                        </div>
                        <div className='w-full 2xl:pb-[1rem] pb-[0.8rem] flex justify-start items-center '>
                            <small className='w-[30%] 2xl:text-[1rem] text-[0.9rem] font-semibold'>Large</small>
                            <small className='w-[3 0%] 2xl:text-[1rem] text-[0.9rem] font-semibold'>GHS 200</small>
                            <div className='flex-1 flex justify-end items-center gap-[1rem]'>
                                <div className='2xl:leading-[1.5rem] leading-[1.2rem] 2xl:px-[1rem] px-[0.8rem] lg:text-[1rem] sm:text-[0.9rem] text-[0.8rem] font-bold rounded-xl border border-gray-400 bg-[#DFDFDF]'>+</div>
                                <div className='2xl:text-[1rem] text-[0.9rem] 2xl:px-[0.6rem] px-[0.4rem] 2xl:py-[0.5rem] py-[0.3rem] border-2 leading-[0.6rem]'>0</div>
                                <div className='2xl:leading-[1.5rem] leading-[1.2rem] 2xl:px-[1rem] px-[0.8rem] lg:text-[1rem] sm:text-[0.9rem] text-[0.8rem] font-bold rounded-xl border border-gray-400 bg-[#DFDFDF]'>-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full py-[1rem] flex justify-between items-center border-t-[1px] border-gray-400'>
            <div className='pl-[2rem] flex flex-col justify-center items-center'>
                <p className='text-[0.9rem] text-gray-600'>Total</p>
                <p className='sm:text-[1.2rem] text-[1rem] font-semibold'>0</p>
            </div>
            <div className='pr-[2rem]'>
                <Button  title="Add to Cart" />
            </div>
        </div>
    </div>
  )
}

export default AddToCart
