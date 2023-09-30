"use client"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';
import {  provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  const login = async () => {
    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Store authentication status in local storage
      localStorage.setItem("isAuthenticated", "true");
      console.log('User logged in. isauthenticated set to true in localStorage.');
      // Redirect to dashboard or any other authenticated page
      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      localStorage.setItem("isAuthenticated", "true");
      router.push("/"); // Redirect to the home page after successful login
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };


  return (
    <main className="flex w-screen h-screen  mt-10 flex-col items-center   text-black">
    <h1>Login</h1>
    <div className="bg-purple-200  text-center rounded-xl border-2 border-black  flex flex-col h-36 gap-12   ">
        <div className="inputGroup text-xs font-sans   ">
          <label className="mr-2 ">Email:</label>
          <input className="text-center border-2 border-black bg-white w-64 rounded-md  h-5 mt-1 "
            type="email"
            placeholder="Email..."
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
  
        <div className="inputGroup text-xs font-sans    ">
          <label>Password:</label>
          <input className="text-center rounded-md bg-white w-64  h-5 border-2 border-black "
            type="password"
            placeholder="Password..."
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="bg-black text-white rounded-b-full  " onClick={login}>Login</button>
      </div>
      
   
      <div className='bg-black w-72 text-center animate-bounce items-center justify-center  flex flex-row h-8     mt-14    '>
      <button   onClick={signInWithGoogle}
      className='font-semibold  text-white text-center flex   text-sm' >Sign In with Google    </button>
      <FcGoogle className="text-left ml-5  " />
      </div>

      <div className='bg-black w-72 text-center animate-bounce  mt-8 h-8   '>
      <Link className='font-semibold  text-white   text-sm    ' href="/signs">Or Sign up instead</Link>
      </div>

<div className="mt-16 ">
<img src="pexels-monstera-production-6289026.jpg" width={100} height={100}  className='xl:w-64 rounded-3xl  w-64   flex flex-col '  alt="Description of the image" />
  <h1 className="text-center font-sans ">The man who moves a mountain<br/> begins by carrying away small stones.<br/>- Confucius </h1>  

</div>


    </main>
  );
}

export default Login;