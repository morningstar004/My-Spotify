import ellipsisImg from '../assets/ellipsis.png'
import backImg from '../assets/back.png'
import forwardImg from '../assets/forward.png'
import searchImg from '../assets/search.png'
import browseImg from '../assets/browse.png'
import notificationImg from '../assets/notification.png'


const Navbar = () => {
  return (
    <div className='gap-64 w-screen flex flex-row justify-between items-center p-4 bg-[#212529] text-white'>
      <div className='leftItems flex flex-row items-center gap-4'>
        <div className='option'>
            <img src={ellipsisImg} alt='ellipsis' className='h-[35px]' />
        </div>
        <div className='Door flex flex-row justify-between items-center gap-0'>
            <img src={backImg} alt="back" className='cursor-pointer h-[35px]'/>
            <img src={forwardImg} alt="forward" className='cursor-pointer h-[35px]' />
        </div>
      </div>
      <div className='centerItems flex flex-row justify-between items-center gap-4'>
        <div className='homeIcom rounded-full cursor-pointer h-14 w-14 flex justify-center items-center bg-[#343A40] hover:bg-[#495057] hover:scale-10'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
            <path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333	c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35"></path><path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z"></path>              
          </svg>
        </div>
        <div className='searchbox transition-all delay-75 bg-[#343A40] hover:bg-[#495057] rounded-full hover:border-2 border-[#CED4DA] w-[500px] h-14 flex flex-row justify-between items-center px-4 gap-4'>
          <div className='flex flex-row justify-center items-center gap-1'>
            <img src={searchImg} alt="search" className='cursor-pointer h-[35px]'/>
            <input type='text' placeholder='What Do You Wanna Play..?' className='bg-transparent outline-none p-2 text-[16px] font-sans w-[380px]'/>
          </div> 
          <div className='flex flex-row justify-center items-center gap-2'>
            <div className='line bg-[#6C757D] w-[3.5px] h-[40px] rounded-lg'></div>
            <img src={browseImg} alt="browse" className='cursor-pointer h-[35px]'/>
          </div>
        </div>
      </div>
      <div className='rightItems flex flex-row justify-between items-center gap-4'>
        <div className='notification cursor-pointer'>
          <img src={notificationImg} alt="notification" className='cursor-pointer h-[35px]' />
        </div>
        <div className='rounded-full bg-[#EDF2F4] w-12 h-12 opacity-70 flex justify-center items-center font-bold hover:scale-10 hover:bg-[#CED4DA] cursor-pointer transition-all'>
          <div className='rounded-full bg-[#Ef233c] text-white w-10 h-10 flex justify-center items-center font-bold hover:scale-10 hover:bg-[#C70039] cursor-pointer transition-all'>
            S
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
