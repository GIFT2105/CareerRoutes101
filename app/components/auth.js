import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import the necessary Firebase functions
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Function to check authentication status
export const useAuthentication = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
   const router = useRouter();
 
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
    }, 1); // 10,000 milliseconds = 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return isAuthenticated;
};