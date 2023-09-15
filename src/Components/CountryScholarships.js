import React, { useEffect, useState } from 'react'
import './ComponentsCss/CountryScholarshipsCss.css'
import data from '../data/scholarships.js'

export default function CountryScholarships(props) {

    let appliedScholarships = JSON.parse(localStorage.getItem('appliedScholarships'));
    if(appliedScholarships===null){
        appliedScholarships = [];
    }
    const [applied,setApplied] = useState(appliedScholarships);

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
            for(let i=0;i<applied.length;i++){
                if((applied[i].title===scholarships[index].title) && (applied[i].location === scholarships[index].location) ){
                    return;
                }
            }
            setApplied(prevApplied=>[...prevApplied,scholarships[index]]);
        }
        else{
            console.log('not applied');
        }
    }

    useEffect(()=>{
        localStorage.setItem('appliedScholarships',JSON.stringify(applied));
    },[applied]);


  return (
    <>
    <div className="country-scholarships-parentContainer">
        <button className="country-scholarship-btn" onClick={()=>window.location='/Applied'}>{`Applied scholarships (${applied.length})`}</button>
        {scholarships.map((item,index)=>{
            return <div className="country-scholarships-Container">
            <div className="scholarship-div">
                <i className="fa-solid fa-building-columns"></i>
                <h2>{item.title}</h2>
            </div>
            <div className="scholarship-div">
                <i className="fa-solid fa-scroll"></i>
                <p>{`Degrees offered: ${item.degrees}`}</p>
            </div>
            <div className="scholarship-div">
                <i className="fa-solid fa-sack-dollar"></i>
                <p>{`${item.funds}`}</p>
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

