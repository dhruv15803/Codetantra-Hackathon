import React from 'react'
import './ComponentsCss/AppliedCss.css'
export default function AppliedScholarships() {

    const appliedScholarships = JSON.parse(localStorage.getItem('appliedScholarships'));

    


  return (
    <>
    <div className="appliedContainer">
            <h2>Your applied scholarships</h2>
            <div>
                <button className="user-preference-btn" onClick={()=>window.location='/userPreferences'}>Apply for more</button>
                <button className="user-preference-btn" onClick={clearApplied}>Clear applied</button>
            </div>
            {appliedScholarships.length!==0 && appliedScholarships.map((item)=>{
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
