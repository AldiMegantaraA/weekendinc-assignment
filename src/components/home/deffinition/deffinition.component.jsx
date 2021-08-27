import React from 'react';
import './deffinition.styles.scss';
import robotDef from '../../../assets/group-4.png';
import oval from '../../../assets/oval.png';

const Deffinition = () => {

    return(
        <>
        <div className='deffinition'>
            <div><img src={robotDef} className='robotDef' alt="" /></div>
            <div className='container'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='d-flex flex-column align-items-end justify-content-center def-sec'>
                        <div className='caption-deffinition'><span className='text-style-1'>Deffinition;</span> a practice or exercise to test or 
                        improve one's fitness for 
                        athletic competition, ability, or performance to exhaust (something, such as a mine) 
                        by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                        </div>
                        <div className='weekend-team'>-weekend team</div>
                    </div>
                </div>
            </div>
            <img src={oval} className='oval' alt="" />
        </div>
        </>
    )
}

export default Deffinition;