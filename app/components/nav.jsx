"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Nav() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const router = useRouter();
 
   // You can implement your authentication check here
   useEffect(() => {
      // Function to check authentication status
      const checkAuthentication = () => {
        // Check if the 'isauthenticated' flag is set in localStorage
        const userIsAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(userIsAuthenticated);
      };
  
      // Initial check on component mount
      checkAuthentication();
  
      // Set up an interval to check every 10 seconds
      const interval = setInterval(() => {
        checkAuthentication();
      }, 10); // 10,000 milliseconds = 10 seconds
  
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    const handleLogout = () => {
      // Perform logout logic here (e.g., clearing authentication tokens, state, etc.)
      // After logging out, remove the 'isauthenticated' flag from localStorage
      localStorage.removeItem('isAuthenticated');
      router.push("/");
    };

   return (
     <nav className='w-auto mt-7   xl:w-auto text-white items-center flex flex-col justify-center h-16 xl:h-24 rounded-full bg-black'>
       <ul className='text-xs mr-3 ml-3 xl:text-xl xl:mr-7 xl:ml-7 font-bold font-sans flex flex-row gap-5 xl:gap-20'>
         <Link href="/">Home</Link>
         <Link href="/AboutS">About</Link>
        
 
         {isAuthenticated ? (
           <>
           <Link href="/dashboard">Careers</Link>
             <Link href="/Character">Character Test</Link>
             <button onClick={handleLogout}>Logout</button>
           </>
         ) : (
          <Link href="/Loginp">Login</Link>
         )}
       </ul>
     </nav>
   );
 }