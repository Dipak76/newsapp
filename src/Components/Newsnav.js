import React from 'react';
import "./Newsnav.css";
import HamburgerDrawer from "./HamburgerDrawer"



const Newsnav = ({setCategory}) => {
  return (
    <div className='navi'>
      <div className='menui'>
      <HamburgerDrawer setCategory={setCategory}  style={{color:'#ffffff'}}/>
        {/* <HamburgerDrawer setCategory={setCategory} /> */}
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />
    </div>
  )
}

export default Newsnav;