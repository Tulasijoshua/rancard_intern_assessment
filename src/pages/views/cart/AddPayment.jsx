import React, { useEffect, useState } from 'react'
import Button from '../../../common/Button'
import ghana from "../../../assets/countries/images.png";
import ukFlag from "../../../assets/countries/uk.png";
import usFlag from "../../../assets/countries/us.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '../../../store/historySlice';
import { loadCart } from '../../../store/cartSlice';
import Alert from '../../../common/Alert';

const AddPayment = () => {
    const [isDelivery, setIsDelivery] = useState(false)
    const [isPickup, setIsPickup] = useState(false)
    const [isMomoSameAsPhone, setIsMomoSameAsPhone] = useState(false);
    const [momoNumber, setMomoNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('momo');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const [isAlert, setAlert] = useState({
        status: false,
        text: '',
        bigText: '',
        type: '',
        button: '',
        action: ()=>{},
        button1: '',
        action1: ()=>{},
    })
    

    const cartItems = useSelector((state) => state.cart.items);
    useEffect(() => {
        dispatch(loadCart());
      }, [dispatch]);

      const handleCheckout = () => {
        if (Array.isArray(cartItems) && cartItems.length > 0) {
            const userDetails = {
                isDelivery,
                isPickup,
                isMomoSameAsPhone,
                momoNumber,
                paymentMethod,
                name,
                phoneNumber
            };
            dispatch(addToHistory({ items: cartItems, userDetails }));
        } else {
            setAlert({...isAlert, status: true, text: "Product deleted!", type: 'error'})
        }
      };

  return (
    <div className='grotest w-full mx-auto px-[2rem] py-[1rem]'>
        <Alert big={isAlert.bigText} button1={isAlert.button} action1={()=>isAlert.action()} isON={isAlert.status} type={isAlert.type} message={isAlert.text} setON={(val)=>setAlert({...isAlert, status: false, text: ''})}/>
        <h2 className='text-[1.1rem] font-semibold'>Product details</h2>
        <div className='w-full h-[500px] py-[0.5rem] overflow-auto'>
            <div className='w-[60%]'>
                <div className='flex flex-col gap-[0.5rem] pb-[1rem]'>
                    <label className='text-[1rem] font-medium'>Name</label>
                    <input className='outline-none border-2 text-[0.9rem] px-[1rem] py-[0.5rem] rounded-md' type="text" 
                        placeholder='Kwame  Dartey'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-[0.5rem] pb-[1rem]'>
                    <label className='text-[1rem] font-medium'>Phone number</label>
                    <div className='h-[40px] bg-gray-300 flex justify-start items-center border-2 rounded-md'>
                        <div className=' flex justify-start items-center gap-[0.5rem] '>
                            <div className='w-[30px] h-full'>
                                <img className='w-full h-full object-cover' src={ghana} alt="" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <input className='flex-1 outline-none border-2 text-[0.9rem] px-[1rem] py-[0.5rem] rounded-md' type="text" 
                            placeholder='+233 278 811 107'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className='pt-[0.4rem]'>
                    <div className='text-[1.1rem] font-semibold'>Select Payment method</div>
                    <div className='py-[0.5rem] flex justify-start items-center gap-[2rem]'>
                        <div className='flex justify-start items-center gap-[1rem]'>
                            <input type="radio" className=" accent-[#0DD983] " 
                                name="paymentMethod"
                                value="momo"
                                checked={paymentMethod === 'momo'}
                                onChange={() => setPaymentMethod('momo')}
                            />
                            <label htmlFor="momo">Momo</label>
                        </div>
                        <div className='flex justify-start items-center gap-[1rem]'>
                            <input type="radio" className=" accent-[#0DD983] " 
                                name="paymentMethod"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={() => setPaymentMethod('card')}
                            />
                            <label htmlFor="momo">Card</label>
                        </div>
                        <div className='flex justify-start items-center gap-[1rem]'>
                            <input type="radio" className=" accent-[#0DD983] " 
                                name="paymentMethod"
                                value="cashOnDelivery"
                                checked={paymentMethod === 'cashOnDelivery'}
                                onChange={() => setPaymentMethod('cashOnDelivery')}
                            />
                            <label htmlFor="momo">Cash on delivery</label>
                        </div>
                    </div>
                </div>
                <div className='pt-[0.5rem] flex justify-start items-center gap-[1rem]'>
                    <input type="checkbox" className='accent-[#0DD983]'
                        checked={isMomoSameAsPhone}
                        onChange={(e) => setIsMomoSameAsPhone(e.target.checked)}
                     />
                    <label htmlFor="" className='text-[0.9rem]'>Is your Momo number the same as your phone number?</label>
                </div>
                
            </div>
            <div className='py-[1rem]'>
                <h2 className='text-[1.1rem] font-semibold'>Delivery Details</h2>
                <div className='pt-[0.5rem] pb-[1rem]'>
                    <small className='text-[0.8rem] font-semibold'>Select delivery option</small>
                    <div className='pt-[0.5rem] flex justify-start items-center gap-[1rem]'>
                        <div onClick={() => {setIsDelivery(true); setIsPickup(false)}} className={`text-[0.9rem] px-[1rem] py-[0.4rem] border ${isDelivery ? 'bg-[#069B5C] text-white' : 'text-black'} rounded-md`}>Delivery</div>
                        <div onClick={() => {setIsDelivery(false); setIsPickup(true)}} className={`text-[0.9rem] px-[1rem] py-[0.4rem] border ${isDelivery ? 'bg-[#069B5C] text-white' : 'text-black'} rounded-md`}>Pick up</div>
                    </div>
                </div>
                <div className='w-full px-[1.5rem] py-[1rem] bg-[#FFDEB642] flex justify-between items-center gap-[2rem]'>
                    <div >
                        <div className='pb-[0.5rem] text-[0.8rem]'>Delivery location</div>
                        <div className='text-[1rem] font-semibold'>Circle</div>
                    </div>
                    <div className='flex justify-end items-center gap-[0.5rem]'>
                        <small className='text-[1rem] border-b border-gray-500 leading-[1rem] '>Change</small>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
        <div className='w-full mt-[1.5rem] py-[1rem] flex justify-end items-center border-t-[1px] border-gray-400'>
            <div className='w-full pt-[0.5rem] pr-[2rem]'>
                <button onClick={handleCheckout} className='w-full xl:px-[1.8rem] xs:px-[1.5rem] px-[1rem] xl:py-[0.8rem] py-[0.5rem] md:text-[0.9rem] text-[0.8rem] text-white font-medium border bg-[#0DD983] rounded-[2rem]'>Continue to pay</button>
            </div>
      </div>
    </div>
  )
}

export default AddPayment
