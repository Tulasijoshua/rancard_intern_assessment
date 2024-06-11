import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartData } from '../../../utils/products';
import Button from '../../../common/Button';


const Report = () => {
    const exportToCSV = () => {
        const csvData = chartData.map(row => Object.values(row).join(',')).join('\n');
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
            <button className='px-[1rem] py-[0.4rem] flex justify-end items-center gap-[1rem] border-2 border-gray-300 rounded-md'>
                <span className='font-medium'>Filter</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
        <div className='uncut w-full pt-[1.5rem] pb-[3rem] grid grid-cols-4 gap-[2rem]'>
            <div className='w-full py-[2rem] px-[1.5rem] bg-white rounded-md'>
                <div className='pb-[1rem] flex justify-start items-center gap-[1rem] border-b'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    <small className='text-[1rem] font-semibold'>Total Orders</small>
                </div>
                <div className='pt-[2.5rem]'>
                    <h2 className='text-[1.3rem] font-bold'>50</h2>
                </div>
            </div>
            <div className='w-full py-[2rem] px-[1.5rem] bg-white rounded-md'>
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
            <div className='w-full py-[2rem] px-[1.5rem] bg-white rounded-md'>
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
            <div className='w-full py-[2rem] px-[1.5rem] bg-white rounded-md'>
                <div className='pb-[1rem] flex justify-start items-center gap-[1rem] border-b'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                    <small className='text-[1rem] font-semibold'>Sales</small>
                </div>
                <div className='pt-[2.5rem]'>
                    <h2 className='text-[1.3rem] font-bold'>GHS 4,450</h2>
                </div>
            </div>
        </div>

        <section className='uncut w-full h-[600px] px-[4rem] py-[2rem] bg-white'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
                </BarChart>
            </ResponsiveContainer>
        </section>
        <Button onClick={exportToCSV} title="Export file"/>
    </section>
  )
}

export default Report
