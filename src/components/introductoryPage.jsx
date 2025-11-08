import React from 'react'
import arrow from '../assets/arrow.png';
import backgroundImg from '../assets/backgroundImg.png';
import IDverify from '../assets/IDverify.png';
import schedule from '../assets/schedule.png';
import media from '../assets/media.png';
const introductoryPage = () => {
  return (
    <div className='bg-blue'>
      <navbar className='flex justify-between p-3 bg-[#99D98C]'>
        <logo>
            <img src="path/to/logo.png" alt="App Logo" />
        </logo>
        <div className='flex text-lg font-mono pt-1 '>
            <div className='px-4'><a href="#">Feature</a></div>
            <div className='px-4'><a href="@">Socials</a></div>
        </div>
        <div className='gap-3 flex'>
            <button className='bg-white rounded-2xl border-spacing-1 py-1 px-4 text-lg'>Log in</button>
            <button className='bg-[#52B69A] rounded-2xl border-spacing-1 py-1 px-4 text-lg'>Sign Up</button>
        </div>
      </navbar>
      <header className='bg-background-img h-screen bg-cover bg-center'>
        <div className='flex flex-col text-center p-40 justify-center items-center'>
            <h1 className='text-5xl font-bold mb-6'>Welcome to Post Schedular</h1>
            <p className='text-xl mb-8'>where you can create Thoughts and Impresions of your in a new way and connect like never before.</p>
            <button className='bg-[#52B69A] text-white w-[190px] font-bold py-3 px-6 rounded-full text-lg hover:border-black hover:bg-gray-200 hover:text-black transition duration-300 flex items-center justify-center text-center gap-2'>Get Started <img className='h-8' src={arrow} alt="" /></button>
        </div>
      </header>
      <sub>
        <div className='w-[85%] h-[600px] bg-gray-200 mx-auto my-20 flex rounded-2xl'>
          <div className='leftDIv rounded-l-2xl overflow-hidden'>
            <img className='h-[600px]' src={backgroundImg} alt="someimg" />
          </div>
          <div className='rightDiv w-[50%] p-10'>
            <h1 className='text-5xl font-bold  '>Schedule your posts in advance</h1>
            <p className='text-lg mt-8 w-[80%] font-sans'>Easily plan and schedule your social media posts ahead of time with our intuitive scheduling tools. Save time and maintain a consistent online presence by automating your posting process.</p>
            <ul>
              <li className='flex gap-3 mt-8 items-center'>
                <img className='h-10' src={IDverify} alt="" />
                <p className='text-[15px]'>connect with your Ids</p>
              </li>
              <li className='flex gap-4 mt-8 items-center'>
                <img className='h-10' src={schedule} alt="" />
                <p className='text-[15px]'>Schedule your posts</p>
              </li>
              <li className='flex gap-4 mt-8 items-center'>
                <img className='h-10' src={media} alt="" />
                <p className='text-[15px]'>add media to post</p>
              </li>
            </ul>  
          </div>
        </div>
      </sub>
    </div>
  )
}

export default introductoryPage
