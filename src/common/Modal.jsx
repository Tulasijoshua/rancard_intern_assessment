import React, { useEffect, useRef, useState } from 'react'

function Modal({content, close, isOn, name, onClose, isBack, setIsBack}) {
  const modalContainer = useRef();
  const [showShadow, setShowShadow] = useState(false);
//   const [isBack, setIsBack] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = modalContainer.current.scrollTop;
      if (scrollTop < 3) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }
    };

    modalContainer.current?.addEventListener('scroll', handleScroll);

    return () => {
      modalContainer.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(isOn){
    return (
      <div className='grotest w-screen h-screen fixed top-0 bottom-0 right-0 left-0 bg-[rgb(0,0,0,.5)] z-10 flex justify-between items-center'>
          <div className="flex-1 h-full  z-10" onClick={()=>close()}></div>
          <div ref={modalContainer} className='xl:flex-1 lg:w-[60%] md:w-[70%] w-full z-10 max-w-[800px] h-full bg-white rounded-l-xl overflow-hidden  relative  pb-[3rem]' >
              <section className={`w-[92%] mx-auto flex items-center justify-between bg-white pt-[2rem] 2xl:pb-[1rem] sm:pb-[0.8rem] pb-[0.5rem] mb-[0.5rem] sticky top-0 border-b-[1px] border-gray-400`}>
                <div className="pl-[1rem] flex flex-col justify-center w-fit">
                  <h1 className="2xl:text-[1.1rem] sm:text-[1rem] text-[0.9rem] font-bold">{name??''}</h1>
                  {/* <hr className="w-1/2 border-2 border-indigo-500" /> */}
                </div>
                <div onClick={()=>close()} className="w-fit pr-[1rem] flex justify-center items-center gap-[0.5rem] cursor-pointer">
                    {isBack === true ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="2xl:size-5 sm:size-4 size-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    ) : (
                        <svg onClick={()=>close()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="2xl:size-5 sm:size-4 size-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                    <div className='2xl:text-[0.9rem] text-[0.8rem] font-bold'>{onClose??''}</div>
                </div>
              </section>
              {content}
          </div>
      </div>
    )
  }
}

export default Modal