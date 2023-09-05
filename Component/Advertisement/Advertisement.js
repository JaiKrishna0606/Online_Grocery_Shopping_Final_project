import React from 'react';
import "./Advertisement.css";
import img1 from "../Assets/ad1.png";
import img2 from "../Assets/ad2.png";
import img3 from "../Assets/ad3.png";
import img4 from "../Assets/ad4.png";
import img5 from "../Assets/ad5.png";
import { MdDoubleArrow } from 'react-icons/md';

import plate from "../Assets/plate.png";
import { TypeAnimation } from 'react-type-animation';

const Advertisement = () => {
    return (
        <div className='advertisement-container'>

            <div className='advertisement-sub-container'>

            
        <div className='content-sec-one'>
                        <h2 style={{color:"purple"}}>BIG</h2>
                        <h1 style={{color:"red"}}>BASKET</h1>
                        <h3>
 </h3>


                    </div>
                    
                        <img src={plate} className="rotate" alt='' />
                    </div>
                    
                </div>

          
    );
};

export default Advertisement;