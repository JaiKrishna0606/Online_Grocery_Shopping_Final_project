import React from 'react';
import "./Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import { BiUser } from 'react-icons/bi';

const Navbar = () => {

    const navigate = useNavigate();
    const handleDate=()=>
    {
        navigate('/date');
    }

    const handleBlog=()=>
    {
        navigate('/blog');
    }
    return (
        <div className='navbar-container'>

            <div className='navbar-sub-container'>

               

                <div className='navbar'>
                    <ul>
                        <li><a href="#!">Home</a></li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                      
                        <li onClick={handleDate} ><Link to='/cart'> <span className='fle'>Cart <MdKeyboardArrowDown className='text-[25px]' /></span></Link> </li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                       <li> Call Us <span>+91 8769945324</span></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;