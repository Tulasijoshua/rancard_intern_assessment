import React, { useEffect } from 'react'
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartData } from '../../../utils/products';
import Button from '../../../common/Button';
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Bar } from 'react-chartjs-2';
import { loadCart, selectTotalPrice } from '../../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const Report = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(selectTotalPrice);

    useEffect(() => {
        dispatch(loadCart());
      }, [dispatch]);

      console.log(cartItems)
      console.log(totalPrice)



    const exportToCSV = () => {
        const csvData = cartItems.map(row => Object.values(row.product.productName));
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      };

      
  return (
    <section className='maxSection w-full lg:px-[2rem] px-[1rem] sm:py-[3rem] py-[1.5rem]'>
      <div className='w-full flex justify-between items-center gap-[1rem]'>
            <h2 className='uncut text-left 2xl:text-[1.8rem] xl:text-[1.6rem] md:text-[1.5rem] text-[1.5rem] font-semibold'>Report</h2>
            <Button onClick={exportToCSV} title="Export file"/>
        </div>
        <div className='uncut w-full pt-[1.5rem] pb-[3rem] sm:grid flex flex-col items-center lg:grid-cols-4 sm:grid-cols-2 gap-[2rem]'>
            <div className='w-full max-w-[300px] xl:h-[190px] sm:h-[170px] h-[190px] flex flex-col justify-between py-[1.7rem] xl:px-[1.5rem] px-[1rem] bg-white rounded-md'>
                <div className='pb-[1rem] flex justify-start items-center gap-[1rem] border-b'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    <small className='text-[1rem] font-semibold'>Total Orders</small>
                </div>
                <div className='pt-[2.5rem]'>
                    <h2 className='text-[1.3rem] font-bold'>{cartItems.length}</h2>
                </div>
            </div>
            <div className='w-full max-w-[300px] xl:h-[190px] sm:h-[170px] h-[190px] flex flex-col justify-between py-[1.7rem] xl:px-[1.5rem] px-[1rem] bg-white rounded-md'>
                <div className='pb-[1rem] flex justify-start items-center gap-[1rem] border-b'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>

                    <small className='text-[1rem] font-semibold'>Total Customers</small>
                </div>
                <div className='pt-[2.5rem]'>
                    <h2 className='text-[1.3rem] font-bold'>300</h2>
                </div>
            </div>
            <div className='w-full max-w-[300px] xl:h-[190px] sm:h-[170px] h-[190px] flex flex-col justify-between py-[1.7rem] xl:px-[1.5rem] px-[1rem] bg-white rounded-md'>
                <div className='pb-[1rem] flex justify-start items-center gap-[1rem] border-b'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                    <small className='text-[1rem] font-semibold'>Successful Orders</small>
                </div>
                <div className='pt-[2.5rem]'>
                    <h2 className='text-[1.3rem] font-bold'>50</h2>
                </div>
            </div>
            <div className='w-full max-w-[300px] xl:h-[190px] sm:h-[170px] h-[190px] flex flex-col justify-between py-[1.7rem] xl:px-[1.5rem] px-[1rem] bg-white rounded-md'>
                <div className='pb-[1rem] flex justify-start items-center gap-[1rem] border-b'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                    <small className='text-[1rem] font-semibold'>Sales</small>
                </div>
                <div className='pt-[2.5rem]'>
                    <h2 className='xl:text-[1.3rem] text-[1.1rem] font-bold'>GHS {totalPrice}</h2>
                </div>
            </div>
        </div>
        <div className='overflow-auto'>
            <section className='uncut w-full min-w-[400px] h-fit px-[4rem] py-[2rem] bg-white text-[2rem] overflow-auto'>
                <Bar 
                    data={{
                        labels: cartItems.map((itm) => itm.product.productName),
                        datasets: [
                            {
                                label: "Product Report",
                                data: cartItems.map((itm) => itm.totalPrice),
                                backgroundColor: "#0DD983",
                                barPercentage: "0.4",
                                width: "100%"
                            }
                        ]
                    }}
                />
            </section>
        </div>
    </section>
  )
}

export default Report
