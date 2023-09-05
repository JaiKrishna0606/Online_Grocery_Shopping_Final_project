import React from 'react';
import "./Footer.css";
import logo from "../Assets/brand1.png";



const Footer = () => {
    return (
        <div className='mt-[29px] bg-[#9FB846] h-[507px] relative overflow-hidden'>

            



            <div className='mx-[320px] flex justify-between items-center gap-[335px] pt-[23px]'>

                <div className='flex justify-between  justify-items-center items-center  w-[60%]'>
                    <div>
                       <center><img src={logo} className="w-[146px] h-[93px]" alt="" /></center> 
                    
                      <center> <h3>Call Us <br /> <span>+91 8769945324</span> </h3></center> 
                    </div>
                   
                </div>

                
            </div>

            <div className='mt-[24px] mx-[320px] hr-line  ' />


            <div className='pla'>
<div className='play'>
                    <div className='footer-info w-[250px] h-[250px]  z-[5]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Location</h2>
                        <p>4/58 <br /> Location</p>
                        <p> YASHWANTPUR COLONY</p>
                        <p>BANGALORE MAIN</p>
                        <p>PINCODE:467488</p>
                        <p>support@rcd.com</p>
                    </div>
                

                     <div className='footer-info w-[250px] h-[250px]  z-[2]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Categories</h2>
                        <p>FRUITS</p>
                        <p>DRY FRUITS</p>
                        <p>VEGETABLE</p>
                        <p>HEALTHY FOOD</p>
                    </div>
                

                    </div>      
                
            </div>

            <div className='mt-[68px] mx-[320px] hr-line  ' />

            <p className='plak'>Copyright@micro.com. All Rights Reserved</p>



        </div>
    );
};

export default Footer;