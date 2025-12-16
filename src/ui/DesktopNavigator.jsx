import { useState } from 'react';


const DesktopNavigator = () => {
  const [currPage, setPage] = useState('Home');
  const [isMenuOpen, setIsMenuOpen ] = useState(false);
  const pages = ['Home', 'Shop', 'Pages', 'Blog', 'About Us', 'Contact Us']

  function handleSelectPage(page) {
    setPage(page)
  }
  function handleToggleMobileMenu() {
    // Toggle mobile menu visibility
    setIsMenuOpen(!isMenuOpen);
  }

  return ( <div className=' flex items-center justify-between'>
    <div className='hidden lg:flex gap-7 items-center'>
      {
        pages.map((page) => (
          <button className='flex gap-1 items-center'
          key={page}
            onClick={() => handleSelectPage(page)}
          >
            <p className={
            currPage === page 
              ? 'text-white text-sm'
              : 'text-gray-500 text-sm hover:text-gray-300 animate'}> {page} </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={
              currPage === page 
              ? 'white'
              : 'grey'
            } className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        ))
      }
    </div>
    <div className='flex lg:hidden z-50'>
      <button
      className=''
      onClick={handleToggleMobileMenu}
      >
        {
          !isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="size-6 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) :
          (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          )
        }
      </button>
    </div>
    <div className='flex gap-2 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='white' className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      <p className='text-white text-sm'>(219) 555-0114</p>
    </div>
    {
          isMenuOpen ? (
            <div className='absolute inset-0 w-full bg-[#1F2937] shadow-lg flex flex-col gap-3 opacity-98 pt-37 px-4 pb-10 z-10 lg:hidden'>
              {pages.map((page) => (
                <button 
                  key={page}
                  className='w-full flex gap-1 text-left px-4 py-3 border-gray-200 hover:bg-gray-100 rounded-lg group'
                  onClick={() => {
                    handleSelectPage(page); 
                    handleToggleMobileMenu();
                  }}
                >
                  <p className={
                    currPage === page 
                      ? 'text-primary font-semibold' 
                      : 'text-gray-300 hover:text-black group-hover:text-black animate'
                  }>
                    {page}
                  </p>
                    {
                      (page === 'Shop' || page === 'Pages') && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 group-hover:stroke-black">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      )
                    }
                </button>
              ))}
            </div>
          ) : null
        }
  </div> );
}

export default DesktopNavigator;