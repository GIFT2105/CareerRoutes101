"use client"
import Image from 'next/image';
import Nav from './components/nav';
import Banner from './components/banner';
import { useState, useEffect } from "react";

export default function Home() {
  // Define the isAuthenticated state and a function to update it
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Function to check authentication status
    const checkAuthentication = () => {
      const userIsAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      console.log('User isAuthenticated:', userIsAuthenticated);
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

  return (
    <main className="flex w-screen h-screen  flex-col items-center   text-black">
      <Nav />
      <Banner />

     
      <div className='text-center xl:text-base text-xs flex flex-row  justify-center items-center font-serif w-screen h-auto text-white bg-black   mt-5 rounded-2xl '>
      <img src="pexels-elijah-o'donnell-4066041.jpg" width={100} height={100}  className='xl:w-64 rounded-3xl  w-64  '  alt="Description of the image" />
      <p id='para' >
      Doing thorough research on career paths is crucial for both young
       and old individuals.
      It provides a roadmap for informed decisions that can shape 
      one's professional life.
      For the younger generation,
      early exploration of diverse career options aids in making
       informed choices, 
      maximizing opportunities, 
      and avoiding costly career changes later on.<br/>
      -Career Routes 101
      </p>
</div>

      <div className='text-center xl:text-base text-xs flex flex-row  justify-center items-center font-serif w-screen h-auto text-white bg-black  mt-5 rounded-2xl '>
      <img src="pexels-mikael-blomkvist-6476589.jpg" width={100} height={100}  className='xl:w-64 rounded-3xl  w-64  '  alt="Description of the image" />
      <p id='para' >
      For older individuals, it opens doors to new possibilities and can help in transitioning to more fulfilling careers. Our educational app offers comprehensive insights into various professions, equipping users with the knowledge and guidance needed to make sound career decisions, ensuring a brighter future for all age groups.<br/>
     <br/>
      -Let us help you!
      </p>
</div>

<footer className='bg-black w-screen flex flex-col text-white text-center text-xs  font-sans border-2 h-auto '>
<h1>Developed by Gift Letuka</h1>
{isAuthenticated ? (
  <h1 className='font-extrabold text-xs text-white text-cente'>You are logged in</h1>
) : (
 <h1></h1>

)}
<p className='text-xs  '>
Disclaimer: Please note that this is a beta demonstration project, and the information provided does not constitute professional career guidance. While our app aims to educate and offer guidelines on various careers, it is essential to consult with career advisors or experts for personalized advice before making any significant career decisions. We provide general information for educational purposes only and recommend seeking professional guidance for tailored career planning.






</p>
</footer>
    </main>
  );
}