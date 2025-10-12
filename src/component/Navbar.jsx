import React from 'react'
import ellipsisImg from 'assets/ellipsis.png'
import backImg from 'assets/back.png'
import forwardImg from 'assets/forward.png'

const Navbar = () => {
  return (
    <div>
      <div className='leftItems'>
        <div className='option'>
            <img src={ellipsisImg} alt='ellipsis' />
            <img src={backImg} alt="back" />
            <img src={forwardImg} alt="forward" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
