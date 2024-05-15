import React from 'react'
import "./Navbar.css"
import Logo from "../../images/Logo.png"

export default function Navbar() {

  const nav = ["Features", "Pricing & Plans", "Support", "About Us"];
  return (
    <div className='container'>
      <div className="row">
        <div className='d-flex'>
          <img className='logo' src={Logo} alt="" />
          {
            nav.map((item, index) => {
              return (
                <ul key={index}>
                  <li className='li'>{item}</li>
                </ul>
              )
            })
          }
          <button className='navbar_btn'>Contact us</button>
        </div>
      </div>
    </div>
  )
}
