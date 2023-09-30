"use client"
import  { useEffect,useState } from 'react';
import Nav from '../components/nav';
import Quiz from '../components/quizs';
import { useAuthentication } from '../components/auth';
import { useRouter } from 'next/navigation';


const CharacterTest = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   const router = useRouter();
 
   // You can implement your authentication check here
   useEffect(() => {
     // Function to check authentication status
    const checkAuthentication = () => {
      // Check if the 'isAuthenticated' flag is set in localStorage
      const userIsAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(userIsAuthenticated);

      // Redirect to login page if not authenticated
      if (!userIsAuthenticated) {
        router.push('/Loginp'); // Redirect to your login page path
      }
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

  return (
    <main className="flex w-screen h-screen  flex-col items-center   text-black">
      <Nav />
      <h1 className='mt-5 text-center font-serif text-white bg-black rounded-md'>Not sure what to do?...take a character test and get recommendations</h1>
      <Quiz/>
    </main>
  );
};

export default CharacterTest;