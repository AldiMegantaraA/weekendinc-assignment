import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import data from "./data"

function HelpnTipsDetails({item}) {
    const {itemId} = useParams()

    const details = data.find(item => item.id === itemId)
    
    return (
        <>
        <div style={{height: '700px'}}>
            <div className='container' style={{position: 'relative', top: '20%'}}>
                <h1>Help &amp; Tips Detail</h1>
                <h4 >{details.id}</h4>
                <p>{details.title}</p>
                {/* <p>{detailItem.description}</p> */}
            </div>
        </div>
        </>
    )
}

export default HelpnTipsDetails