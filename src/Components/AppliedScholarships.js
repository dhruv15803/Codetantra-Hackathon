import React, { useState } from 'react'
import './ComponentsCss/AppliedCss.css'
export default function AppliedScholarships() {

    const appliedScholarships = JSON.parse(localStorage.getItem('appliedScholarships'));
    const [applied,setApplied] = useState(appliedScholarships);

    console.log(applied);

    const clearCart = ()=>{
        setApplied([]);
    }

    return (
    <>
    <div className="appliedContainer">
            <h1>Your applied scholarships</h1>
            {applied.length===0 && <div className='not-applied'>
                <p>You have not applied to any scholarships</p>
                <button className="user-preference-btn" onClick={()=>window.location='/userPreferences'}>Apply</button>                
                </div>}
            {applied.length!==0 && <div>
                <button className="user-preference-btn" onClick={()=>window.location='/userPreferences'}>Apply for more</button>
                <button className="user-preference-btn" onClick={clearCart}>Clear applied</button>
            </div>}
            {applied.length!==0 && applied.map((item)=>{
                 return <div className="country-scholarships-Container">
                 <div className="scholarship-div">
                     <i className="fa-solid fa-building-columns" id='scholarshipId'></i>
                     <h2>{item.title}</h2>
                 </div>
                 <div className="scholarship-div">
                     <i className="fa-solid fa-scroll"></i>
                     <p>{`Degrees offered: ${item.degrees}`}</p>
                 </div>
                 <div className="scholarship-div">
                     <i className="fa-solid fa-sack-dollar"></i>
                     <p>{item.funds}</p>
                 </div>
                 <div className='scholarship-div'>
                     <i className="fa-solid fa-calendar-days"></i>
                     <p>{`Available till: ${item.date}`}</p>
                 </div>
                 <div className='scholarship-div'>
                     <i className="fa-solid fa-location-dot"></i>
                     <p>{`Country:- ${item.location}`}</p>
                 </div>
                </div>
            })}
        </div>
    </>
  )
}
