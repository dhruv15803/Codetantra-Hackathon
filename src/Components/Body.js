import React from 'react'
import './ComponentsCss.css/BodyCss.css'

export default function Body(props) {
  return (
    <>
    <div className="parentContainer">
        <div className="container">
            <h1>Welcome to {props.companyName}</h1>
            <p>Find the scholarships according to your country,Degree and much more</p>
            <button className="bodyBtn">Looking for scholarships</button>
        </div>
        <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152137337673895966/istockphoto-transformed.jpeg" alt="" />
    </div>
    <div className="popularCountries">
            <h2>Most popular countries</h2>
            <div className="outerContainer">
                <div className="countryItem">
                    <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152124137469394964/uk.webp" alt="" />
                    <p>United kingdom</p>
                    <button className="country-btn" onClick={()=>window.location='/uk'}>See scholarships</button>
                </div>
                <div className="countryItem">
                    <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152123837635383317/usa.jpg" alt="" />
                    <p>United states</p>
                    <button className="country-btn" onClick={()=>window.location='/us'}>See scholarships</button>
                </div>
                <div className="countryItem">
                    <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152123501688393768/canada.jpg" alt="" />
                    <p>Canada</p>
                    <button className="country-btn" onClick={()=>window.location='/Canada'}>See scholarships</button>
                </div>
            </div>
        </div>
    </>
  )
}
