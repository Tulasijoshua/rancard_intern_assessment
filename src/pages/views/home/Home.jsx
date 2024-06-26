import React, { useEffect, useState } from 'react'
import { products } from '../../../utils/products'
import Modal from '../../../common/Modal'
import AddToCart from '../cart/AddToCart'
import Button from '../../../common/Button'
import AddProduct from '../products/AddProduct'
import { loadProducts } from '../../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Empty from '../../../common/Empty'
import { addItem } from '../../../store/cartSlice'
import { Link } from 'react-router-dom'
import Alert from '../../../common/Alert'

const Home = () => {
    const [showCart, setShowCart] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    const [isBack, setIsBack] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
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

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);
    console.log(products)

    const handleAddToCart = (product) => {
            setSelectedProduct(product);
            setShowCart(true);
    };



  return (
    <section className='maxSection w-full lg:px-[2rem] px-[1rem] sm:py-[3rem] py-[1.5rem]'>
        <Alert big={isAlert.bigText} button1={isAlert.button} action1={()=>isAlert.action()} isON={isAlert.status} type={isAlert.type} message={isAlert.text} setON={(val)=>setAlert({...isAlert, status: false, text: ''})}/>

        <Modal isOn={showCart} name="Add to Cart" onClose="Close" setIsBack={false} close={()=>setShowCart(false)} content={<AddToCart product={selectedProduct} close={()=>{
                setShowCart(false)
            }} cancel={()=>setShowCart(false)}/>}
        />
        <Modal isOn={showProduct} name="Add Product" onClose="Back" isBack={isBack} setIsBack={setIsBack} close={()=>setShowProduct(false)} content={<AddProduct close={()=>{
                setShowProduct(false)
            }} cancel={()=>setShowProduct(false)}/>}
        />

      <div className='w-full flex sm:flex-row flex-col xs:justify-between justify-start sm:items-center items-start'>
        <h2 className='uncut text-left 2xl:text-[2rem] xl:text-[1.8rem] md:text-[1.6rem] text-[1.5rem] font-semibold'>Products</h2>
        <div className='grotest-medium sm:pt-[0.5rem] pt-[1rem] flex ss:flex-row flex-col ss:justify-end justify-start items-center gap-[1rem]'>
           
            <Button onClick={()=>setShowCart(true)} title="Add to Cart" />
            <button onClick={()=>{setShowProduct(true); setIsBack(true)}} className='xl:px-[1.8rem] xs:px-[1.5rem] px-[1rem] xl:py-[0.8rem] py-[0.5rem] md:text-[0.9rem] text-[0.8rem] text-[#0DD983] font-medium border border-[#0DD983] rounded-[2rem]'>Add Product</button>
        </div>
      </div>
            {
                products.length > 0 ? (<>
                    <section className='w-full py-[1.5rem] grid md:grid-cols-3 xs:grid-cols-2  2xl:gap-[2.5rem] lg:gap-[2rem] gap-[1rem]'>
                     {
                            products.map((product, index) => (
                                <div key={index} className='grotest-medium transition-all hover:scale-[1.05] duration-[0.5s]'>
                                    <div className='w-full 2xl:h-[250px] xl:h-[220px] lg:h-[190px] md:h-[180px] sm:h-[220px] xs:h-[180px] ss:h-[230px] h-[170px]'>
                                        <img className='w-full h-full object-cover rounded-lg' src={product.image} alt={product.productName} />
                                    </div>
                                    <div className='pt-[1rem] px-[0.5rem]'>
                                        <div className='flex justify-between items-center'>
                                            <div className='xl:text-[1rem] md:text-[0.9rem] xs:text-[1rem] text-[0.9rem]'>{product.productName}</div>
                                            <div className='flex justify-end items-center xs:gap-[0.5rem] gap-[0.3rem'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="xs:size-4 size-3 text-[#FFA800]">
                                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                                </svg>
                                                <div className='xl:text-[1rem] md:text-[0.9rem] xs:text-[1rem] text-[0.9rem]'>3.4</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <small className='grotest-medium font-semibold md:text-[0.9rem] xs:text-[1rem] text-[0.9rem] leading-[0.5rem]'>GHS {product.variants[0].price}</small>
                                            <div onClick={() => handleAddToCart(product)} className='px-[1rem] py-[0.3rem] bg-[#0DD983] rounded-md text-white flex justify-end items-center xs:gap-[0.5rem] gap-[0.3rem'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* <small className='grotest-medium font-semibold md:text-[0.9rem] xs:text-[1rem] text-[0.9rem] leading-[0.5rem]'>GHS {product.variants[0].price}</small> */}
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </>) : (<>
                    <div className='w-full flex flex-col justify-center items-center pt-[4rem]'><Empty text={'No product available'}/></div>
                </>)
            }
    </section>
  )
}

export default Home
