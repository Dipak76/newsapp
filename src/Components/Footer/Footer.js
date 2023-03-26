import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Developed by -{" "}
        <a href="https://www.linkedin.com/in/puja-neralwar-01a4b5b4/" target="__blank">
          Puja Neralwar
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://newportfolio-jade.vercel.app/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/puja-neralwar-01a4b5b4/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://newportfolio-jade.vercel.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer