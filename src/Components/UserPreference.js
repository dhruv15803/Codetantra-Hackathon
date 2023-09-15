import React, { useState } from 'react'
import './ComponentsCss/UserPreferenceCss.css'
import CountryScholarships from './CountryScholarships';


export default function UserPreference() {

  const [submitted,setSubmitted] = useState(false);

  const [formData,setFormData] = useState({
    "location":"UK",
  });

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [name]:value,
      }
    })
  }

  console.log(formData);

  const findScholarships = (event)=>{
    event.preventDefault();
    console.log(formData);
    setSubmitted(true);
    console.log(submitted);
  }

  return (
    <>
    <div className="user-preference-container" onSubmit={findScholarships}>
    <div className="user-preference-text">
        <h1>Choose your preferred scholarship</h1>
        <p>Enter your desired location and degree</p>
    </div>
    {/* onSubmit={findScholarships} */}
    {submitted===false && <form id='user-preference-form'>
        <select value={formData.name} onChange={handleChange} name="location" id="location-drop-down" className='drop-down'>
            <option value="UK">United kindom</option>
            <option value="USA">United states</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Singapore">Singapore</option>
            <option value="Australia">Australia</option>
        </select>
        {/* <select value={formData.name} onChange={handleChange} name="degrees" id="degrees-drop-down" className='drop-down'>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="Phd">Phd</option>
            <option value="Course">Course</option>
        </select> */}
        <button className="user-preference-btn">Find</button>
    </form>}
    <div>
      {submitted && <button className='user-preference-btn' onClick={()=>window.location.reload()}>Change</button>}
      {/* {submitted && <button className="user-preference-btn" onClick={clearApplied}>Clear applied</button>}
       */}
    </div>
    {submitted && <CountryScholarships country={formData.location}/>}
    </div>
    </>
  )
}
