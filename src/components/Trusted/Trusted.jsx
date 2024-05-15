import React from 'react'
import "./Trusted.css"
import Slack from "../../images/Slack.png"
import Descript from "../../images/Descript.png"
import Group from "../../images/Group.png"
import Spotify from "../../images/Spotify.png"
import Logitech from "../../images/Logitech.png"
export default function Trusted() {
    return (
        <div className='container'>
            <div className="row">
                <div className="trusted">
                    <p className='trusted_title'>OUR TRUSTED CLIENTS</p>
                    <div className='d-flex gap-5 trusted_img'>
                        <div>
                            <img src={Slack} alt="" />
                        </div>
                        <div>
                            <img src={Descript} alt="" />
                        </div>
                        <div>
                            <img src={Group} alt="" />
                        </div>
                        <div>
                            <img src={Spotify} alt="" />
                        </div>
                        <div>
                            <img src={Logitech} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='trusted_business'>What we do</p>
                    <h2>
                        We Are Here To Help You <br />
                        Build Your Business
                    </h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem <br />accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa <br />quae ab illo invento veritatis quasi architecto beatae vitae dicta.</p>
                    <button className='trusted_btn'>Explore all service</button>
                </div>
                <div>
                    <div className="col-6">
                        <img src="" alt="" />
                        <h4>Digital Marketing</h4>
                        <p>That is the simply dummy text the printing and typesetting industry. </p>
                        <h5></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
