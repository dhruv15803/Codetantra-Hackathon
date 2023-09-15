import React from 'react'
import './ComponentsCss.css/BodyCss.css'

export default function Body(props) {
  return (
    <>
    <div className="parentContainer">
        <div className="container">
            <h1>Welcome to {props.companyName}</h1>
            <p>Scholarships made simple</p>
            <button className="bodyBtn" onClick={()=>window.location = '/userPreferences'}>Looking for scholarships</button>
        </div>
        <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152137337673895966/istockphoto-transformed.jpeg" alt="" />
    </div>
    <div className="popularCountries">
            <h2>Most popular countries</h2>
            <div className="outerContainer">
                <div className="countryItem">
                    <div className="img-div">
                    <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152124137469394964/uk.webp" alt="" />
                    </div>
                    <p>United kingdom</p>
                    <div className="btnDiv">
                    <button className="country-btn" onClick={()=>window.location='/uk'}>See scholarships</button>
                    </div>
                </div>
                <div className="countryItem">
                    <div className="img-div">
                    <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152123837635383317/usa.jpg" alt="" />
                    </div>
                    <p>United states</p>
                    <div className="btnDiv">
                    <button className="country-btn" onClick={()=>window.location='/us'}>See scholarships</button>
                    </div>
                </div>
                <div className="countryItem">
                    <div className="img-div">
                    <img src="https://cdn.discordapp.com/attachments/1151781933748064337/1152123501688393768/canada.jpg" alt="" />
                    </div>
                    <p>Canada</p>
                    <div className="btnDiv">
                    <button className="country-btn" onClick={()=>window.location='/Canada'}>See scholarships</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
