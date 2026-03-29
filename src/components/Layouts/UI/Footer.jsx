import React from 'react'
import footerData from '../../../api/footerData.json'
import { data, NavLink } from 'react-router-dom';
import { CiPhone } from "react-icons/ci";
import { MdAttachEmail } from "react-icons/md";

 const Footer = () => {

  
  const footerIcon = {
    FaPhoneAlt: <CiPhone/>,
    MdAttachEmail: <MdAttachEmail/>
  };

  return (
   <footer className='footer-section'>
    <div className="container grid grid-three-cols">
      {footerData.map((item, index)=>{
        const { id, icon , title ,des , phone, email ,address} = item;
        return(
          <div key={item.id} className="footer-item">
            <h3 className="footer-title">{item.title}</h3>
            <p className="footer-desc">{item.desc}</p>
            <div className="footer-contact">
            
              <p>{item.phone}</p>
              <p> {item.email}</p>
            </div>
          </div>
        )
      })}


     
    </div>
          <div className="copyright-area">
        <div className="container flex center">
          
            <p>&copy; 2023 ZenithDoc. All rights reserved.</p>
            
          </div>
        </div>
     
   </footer>
  )
};

export  default Footer;
