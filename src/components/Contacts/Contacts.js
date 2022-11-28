import React, { useContext, useState } from 'react';
import { FiAtSign,FiPhone,FiMapPin } from "react-icons/fi";

// import './Contacts.css';



function Contacts() {
   
    return (
        
            <div className="project-heading">
                <h1 >Contacts</h1>
                <div className='contacts-body'>
                  

                    <div className='contacts-details'>
                        <a
                            href={`mailto:suryawanshirahul382@gmail.com`}
                            className='personal-details'
                        >
                            <div style={{color:"teal"}}>
                                <FiAtSign />
                            </div>
                            <p >
                                suryawanshirahul382@gmail.com
                            </p>
                        </a>
                        <a
                            href={`tel:8169145094`}
                            className='personal-details'
                        >
                            <div style={{color:"teal"}}>
                                <FiPhone />
                            </div>
                            <p >
                                8169145094
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div style={{color:"teal"}}>
                                <FiMapPin />
                            </div>
                            <p >
                                Satara,Maharashtra
                            </p>
                        </div>

                        </div>

                        </div>

                        </div>

                      
                
      
    )
}

export default Contacts;
