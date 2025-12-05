import BreadCrumbs from "../ui/BreadCrumbs";
import logo from '../Images/ecobazar-logo.png'
import Button from "../ui/Button";

const Login = () => {
  return ( <div className="flex flex-col pb-8">
    <img src={logo} className="w-36 mb-5" />
    <BreadCrumbs
      navs={ ['Account', 'Login'] }
    />

    {/* Sign up/in Form */}
    <form 

      className="mt-24 mx-auto w-full flex flex-col items-center py-12 shadow-soft rounded-lg px-5 md:px-7 lg:w-[40%]  ">
      <h3 className="text-3xl font-semibold mb-4">Sign In</h3>
      <input type="email" placeholder="Email" className="border border-gray-300 w-full py-3 px-3 rounded-lg mb-3 focus:outline-none "  />
      <input type="password" placeholder="Password" className="border border-gray-300 w-full py-3 px-3 rounded-lg focus:outline-none " />
      <div className="flex justify-between w-full my-4">
        <div className="flex gap-3 lg:my-3">
          <input type="checkbox" name="" id="remember" className="w-4" />
          <label for='remember' className="hover:cursor-pointer hover:underline" >Remember me</label>
        </div>
        <button className="hover:underline animate" >Forget Password</button>
      </div>
      <Button
        buttonSize='large'
        >
        Login
      </Button>
      <span className="w-full flex justify-center gap-2 mt-6">
        <p>Don't have an account?</p>
        <button className="font-semibold">Register</button>
      </span>
    </form>

  </div> );
}
 
export default Login;