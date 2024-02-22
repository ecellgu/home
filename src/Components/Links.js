import React from 'react'
import twitter from "../Assets/twitter.svg"
import insta from "../Assets/insta.svg"
import facebook from "../Assets/facebook.svg"
import linkedin from "../Assets/linkedin.svg"

const Links = ({direction}) => {
    return (
        <div className={`flex ${direction} justify-between gap-y-6 mt-16  ${direction==="row" ? "gap-x-6" : ""}`}>
            <a href="https://twitter.com/ecellgu?s=20&t=vFxkKJJOyuDxqgjbNkXRrQ
            " target="_blank"  rel="noreferrer">
                <img src={twitter} alt="twitter" className='w-5' />
            </a>
            <a href="https://www.instagram.com/ecellgu/" target="_blank"  rel="noreferrer">
                <img src={insta} alt="insta" className='w-5' />
            </a>
            <a href="https://www.facebook.com/ecellgu " target="_blank"  rel="noreferrer">
                <img src={facebook} alt="facebook" className='w-5' />
            </a>
            <a href="https://www.linkedin.com/company/iicgu/ 
            " target="_blank"  rel="noreferrer">
                <img src={linkedin} alt="linkedin" className='w-5' />
            </a>
        </div>
    )
}

export default Links