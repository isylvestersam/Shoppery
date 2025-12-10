
import Login from "./Pages/Login"
import BreadCrumbs from "./ui/BreadCrumbs"
import Button from "./ui/Button"
import MobileNavbar from "./ui/MobileNavBar"
import StoreLocation from "./ui/StoreLocation"

function App() {

  return (
    <>
      {/* <section className="relative">
        <div className="container flex flex-col mx-auto pt-3 px-4">
          <StoreLocation />
        </div> */}

        {/* Diver Line */}
        {/* <div className=" flex w-full h-px border-b border-b-gray-200 mt-3 mb-5">
        </div>

        <div className="container flex flex-col mx-auto px-4">
          <Login />
        </div>
          
        
      </section> */}
      <MobileNavbar />
    </>
  )
}

export default App
