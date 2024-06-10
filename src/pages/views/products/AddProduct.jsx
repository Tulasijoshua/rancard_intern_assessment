import React, { useState } from 'react'
import Button from '../../../common/Button'

const AddProduct = () => {
    const [profileImg, setProfileImg] = useState('')

    const fileChange = (e, name) =>{
        const file = e.target.files[0]
        const imgUrl = URL.createObjectURL(file)
        if(name === 'profile'){
            setProfileImg(URL.createObjectURL(file))
            // setDetails({...details, passport_picture: file})
        }
        
    }

  return (
    <form className='grotest w-full mx-auto px-[2rem] py-[1rem]'>
      <h2 className='text-[1.1rem] font-semibold'>Product details</h2>
      <div className='w-fit h-[500px] py-[0.5rem] overflow-auto'>
        <div className='w-fit h-fit pb-[1rem]'>
            <small className='text-[1rem] font-medium'>Image</small>
            <div className='max-w-[300px] w-fit mt-[0.5rem] flex flex-col justify-center items-center relative px-3 py-2 border-2 border-dashed border-gray-200 rounded-lg '>
                    {
                        profileImg ? <>
                            <img src={profileImg} alt="" className='object-cover w-full h-full rounded-lg shadow-xl' />
                            <small className='mt-2 hover:text-indigo-500' onClick={(e)=>{
                                setProfileImg('')
                            }}>Change Picture</small>
                        </> : <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-gray-500 mb-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                        <div className='text-[0.8rem] text-gray-400'>Click here or Drop your file here to upload it</div>
                        </>
                    }
                    <input required onChange={(e)=>fileChange(e, 'profile')} type="file" name="" id="" className="absolute top-0 right-0 left-0 bottom-0 opacity-0" />
            </div>
        </div>
        <div className='w-[70%] flex flex-col gap-[0.5rem] pb-[1rem]'>
            <label className='text-[1rem] font-medium'>Product Name</label>
            <input className='outline-none border-2 text-[0.9rem] px-[1rem] py-[0.5rem] rounded-md' type="text" placeholder='Fried rice' />
        </div>
        <div className='w-[70%] flex flex-col gap-[0.5rem] pb-[1rem]'>
            <label className='text-[1rem] font-medium'>Category</label>
            <select className='outline-none border-2 text-[0.9rem] px-[1rem] py-[0.5rem] rounded-md'>
                <option className='text-[0.9rem]'>Select category</option>
                <option className='text-[0.9rem]'>Select category</option>
                <option className='text-[0.9rem]'>Select category</option>
                <option className='text-[0.9rem]'>Select category</option>
            </select>
        </div>
        <div className='w-[70%] flex flex-col gap-[0.5rem] pb-[1rem]'>
            <label className='text-[1rem] font-medium'>Product Description</label>
            <textarea rows={4} className='outline-none border-2 text-[0.9rem] px-[1rem] py-[0.5rem] rounded-md' type="text" placeholder='Enter description' ></textarea>
        </div>
        <div className='w-full'>
            <h2 className='pt-[0.5rem] font-semibold text-[1rem]'>Product variants</h2>
            <div className='py-[0.5rem] flex justify-start items-center gap-[1rem]'>
                <div className='flex flex-col gap-[0.5rem] pb-[1rem]'>
                    <label className='text-[0.9rem] font-medium'>Variants Name</label>
                    <input className='outline-none border-2 text-[0.8rem] px-[1rem] py-[0.4rem] rounded-md' type="text" placeholder='Enter name' />
                </div>
                <div className='flex flex-col gap-[0.5rem] pb-[1rem]'>
                    <label className='text-[0.9rem] font-medium'>Price</label>
                    <input className='outline-none border-2 text-[0.8rem] px-[1rem] py-[0.4rem] rounded-md' type="text" placeholder='Enter price' />
                </div>
                <div className='flex flex-col gap-[0.5rem] pb-[1rem]'>
                    <label className='text-[0.9rem] font-medium'>Size</label>
                    <input className='outline-none border-2 text-[0.8rem] px-[1rem] py-[0.4rem] rounded-md' type="text" placeholder='Enter size' />
                </div>
            </div>
            <div className='flex justify-start items-center gap-[0.5rem] text-[#0DD983]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-[#0DD983]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <small className='text-[0.9rem] font-semibold '>Add another variant</small>
            </div>
        </div>
      </div>
      <div className='w-full mt-[1.5rem] py-[1rem] flex justify-end items-center border-t-[1px] border-gray-400'>
        <div className='pt-[0.5rem] pr-[2rem]'>
            <Button  title="Add Product" />
        </div>
      </div>
    </form>
  )
}

export default AddProduct
