import React from 'react';
import './navbar.styles.scss';
import Logo from '../../assets/bitmap.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    return(
        <>
        <nav class="navbar navbar-light">
            <div className='kotak'>
                <div class="row align-items-center">
                    <Link className='navbar-brand d-flex flex-row align-items-center bitmap' to='/'>
                        <img src={Logo} className='logo' alt=""/>
                        <div className='d-flex flex-column'>
                            <div className='good-morning'>Good Morning</div>
                            <div className='name'>Fellas</div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;