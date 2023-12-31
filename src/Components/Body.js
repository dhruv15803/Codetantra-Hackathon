import React from 'react'
import './ComponentsCss/BodyCss.css'

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
        {/* <div>
        <h1 class="faq-heading">FAQ'S</h1>
        <section class="faq-container"/>
            <div class="faq-one">

                <h1 class="faq-page">Do I have to pay to access scholarship information on this website?</h1>
                <div class="faq-body">
                    <p>No, our scholarship search platform is completely free for students. You can access all scholarship information without any charges.</p>
                </div>
            </div>
            <hr class="hr-line"/>
            <div class="faq-two">

                <h1 class="faq-page">How often is scholarship information updated on this website?</h1>
                <div class="faq-body">
                    <p>LWe strive to keep our database up-to-date. Scholarship information is reviewed and updated regularly, but it's essential to check the deadlines and requirements on the official scholarship provider's website.</p>
                </div>
            </div>
            <hr class="hr-line"/>
            <div class="faq-three">
            <h1 class="faq-page">Does it improves the user experience of a website?</h1>
                <div class="faq-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                        necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                        aperiam.
                        Perspiciatis, porro!</p>
                </div>
            </div>
        </div> */}
    </>
  )
}
