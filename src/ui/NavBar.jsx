

import { useState } from 'react';
import { createPortal } from 'react-dom';





const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenDropDown() {
    setIsOpen(prev => !prev)
  }

  return ( <div>
    <div className='justify-between hidden lg:flex'>
      <div>
        <img src="/Icons/Logo.svg" alt="" />
      </div>
      <div className='flex  rounded-lg w-fit'>
        <div className='flex pl-3 border rounded-tl-lg rounded-bl-lg border-gray-300 border-r-0'>
          <img src="Icons/search-icon.svg" className='max-w-4' />
          <input type="text" className='py-2 px-3 w-72 focus:outline-none ' placeholder='Search...'  />
        </div>
        <button className='bg-primary border-primary px-5 py-2 text-white rounded-tr-lg rounded-br-lg hover:bg-hard-primary animate'>
          Seach
        </button>
      </div>
      <div className='flex gap-4'>
        <img src="/Icons/Heart.svg" alt="" />
        <img src="/Icons/Devider.svg" alt="" />
        <div className='flex gap-2'>
          <img src="/Icons/Cart.svg" alt="" />
          <span>
            <p className='text-gray-500'>Shopping Cart:</p>
            <p className='font-semibold'>$57.00</p>
          </span>
        </div>
      </div>
    </div>


    {/* Mobile Nav */}
    <div className='flex flex-col lg:hidden '>
    <div className='flex justify-between items-center mb-3 px-6 py-1 '>
      <img src="/Icons/Logo.svg" className="w-36 " />
      <button onClick={handleOpenDropDown} className='z-50' >
        {
          isOpen ? (
            <img src="/Icons/x.png" className='w-8'/>
          ) : (
            <img src="/Icons/menu.svg" className='hover:scale-110 animate w-8 ' />
          )
        }
      </button>

      {/* Drop Down */}
      {/* {
        isOpen ? (
            
          
        ) : null
      } */}

      
    </div>

    
  </div>

  </div> );
}
 
export default NavBar;