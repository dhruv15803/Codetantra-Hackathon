import React, { useEffect, useState } from 'react'
import './ComponentsCss.css/CountryScholarshipsCss.css'
import data from '../data/scholarships.js'

export default function CountryScholarships(props) {

    const [scholarships,setScholarships] = useState([]);
    useEffect(()=>{
        for(let i=0;i<data.length;i++){
            if(data[i].location===props.country){
                setScholarships(prevScholarships=>[...prevScholarships,data[i]]);
            }
        }
    },[props.country]);

    console.log(scholarships);

  return (
    <>
    <div className="country-scholarships-parentContainer">
        {scholarships.map((item)=>{
            return <div className="country-scholarships-Container">
            <h2>{item.title}</h2>
            <p>{item.degrees}</p>
            <p>{item.funds}</p>
            <p>{item.date}</p>
            <p>{item.location}</p>
        </div>
        })}
    </div>
    </>
  )
}
