import React from 'react';
import './jumbotron.styles.scss'
import robot from '../../../assets/robot.png'
import CustomButton from '../../custom-buttom/custom-button.component';

const Jumbotron = () => {

    return(
        <>
        <div className='jumbo'>
            <div className='bg-jumbotron'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='weekend-from-home'>WEEKEND FROM HOME</div>
                        <div className='stay-active'>Stay active with a little workout.</div>
                        <div className='d-flex flex-column align-items-center'>
                            <img className='robot' src={robot} alt="" />
                            <CustomButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Jumbotron;