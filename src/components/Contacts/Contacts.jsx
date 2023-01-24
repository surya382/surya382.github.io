
import { FiAtSign,FiPhone,FiMapPin } from "react-icons/fi";

import {Col} from "react-bootstrap"
import { Box, Flex } from "@chakra-ui/react";



function Contacts() {
   
    return (
        
            <div className="project-heading" style={{marginTop:"160px",marginBottom:"100px"}} >
                <h1 >Contact <strong className="purple">Me </strong></h1>
                
                  

                    {/* <div >
                        <a
                            href={`mailto:suryawanshirahul382@gmail.com`}
                            className='personal-details'
                        >
                            <div className="sym" style={{color:"teal"}}>
                                <FiAtSign />
                            </div>
                            <p className="email">
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

                        </div> */}
                     <Box className="contsec" mt="50px"  >
                     <a
                            href={`mailto:suryawanshirahul382@gmail.com`}
                            className='personal-details'
                        >
                            <div className="sym" style={{color:"teal"}}>
                                <FiAtSign />
                            </div>
                            <p className="email">
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

                     </Box>

                        

                        </div>

                      
                
      
    )
}

export default Contacts;
