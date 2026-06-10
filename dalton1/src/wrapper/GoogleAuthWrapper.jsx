import React from 'react'
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from '../components/GoogleLogin';
const GoogleAuthWrapper = ({children}) => {
  return (
    <GoogleOAuthProvider clientId='17399766180-k9nac21e2fj9lesohjuglls9rnl9071v.apps.googleusercontent.com' >
        {children}
    </GoogleOAuthProvider>
  )
}

export default GoogleAuthWrapper