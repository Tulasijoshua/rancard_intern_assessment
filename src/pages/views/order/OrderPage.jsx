import React, { useEffect } from 'react'
import { orderedProd, prodHistory } from '../../../utils/products'
import { useDispatch, useSelector } from 'react-redux';
import { loadHistory } from '../../../store/historySlice';
import Alert from '../../../common/Alert';

const OrderPage = () => {
    const dispatch = useDispatch();
  const historyItems = useSelector(state => state.history.history);

    useEffect(() => {
    // Load history items when the component mounts
    dispatch(loadHistory());
  }, [dispatch]);

  console.log("history", historyItems)
  return (
    <section className='maxSection w-full lg:px-[2rem] px-[1rem] sm:py-[3rem] py-[1.5rem]'>
        <div className='w-full flex justify-between items-center gap-[1rem]'>
            <h2 className='uncut text-left 2xl:text-[1.8rem] xl:text-[1.6rem] md:text-[1.5rem] text-[1.5rem] font-semibold'>Orders</h2>
            <button className='px-[1rem] py-[0.4rem] flex justify-end items-center gap-[1rem] border-2 border-gray-300 rounded-md'>
                <span className='font-medium'>Filter</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
      <div className='w-full py-[2rem] overflow-auto'>
        <table className='min-w-[700px] w-full uncut-regular'>
            <thead className='w-full xl:text-[1rem] text-[0.9rem] bg-[#EFEFEF]'>
                <tr className=' text-left'>
                    <th className='pl-[1.5rem] py-[0.8rem]'>Customer</th>
                    <th className='py-[0.8rem]'>Product</th>
                    <th className='py-[0.8rem]'>Qty</th>
                    <th className='py-[0.8rem]'>Ttl Price</th>
                    <th className='py-[0.8rem]'>Delivery</th>
                    <th className='py-[0.8rem]'>Date</th>
                    <th className='py-[0.8rem]'>Status</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {
                    historyItems.map((history, index) => (
                        <tr key={index} className='xl:text-[1rem] lg:text-[0.9rem] text-[0.8rem] bg-white border-b-2 transition-all hover:scale-[1.02]'>
                            <td className='py-[1rem] pl-[1.5rem]'>{history.userDetails.name}</td>
                            <td>{history.product.productName}</td>
                            <td>{history.quantity} x {history.price}</td>
                            <td>{history.totalPrice} </td>
                            <td>{history.userDetails.isDelivery ? 'Delivery' : 'Pick up'}</td>
                            <td>10/06/24</td>
                            <td className=' '>
                                <div className={`w-[120px] px-[0.5rem] py-[0.3rem] flex justify-between items-center ${history.status === "Pending" ? "bg-[#FFE818]" : history.status === "Canceled" ? "bg-[#FF1818]" : "bg-[#39FF18]"} rounded-md`}>
                                    <div className='uncut text-[0.9rem] font-semibold'>Delivered</div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
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

export default OrderPage
