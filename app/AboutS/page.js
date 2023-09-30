"use client"
import React from 'react'
import { useState, useEffect } from "react";
import Nav from '../components/nav'

const page = () => {

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
    <Nav/>
   <div className='text-center xl:text-base text-xs flex flex-col  justify-center items-center font-serif w-screen h-auto text-white bg-black   mt-5 rounded-lg '>
   <img src="pexels-cottonbro-studio-4065624.jpg" width={300} height={300}  className=' rounded-3xl   mt-3  '  alt="Description of the image" />
   <h1 className='xl:text-2xl w-screen xl:w-screen font-black  text-center  text-sm   mt-4   font-serif '>
  Career Routes 101: Navigating Your Future
  </h1>
   <p id='para' className='mt-4  text-left   ' >
  Career Routes 101 is a revolutionary app 
  meticulously crafted to empower individuals in South Africa,
  particularly students at tech universities,
  in making informed decisions about their career paths. 
  Designed with precision and foresight,
  this app addresses the crucial need to avoid hasty 
  and regrettable career choices, 
  offering a comprehensive toolkit 
  for career exploration and planning.
  </p>
  <p id='para' className='mt-4  text-left' >
  One of the app's standout features is its extensive career database.
   With over 1,000 careers meticulously profiled, 
   users can explore various professions,
    understand their job responsibilities,
     required qualifications, 
     and even gain insights into the current job market demand.
   This extensive resource ensures that students
    have access to a wide array of career options, 
    allowing them to align their interests and
     skills with professions that are both fulfilling 
     and sustainable.
     </p>
     <p id='para' className='mt-4 text-left ' >
   Furthermore, 
   Career Routes 101 offers personalized career assessments 
   and quizzes, aiding students in identifying their strengths, 
   weaknesses, and passions. Through these assessments, 
   users receive tailored recommendations, 
   ensuring that their career choices align with their unique attributes
  and aspirations. By providing such a comprehensive toolkit,
  Career Routes 101 is committed to helping South African tech university 
  students embark on successful and fulfilling career journeys, 
  making well-informed decisions
  that will shape their futures positively.
   </p>
</div>

<footer className='bg-black w-screen flex flex-col text-white text-center text-xs  font-sans border-2 h-auto mt-2 '>
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
  )
}

export default page
