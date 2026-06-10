import {react} from "react"
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { userContext } from '../context/User.context'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const GoogleLogin=()=>{
  const backend = import.meta.env.VITE_BACKEND;
  const {user,setuser,islogin,setislogin}=useContext(userContext)
  const navigate=useNavigate()
     const responseGoogle=async(authResult)=>{
      console.log('inside Oauth')
    try {
      if(authResult.code){
        const code=authResult.code;
        console.log(code)
        const result= await axios.post(`${backend}/api/user/auth/google`,{code},{withCredentials:true} )
        console.log(result.data);
         localStorage.setItem('user',JSON.stringify(result.data.user))
      localStorage.setItem(result.data.user && 'islogin',true)
      setuser(result.data.user)
      setislogin(true)
     
      console.log("User logged in successfully")
      navigate('/')
      }
    } catch (err) {
      console.log("error while requesting google code ",err)
    }
  }
  const googleLogin=useGoogleLogin({
    onSuccess:responseGoogle,
    onError:responseGoogle,
    flow:'auth-code'
  })
    return(
        <>
         <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
              onClick={googleLogin}
            >
              Continue with Google
            </button>
        </>
    )
}
export default GoogleLogin;