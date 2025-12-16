import { footerData } from "../store/data";

const Footer = () => {
  return (<div>
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between gap-10 lg:gap-20 pb-10 lg:border-b border-gray-700 lg:mb-5">
      <div className="flex flex-col gap-3 mb-7 lg:mb-0 lg:w-[30%]">
      <h1 className="text-white text-lg">About Shoppery</h1>
      <p className="text-gray-500 text-xs">Discover a wide range of products at unbeatable prices. From the latest gadgets to everyday essentials, our platform makes shopping easy, fast, and secure. Enjoy exclusive deals, fast shipping, and a seamless checkout experience every time you shop with us.</p>
      <p className="flex gap-3">
        <span className="text-white underline underline-offset-10 decoration-green-600 decoration-2 text-sm" >(214) 555-0444</span>
        <span className="text-gray-500">or</span>
        <span className="text-white underline underline-offset-10 decoration-green-600 decoration-2 text-sm">(214) 555-4644</span>
      </p>
    </div>

    <div className="flex flex-col lg:flex-row lg:gap-10">
      {
        footerData.map((section, index) => (
          <div key={index} className="mb-8 lg:mb-0">
            <h2 className="text-white text-lg mb-4">{section.sectionTitle}</h2>
            <ul className="flex flex-col gap-3">
              {
                section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href='' className="text-gray-500 text-sm hover:text-white animate">{link}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>

    <div>
      <h2 className="text-white mb-4 lg:mt-5">Download Our App</h2>
      <div className="flex gap-4 lg:flex-col">
        <a className="flex gap-3 flex-center bg-[#333333] px-4 py-2 rounded-lg hover:shadow-soft hover:bg-gray-800 transition-all cursor-pointer">
          <img src="/Icons/apple-logo.svg" alt="App Store Badge" className="w-6 hover:scale-105 transition-transform cursor-pointer" />
          <span>
            <p className="text-gray-500 text-xs">Download on the</p>
            <h3 className="text-white text-sm font-semibold">App Store</h3>
          </span>
        </a>
        <a className="flex gap-3 flex-center bg-[#333333] px-4 py-2 rounded-lg hover:shadow-soft hover:bg-gray-800 transition-all cursor-pointer">
          <img src="/Icons/playstore.svg" alt="Google Play Badge" className="w-6 hover:scale-105 cursor-pointer" />
          <span>
            <p className="text-gray-500 text-xs">Get it on</p>
            <h3 className="text-white text-sm font-semibold">Google Play</h3>
          </span>
        </a>
      </div>
    </div>
    </div>

    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <div className='flex w-full items-center justify-start gap-4 pt-10 pb-5 lg:pt-0 lg:pb-0 lg:w-fit'>
      <button>
        <img src="/Icons/facebook.svg" className='w-8' />
      </button>
      <button>
        <img src="/Icons/twitter.svg" className='w-10' />
      </button>
      <button>
        <img src="/Icons/pinterest.svg" className='w-10' />
      </button>
      <button>
        <img src="/Icons/instagram.svg" className='w-10' />
      </button>
    </div>

    <p className="text-gray-500 text-xs">Shoppery eCommerce © 2025. All Rights Reserved </p>

      <div className="flex gap-2">
        <img src="/Icons/applePay.svg" alt="Payment Methods" className="w-10 mt-6 lg:mt-0" />
        <img src="/Icons/visa.svg" alt="Payment Methods" className="w-10 mt-6 lg:mt-0" />
        <img src="/Icons/mastercard.svg" alt="Payment Methods" className="w-10 mt-6 lg:mt-0" />
        <img src="/Icons/discover.svg" alt="Payment Methods" className="w-10 mt-6 lg:mt-0" />
      </div>
    </div>


  </div>);
}

export default Footer;