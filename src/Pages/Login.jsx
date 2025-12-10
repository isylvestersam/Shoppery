import BreadCrumbs from "../ui/BreadCrumbs";
import logo from '../Images/ecobazar-logo.png'
import Button from "../ui/Button";
import { useState } from "react";

const Login = () => {
  const [signUp, setSignUp] = useState(true)

  return ( <div className="flex flex-col pb-8">
    
    <BreadCrumbs
      navs={ ['Account', 'Login'] }
    />

    {/* Sign up/in Form */}
    <form 
      className="mt-24 mx-auto w-full flex flex-col items-center py-12 shadow-soft rounded-lg px-5 md:px-7 lg:w-[40%] ">
      <h3 className="text-3xl font-semibold mb-4">
        {
          signUp ? 'Create Account' : 'Sign in'
        }
      </h3>
      <input type="email" placeholder="Email" className="border border-gray-300 w-full py-3 px-3 rounded-lg mb-3 focus:outline-primary animate"  />
      {/* <p className="ml-auto mb-3 italic -mt-2 text-danger">Please enter a valid email</p> */}
      <div className="flex w-full items-center gap-3">
        <input type="password" placeholder="Password" className="border border-gray-300 w-full py-3 px-3  rounded-lg focus:outline-primary " />
        {/* <p className="ml-auto italic -mt-2 mb-3 text-danger">Incorrect password</p> */}
        {
          signUp ? (
            <input type="password" placeholder="Confirm Password" className="border border-gray-300 w-full py-3 px-3 rounded-lg focus:outline-primary " />
          )
          : ''
        }
        {/* <p className="ml-auto italic text-danger">Passwords do not match!</p> */}
      </div>
      <div className="flex justify-between w-full my-4">
        <div className="flex gap-3 lg:my-3">
          <input type="checkbox" name="" id="remember" className="w-4  " />
          <label for='remember' className="hover:cursor-pointer hover:underline"  >Remember me</label>
        </div>
        <button className="hover:underline animate" type='button' >Forget Password</button>
      </div>
      <Button
        buttonSize='large'
        >
        { signUp ? 'Create Account' : "Sign in" }
      </Button>
      <span className="w-full flex justify-center gap-2 mt-6">
        <p> {signUp ? "Don't have an account?" : 'Already have an  account?' } </p>
        <button className="font-semibold" type='button'> {
          signUp ? 'Sign in' : 'Create Account'
          } </button>
      </span>
    </form>

  </div> );
}
 
export default Login;