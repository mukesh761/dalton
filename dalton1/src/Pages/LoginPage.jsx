import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from '../components/GoogleLogin';
import axios from "axios";
import { userContext } from '../context/User.context'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false)
const {user,setuser,islogin,setislogin}=useContext(userContext)

  const navigate = useNavigate()
  const backend = import.meta.env.VITE_BACKEND;
  console.log(backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { password, email }
    try {
      const response = await axios.post(`${backend}/api/user/login`, data, { withCredentials: true });
      console.log(response.data);
      localStorage.setItem('user',JSON.stringify(response.data.newUser))
      localStorage.setItem(response.data.newUser && 'islogin',true)
      setuser(response.data.newUser)
      setislogin(true)
      setloading(false)
      console.log("User logged in successfully")
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex bg-yellow-50">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-yellow-400 to-amber-500 text-white p-12 flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">Dalton</h1>

        <h2 className="text-4xl font-bold leading-tight">
          Learn From
          <br />
          The Best Courses
        </h2>

        <p className="mt-6 text-lg">
          Join thousands of learners worldwide and unlock premium educational
          content.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center p-6">
        <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h2>
            <p className="text-gray-500 mt-2">
              Sign in to your account
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={password}
                  onChange={(e) => { setpassword(e.target.value) }}
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

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="/forgot-password"
                className="text-yellow-600 hover:text-yellow-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition"
              onClick={handleSubmit}
            >
              Sign In
            </button>

            <div className="relative">
              <hr />
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-500">
                OR
              </span>
            </div>

            <GoogleLogin />

            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <a

                className="text-yellow-600 font-semibold" onClick={() => { navigate('/signup') }}
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;