import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather';
import './weather.css';
const TempApp = () => {
    
    const API_key="695dbfca9754da73f6e7f2c2df34708d";
    

    const[form,setForm]=useState({
        city:"",
        country:""
        
    })

    const[weather,setWeather]=useState([])
    
    const weatherData=async(e)=>{
        e.preventDefault();
        if(form.city==""){
            alert("Please Add Values");
        }
        else{
            const result=await fetch(
                `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_key}`
                )
                const resJson =await result.json();
                console.log(resJson);
                setWeather({data:resJson.main,sys:resJson.sys,name:resJson.name});
        }
    }


    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        if(name=="city"){
            setForm({...form,city:value})
        }
        if(name=="country"){
            setForm({...form,country:value})
        }
        
        console.log(form.city,form.country)

    };
    return (
        <>
        <div className="Weather">
            <h1 className="title">Weather App</h1>
            <br/>
            <form className="weather-check">
                <input type="text" name="city" placeholder="city" onChange={(e)=>handleChange(e)} autoComplete="off"/>
                <input type="text" name="country" placeholder="country" onChange={(e)=>handleChange(e)} autoComplete="off"/>
                <br/>
                <button className="getWeather" onClick={(e)=>weatherData(e)}>Submit</button>
            </form>
        </div>
        {
            weather.data !== undefined ? 
            <div> 
                <DisplayWeather data={weather.data} sys={weather.sys} name={weather.name}/>
            </div>
            
            
            :null
        }
        
        </>
    )
}


export default TempApp
