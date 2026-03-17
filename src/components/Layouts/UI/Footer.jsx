import React from 'react'
import footerData from '../../../api/footerData.json'
import { data } from 'react-router-dom';
import { CiPhone } from "react-icons/ci";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer  flex justify-align ">
      <div className=" flex padding-2rem ">
        {footerData.map(data => (
          <div key={data.id}>
            <div className='flex'>
            <ul className='flex padding-2rem'>
              <li ><CiPhone />{data.phone}</li>
              <li><MdAttachEmail />{data.email}</li>
              <li>{data.address}</li>
            </ul>
            </div>
          </div>
          
        ))}
        
      </div>

       </footer>
  )
}

export default Footer;