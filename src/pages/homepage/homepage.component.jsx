import React from 'react'
import Jumbotron from '../../components/home/jumbotron/jumbotron.component';
import Deffinition from '../../components/home/deffinition/deffinition.component';
import Testimonial from '../../components/home/testimonial/testimonial.component';

const HomePage = () => {

    return(
        <>
            <div className='homepage'>
                <Jumbotron/>
                <Deffinition/>
                <Testimonial/>
            </div>
        </>
    )
}


export default HomePage;