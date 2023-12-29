import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Hamburger({ handleSideNav }) {
  return (
    <div className='mr-4 '>
      <button className='text-2xl text-pink-500' onClick={handleSideNav}><FontAwesomeIcon icon={faBars} /></button>
    </div>
  )
}

export default Hamburger