import React from 'react'
import '../CascadingStyleSheet/header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
        <Link className='option' to="/home"><p>ADD CAR</p></Link>
        <Link className='option' to="/sell"><p>ON SELL</p></Link>
    </div>
  )
}

export default Header