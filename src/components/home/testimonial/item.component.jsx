
import Item from './testimonialElements'
import React, {useState, useEffect} from "react";
import './testimonial.styles.scss'

import Carousel from 'react-elastic-carousel'
function TestimonialItem() {
    const [data, setData] = useState([]);
 
    useEffect(() => {
        fetch('https://wknd-take-home-challenge-api.herokuapp.com/testimonial/')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  return (
    <>  
        <Carousel itemsToShow={3} className='d-flex flex-row justify-content-center align-items-center'>
            {data.map((testimonial, index) => (
                    
                <Item className='container' key={index} testimonial={testimonial}>
                    <div className='d-flex flex-column justify-content-center'>
                        <div className='title-testi text-left'>{testimonial.by}</div>
                        <div className='description-testi  text-left'>{testimonial.testimony}</div>
                    </div>
                </Item>

            ))}
        </Carousel>
    </>
    )
}

export default TestimonialItem
