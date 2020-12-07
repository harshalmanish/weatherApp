import React, { useEffect, useState } from 'react';
import './weather.css';
import './font/Rimouski.css';
import WeatherCard from "./WeatherCard";

const Current = (props) => {  

    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState("");
    const [iconId, seticonId] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    
    
        useEffect(()=>{
            setErrorMessage("");
            console.log(props.cityname);
            setLoading(true);
            const url = `https://api.weatherbit.io/v2.0/current?city=${props.cityname}&key=d049a479f8124db6a7044ed32e8add6d`;
    
                fetch(url)
                .then(response=>response.json())
                .then(jsonResponse=>{
                    setLoading(false);
                    console.log(jsonResponse);
                    if(jsonResponse.error)
                    setErrorMessage(jsonResponse.error);
                    else{
                        setTemp(jsonResponse.data[0].temp);
                        setDescription(jsonResponse.data[0].weather.description);
                        seticonId(jsonResponse.data[0].weather.icon);
                        setCity(jsonResponse.data[0].city_name);
                        setCountry(jsonResponse.data[0].country_code);
                    }
                })
                .catch(error=>{
                    console.log(error);
                    if(error=="TypeError: Failed to fetch")
                    setErrorMessage("Network Error");
                    else
                    setErrorMessage("Place not found");
                })
        },[props.cityname])       

    return(
        <>
        {errorMessage?(
            <div style={{margin:"3rem auto", color:"red", textAlign:"center"}}>Error: {errorMessage}</div>
        ):(
            <WeatherCard temp={temp}
                             description={description}
                             iconId={iconId}
                             city={city}
                             country={country}
                             loading={loading}/>
        )}
        </>
    );
}

export default Current;