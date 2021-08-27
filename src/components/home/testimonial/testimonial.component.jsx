import './testimonial.styles.scss';
import React from "react";


import robotSet from '../../../assets/group-3.png';

import TestimonialItem from './item.component';
import HelpandTips from '../helpandtips/helpandtips.component';

const Testimonial = () => {
    const detail = {
        "detail":
            [
                {"Title": "POV", "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
                {"Title": "Resource", "Description": "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"},
                {"Title": "You’re all set.", "Description": "The wise man therefore always holds in these matters to this principle of selection."}
            ]
    }

    return(
        <>
        <div className='information-sec'>
            <div className='row container justify-content-center'>
                <div className='container justify-content-center row align-items-center testi-card'>
                    <div className='title-card'>Testimonial</div>
                    <TestimonialItem  className='testi-item'/>
                </div>
                <div className='detail-sec'>
                {
                    detail["detail"].filter((item, idx) => idx < 2).map((details, index) =>(
                        <div className='detail' key={index} details={details}>
                            <div className='title'>{details.Title}</div>    
                            <div className='description'>{details.Description}</div>    
                        </div>
                    ))
                }
                </div>
                <HelpandTips/>
                <div className='detail-sec'>
                {
                    detail["detail"].filter((item, idx) => idx === 2).map((details, index) =>(
                        <div className='detail' key={index} details={details}>
                            <div className='title'>{details.Title}</div>    
                            <div className='description' id='des-margin'>{details.Description}</div>    
                        </div>
                    ))
                }
                    <img src={robotSet} className='robotSet' alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonial;