import React, { useEffect, useState } from 'react'
import './ComponentsCss.css/CountryScholarshipsCss.css'
import data from '../data/scholarships.js'

export default function CountryScholarships(props) {

    const appliedScholarships = JSON.parse(localStorage.getItem('appliedScholarships'));
    const [applied,setApplied] = useState(appliedScholarships);

    console.log(applied);

    const [scholarships,setScholarships] = useState([]);
    useEffect(()=>{
        for(let i=0;i<data.length;i++){
            if(data[i].location===props.country){
                setScholarships(prevScholarships=>[...prevScholarships,data[i]]);
            }
        }
    },[props.country]);

    const applyForScholarship = (index)=>{
        let confirmation = prompt("Type 'APPLY' to confirm")
        if(confirmation==='APPLY'){
            setApplied(prevApplied=>[...prevApplied,scholarships[index]]);
        }
        else{
            console.log('not applied')
        }
    }

    useEffect(()=>{
        localStorage.setItem('appliedScholarships',JSON.stringify(applied));
    },[applied]);

  return (
    <>
    <div className="country-scholarships-parentContainer">
        {scholarships.map((item,index)=>{
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
            <button className="country-scholarships-button" onClick={()=>applyForScholarship(index)}>Apply</button>
        </div>
        })}
    </div>
    </>
  )
}

