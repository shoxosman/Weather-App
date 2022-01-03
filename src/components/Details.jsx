import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import useSound from "use-sound";
const API_KEY="e218b9fde1344226a77164605220101";

const Weather= props =>
{  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
    
    const {Name}= useParams();
    const [location, SetLocation ]=useState(Name);
    const [weather , setWeather]=useState({
        name: location,
        country: 'Iraq',
        localtime: '2021-1-2 4:14',
        icon: '//cdn.weatherapi.com/weather/64x64/day/119.png',
        temp: 8
      })
   console.log(SetLocation);
   const cityName=() =>
   {
       return({Name});
   }
   console.log(cityName());
    const updateWeather= async () =>
    {
        const response= await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`)
        const data = await response.json();
         const newWeather= 
         {
            name : data.location.name ,
        country: data.location.country,
        localtime: data.location.localtime,
        icon: data.current.condition.icon,
        temp: data.current.temp_c
             
         }
         setWeather(newWeather);
    }
    useEffect(() => {
        updateWeather()
    }, [location]);
   return(
<div className="detail">
<div className='weather-detail'>
<h2>{weather.name},{weather.country}</h2>
    <h1>{weather.temp} C°</h1>
    <h3>{weather.localtime}</h3>
    <img src={weather.icon} alt='icon'/>
    <br/>
    <Link to="/"><FaArrowLeft onClick={play()} style={{color:"yellow",fontSize:"3rem"}}/></Link>
    </div>
    </div>
    )
}
export default Weather















