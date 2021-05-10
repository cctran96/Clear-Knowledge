import React, { Component } from 'react'
import profile from '../images/Profile.png'
import github from '../images/Github.png'
import linkdin from '../images/LinkdIn.png'
import gmail from '../images/Gmail.png'

class AboutUs extends Component {
    render(){
        return(
            <div className='page-title'>
                <h2>Meet the developers</h2>
                <div className='card-container'>
                    <div className='info-card'>
                        <img className='picture' src={profile} alt="Dante"/>
                        <div className='details'>
                            <h3>Dante Lombardi</h3>
                            <a href='https://www.linkedin.com/in/dante-lombardi-75ab6913b/'><img src={linkdin} alt="linkdin logo"/>https://www.linkedin.com/in/dante-lombardi/</a>
                            <a href='https://github.com/DanteSeattle'><img src={github} alt="github logo"/>https://github.com/DanteSeattle</a>
                            <a href='mailto:gabrieldantelombardi@gmail.com'><img src={gmail} alt="gmail logo"/>gabrieldantelombardi@gmail.com</a>
                        </div>
                    </div>
                    <div className='info-card'>
                        <img className='picture' src={profile} alt="Chau"/>
                        <div className='details'>
                            <h3>Chau Tran</h3>
                            <a href='https://www.linkedin.com/in/chauctran/'><img src={linkdin} alt="linkdin logo"/>https://www.linkedin.com/in/chauctran/</a>
                            <a href='https://github.com/cctran96'><img src={github} alt="github logo"/>https://github.com/cctran96</a>
                            <a href='mailto:cctran96@gmail.com'><img src={gmail} alt="gmail logo"/>cctran96@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

export default AboutUs