import React from 'react'
import './Marketing.css'
import Button from '../../images/button.png'
import Girl from "../../images/Happy_girl 1.png"
import Icon from "../../images/Icon.png"
import Subsicre from "../../images/Obunachi.png"
import Klent from '../../images/Client.png'

export default function Marketing() {
    return (
        <div className='container'>
            <div className="row">
                <div className="marketing d-flex">
                    <div className="col-6">
                        <h1>BEST <span className='marketing_span'>MARKETING</span> <br />
                            DIGITAL AGENCY
                        </h1>
                        <p className='marketing_text'>Various versions have evolved over the years, <br />
                            sometimes by accident, sometimes on purpose</p>
                        <div className='d-flex'>
                            <div>
                                <button className='marketing_btn'>Get Started</button>
                            </div>
                            <div>
                                <img className='marketing_img' src={Button} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='marketing_girl' src={Girl} alt="girl" />
                        <img className='marketing_icon' src={Icon} alt="" />
                        <img className='marketing_obunachi' src={Subsicre} alt="" />
                        <img className='marketing_klent' src={Klent} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
