import React, { useEffect, useState } from 'react';
import './helpandtips.styles.scss';
import arrow from '../../../assets/oval-icon.png';
import pathHelp from '../../../assets/path-3.png';
import { Link } from "react-router-dom";

const HelpandTips = () => {
    const [data, setData] = useState([]);
     
    useEffect(() => {
        fetch('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return(
        <>
        <div className='help-tips d-flex flex-column justify-content-between'>
            <div className='title'>Help &amp; Tips</div>    
            <img src={pathHelp} className="pathHelp" alt="" />
            <div className='help-tips-card'>
                {
                    data.map((item, index) =>(
                        <div key={index} item={item} className='help-tips-content'>
                            <img src={item.image} className='images' alt=""/>
                            <div className='d-flex flex-row align-items-center justify-content-center caption' style={{color: 'white'}}>
                                <div className='caption-title'>
                                    {item.title}
                                </div>
                                <Link className='detail-tips' to={`/Help&Tips/${item.id}`}>
                                    <img src={arrow} alt="" />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>                                                                                  
        </div>
        </>
    )
}

export default HelpandTips;