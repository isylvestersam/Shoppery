

const StoreLocation = () => {
  return ( <div className='justify-between flex'>
    <div className='flex w-fit gap-2 lg:mx-auto lg:mx-0'>
      <img src="/Icons/location-icon.svg" alt="" className="" />
      <p className='text-xs hidden lg:flex' >Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
    </div>
    <div className='gap-2 items-center flex'>
      <button className='flex gap-2'>
        <p className="text-xs">ENG</p>
        <img src="/Icons/downward-arrow-icon.svg" className='w-3' />
      </button>
      <button className='flex gap-2'>
        <p className="text-xs">USD</p>
        <img src="/Icons/downward-arrow-icon.svg" className='w-3' />
      </button>
      <p className="text-xs">|</p>
      <p className="text-xs">Sign in / Up</p>
    </div>
  </div> );
}
 
export default StoreLocation;