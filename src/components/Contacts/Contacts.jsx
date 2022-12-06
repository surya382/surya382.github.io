
import { FiAtSign,FiPhone,FiMapPin } from "react-icons/fi";

import {Col} from "react-bootstrap"



function Contacts() {
   
    return (
        
            <Col className="project-heading" style={{marginTop:"160px",marginBottom:"100px"}} >
                <h1 >Contact <strong className="purple">Me </strong></h1>
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

                        </Col>

                      
                
      
    )
}

export default Contacts;
