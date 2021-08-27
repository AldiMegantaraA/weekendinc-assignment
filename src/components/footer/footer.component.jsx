import React from 'react';
import './footer.styles.scss';

const Footer = () => {

    return(
        <>
        <div className='footer d-flex align-items-center justify-content-center'>
            <div className='container d-flex flex-row align-items-center justify-content-between'>
                <div className='wknd2020'><span className='font-weight-bold'>wknd</span>@2020</div>
                <div className='alpha'>alpha version 0.1</div>
            </div>
    </div>
        </>
    )
}

export default Footer;