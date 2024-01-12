import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import React, { useState } from "react";

export default function CustomLogin(){
    const [user,setUser] = useState(null);
    const login = useGoogleLogin({
        onSuccess:(success)=>{
            console.log('here we can expect ', success.google_id, success.access_token)
        },
        onError: (error)=>{

        }
    })

    return (
        <>
            <button onClick={()=>login}>Click here to login with google </button>
        </>
    )
}