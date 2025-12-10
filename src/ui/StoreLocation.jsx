import locationIcon from '../Icons/location-icon.svg'
import downwardsArrow from '../Icons/downward-arrow-icon.svg'

const StoreLocation = () => {
  return ( <div className='flex justify-between'>
    <div className='flex gap-2 mx-auto lg:mx-0'>
      <img src={locationIcon} alt="" />
      <p className='text-xs lg:text-base' >Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
    </div>
    <div className='hidden gap-2 items-center lg:flex'>
      <button className='flex gap-2'>
        <p>ENG</p>
        <img src={downwardsArrow} className='w-3' />
      </button>
      <button className='flex gap-2'>
        <p>USD</p>
        <img src={downwardsArrow} className='w-3' />
      </button>
      <p>|</p>
      <p>Sign in / Up</p>
    </div>
  </div> );
}
 
export default StoreLocation;