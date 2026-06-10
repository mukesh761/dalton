import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "../components/GoogleLogin";
import { userContext } from '../context/User.context'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate=useNavigate()
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [password, setpassword] = useState("");
  const [agree, setagree] = useState(false);
  const [formate, setformate]=useState(true)
const backend = import.meta.env.VITE_BACKEND;
console.log(backend)
const {user,setuser,islogin,setislogin}=useContext(userContext)
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
 const handleSubmit=async(e)=>{
    e.preventDefault();
    
    console.log('signup clicked')
    setformate(validateEmail(email))
    if (!formate){
      return
    }
     
    const data={email,password}
    try{
      const res=await axios.post(`${backend}/api/user/login`,data,{withCredentials:true})
      console.log(res.data.newUser)
      
      localStorage.setItem('user',JSON.stringify(res.data.newUser))
      localStorage.setItem(res.data.newUser && 'islogin',true)
      setuser(res.data.newUser)
      setislogin(true)
     
      console.log("User logged in successfully")
      navigate('/')
    }
    catch(err){
      console.log(err)
    }


  }


  return (
    <div className="min-h-screen flex bg-yellow-50">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-white p-12 flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Dalton</h1>

        <h2 className="text-4xl font-bold leading-tight">
          Start Your
          <br />
          Learning Journey
        </h2>

        <p className="mt-6 text-lg text-yellow-100">
          Discover world-class courses, learn new skills, and grow your career
          with expert-led content.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center p-6">
        <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Join Dalton and start learning today
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Country
              </label>

              <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={country}
                onChange={(e)=>{setcountry(e.target.value)}}
              >
                <option>Select Country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>India</option>
                <option>Germany</option>
                <option>France</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                />

                <button
                  type="button"
                  className="absolute right-4 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <button
                  type="button"
                  className="absolute right-4 top-3 text-gray-500"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-1 accent-yellow-500"
                value={agree}
                onChange={(e)=>{setagree(e.target.value)}}
              />

              <span>
                I agree to the{" "}
                <a href="#" className="text-yellow-600 font-medium">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-yellow-600 font-medium">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition duration-300"
              onClick={handleSubmit}
            >
              Create Account
            </button>

            <div className="relative my-6">
              <hr />

              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-500">
                OR
              </span>
            </div>

            <GoogleLogin />

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <a
                onClick={()=>{navigate("/login")}}
                className="text-yellow-600 font-semibold hover:text-yellow-700"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;