import React from 'react'
import './weather.css'
function DisplayWeather(props) {
    const {data}=props;
    const {sys}=props;
    const {name}=props;
    console.log(data);
    console.log(sys);
    
    return (
        <div className="displayweather">
            <div>
            <h3>Location:{name},{sys.country}</h3>
            <h3>Temperature:{data.temp} K</h3>
            <h5>Maximum Temperature:{data.temp_max} K</h5>
            <h5>Minimum Temperature:{data.temp_min} K</h5>
            <h5>Pressure:{data.pressure} | Humidity:{data.humidity}</h5> 
            </div>
            
        </div>
    )
}
export default DisplayWeather;