"use client"
import  { useState } from 'react';

const Hg = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className='flex h-screen text-white       flex-wrap     mt-4 text-center   w-screen gap-1 items-center justify-center'>

    <div id='cards' className={`w-96 h-96 rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
    <h1 className="text-white font-serif font-bold    "> Graphic Design</h1>
    {isClicked ? (
      <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>
    
        <p className='mb-2 mt-6'>
        Description: Graphic designers create visual concepts to inspire, inform, and captivate consumers.
        </p>
       
        <p className='mb-2'>
        High School Preparation: Focus on art and computer classes. Subjects like Art, Computer Science, and Mathematics are valuable.
       </p>

       <p className='mb-2'>
        Further Education: Pursue a Bachelor’s degree in Graphic Design, Fine Arts, or a related field.
      
        </p>

        <p className='mb-2'>
        Skills: Graphic design software proficiency, creativity, attention to detail.
       </p>
      
       <p className='mb-2'>
        Steps to Succeed: Build a portfolio, gain internships, and network in the industry.
        </p>

      </div>
    ) : (
      
      <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />
   
      )}
  </div>
   
  <div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
  <h1 className="text-white font-serif font-bold  "> Teaching</h1>
  {isClicked ? (
    <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>
  
      <p className='mb-2 mt-6'>
      Description: Educators instruct students in various subjects to help them learn and apply concepts.  </p>
     
      <p className='mb-2'>
      High School Preparation: Focus on subjects like Education, Psychology, and English. Volunteer or work with children/teens.
      </p>
    
      <p className='mb-2'>
      Further Education: Pursue a Bachelor’s degree in Education. Consider a Master’s degree for advanced roles.
      </p>

      <p className='mb-2'>
      Skills: Communication, patience, adaptability, passion for teaching.
      </p>
    
     <p className='mb-2'>
     Steps to Success: Gain teaching experience through internships and student teaching. Obtain teaching certification. </p>

    </div>
  ) : (
    
    <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />
 
    )}
</div>

   
<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  "> Marketing</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Marketing professionals promote products/services, analyze market trends, and create advertising campaigns.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Business, Economics, and Mathematics. Develop communication and creativity skills.  </p>
  
    <p className='mb-2'>
    Further Education: Pursue a Bachelor’s degree in Marketing, Business Administration, or related fields.  </p>

    <p className='mb-2'>
    Skills: Market research, digital marketing, communication, creativity.
    </p>
  
   <p className='mb-2'>
   Steps to Success: Gain internships in marketing firms. Build a strong online presence. Network in the industry.</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div>

   
<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  "> Entrepreneurship:</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Entrepreneurs start and manage businesses, taking financial risks for potential profits.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Business, Economics, and Mathematics. Develop problem-solving skills.</p>
  
    <p className='mb-2'>
    Further Education: While not mandatory, studying Business Administration or Entrepreneurship can be beneficial.</p>

    <p className='mb-2'>
    Skills: Risk-taking, leadership, innovation, financial management.
    </p>
  
   <p className='mb-2'>
   Steps to Success: Develop a business idea. Create a business plan. Seek funding and mentorship. Adapt and learn from failures..</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div>

   
<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  ">Social Work::</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Social workers help individuals and families cope with issues and improve their lives.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Psychology, Sociology, and Communication. Volunteer or intern in social service organizations.</p>
  
    <p className='mb-2'>
    Further Education: Pursue a Bachelor’s degree in Social Work. A Master’s degree is often required for advanced positions.</p>

    <p className='mb-2'>
    Skills: Empathy, problem-solving, communication, patience.
    </p>
  
   <p className='mb-2'>
   Steps to Success: Gain field experience through internships. Obtain state licensure or certification. Pursue specialized training if desired.</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div>

   
<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  "> Software Development:</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Software developers create applications or systems for computers and devices.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Computer Science, Mathematics, and Physics. Develop coding skills..</p>
  
    <p className='mb-2'>
    Further Education: Pursue a Bachelor’s degree in Computer Science, Software Engineering, or related fields.</p>

    <p className='mb-2'>
    Skills: Programming languages (such as Python, Java), problem-solving, attention to detail.
    </p>
  
   <p className='mb-2'>
   Steps to Success: Build a portfolio of coding projects. Participate in hackathons or coding competitions. Seek internships or entry-level positions.</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div>

<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  "> Data Science:</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Data scientists analyze complex data to help companies make decisions.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Mathematics, Statistics, and Computer Science. Develop analytical skills.</p>
  
    <p className='mb-2'>
    Further Education: Pursue a Bachelor’s degree in Data Science, Statistics, Computer Science, or related fields. A Master’s or Ph.D. can enhance opportunities.</p>

    <p className='mb-2'>
    Skills: Data analysis, programming (e.g., Python, R), machine learning, critical thinking.  </p>
  
   <p className='mb-2'>
   Steps to Success: Work on real-world data projects. Participate in data science competitions. Obtain relevant certifications. Network with professionals in the field.</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div> 

   
<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  ">  Healthcare:</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Healthcare professionals provide medical services and care for patients.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Biology, Chemistry, and Mathematics. Volunteer or intern in healthcare settings.</p>
  
    <p className='mb-2'>
    Further Education: Pursue a Bachelor’s degree in Nursing, Medicine, Pharmacy, or other healthcare-related fields. Advanced roles require medical school or specialized training.</p>

    <p className='mb-2'>
    Skills: Compassion, attention to detail, problem-solving, teamwork.</p>
  
   <p className='mb-2'>
   Steps to Success: Gain clinical experience through internships. Obtain necessary certifications and licenses. Stay updated with medical advancements.</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div>

   
<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  ">  Engineering:</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Engineers design and create everything from bridges to software applications.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Mathematics, Physics, and Chemistry. Develop problem-solving and analytical skills.</p>
  
    <p className='mb-2'>
    Further Education: Pursue a Bachelor’s degree in a specific engineering field (e.g., Civil, Mechanical, Electrical).</p>

    <p className='mb-2'>
    Skills: Analytical thinking, creativity, attention to detail, teamwork.</p>
  
   <p className='mb-2'>
   Steps to Success: Gain practical experience through internships. Obtain Professional Engineer (PE) licensure for advanced roles. Pursue further education for specialization.</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div>

   
<div id='cards' className={`w-96 h-auto rounded-3xl flex flex-col text-center items-center bg-gray-500`} onClick={handleClick}>
<h1 className="text-white font-serif font-bold  ">  Environmental Science:</h1>
{isClicked ? (
  <div className='border-t-2 w-auto h-auto text-white font-serif text-center  '>

    <p className='mb-2 mt-6'>
    Description: Environmental scientists study the environment and work to protect it.</p>
   
    <p className='mb-2'>
    High School Preparation: Focus on Biology, Chemistry, Environmental Science, and Mathematics.</p>
  
    <p className='mb-2'>
    Further Education: Pursue a Bachelor’s degree in Environmental Science, Biology, or related fields. Advanced roles may require Master’s or Ph.D.</p>

    <p className='mb-2'>
    Skills: Research, data analysis, problem-solving, passion for environmental issues.</p>
  
   <p className='mb-2'>
   Steps to Success: Conduct research projects. Gain field experience through internships. Pursue specialized certifications. Stay updated with environmental policies and technologies.</p>

  </div>
) : (
  
  <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300} className='xl:w-64 rounded-3xl w-64' alt="Description of the image" />

  )}
</div>

   
   <div id='cards' className='w-96 h-96 rounded-3xl flex flex-row text-center items-center'>
   <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300}  className='xl:w-64 rounded-3xl  w-64  '  alt="Description of the image" />
   <h1>Software Engineer</h1> 
   </div> 

   
   <div id='cards' className='w-96 h-96 rounded-3xl flex flex-row text-center items-center'>
   <img src="pexels-anete-lusina-5240543.jpg" width={300} height={300}  className='xl:w-64 rounded-3xl  w-64  '  alt="Description of the image" />
   <h1>Software Engineer</h1> 
   </div> 

   
  </div>

  )
}

export default Hg
