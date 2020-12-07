import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import {Row, Col, Container} from "react-bootstrap";
import loadstyle from "../loader.module.css";

const Hourly = (props) => {
    const [things, setThings] = useState([]);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

        useEffect(()=>{
        setErrorMessage("");
        setLoading(true);
        fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${props.cityname}&key=d049a479f8124db6a7044ed32e8add6d`)
        .then(response=>response.json())
        .then(jsonResponse=>{
            console.log(jsonResponse);
            setLoading(false);
            if(jsonResponse.error)
            setErrorMessage(jsonResponse.error);
            else{
                setCity(jsonResponse.city_name);
                setCountry(jsonResponse.country_code);
                setThings(jsonResponse.data);
            }
        })
        .catch(error=>{
            console.log(error);
            if(error=="TypeError: Failed to fetch")
            setErrorMessage("Network Error");
            else
            setErrorMessage("Place not found");
        })
    },[props.cityname]);
    return(
        errorMessage?(
            <div style={{margin:"3rem auto", color:"red", textAlign:"center"}}>Error: {errorMessage}</div>
        ):(
            // <div className="container">
            <Container>
                <Row>
                    {loading?(
                        <div style={{height:"260px", margin:"0 auto", padding:"5rem"}}>
                            <div className={loadstyle.loader} style={{ border: "16px solid #F4F9FF", borderTop: "16px solid #293251"}}></div>
                        </div>
                    ):(
                        things.map(thing => {
                            return (
                                <Col xs={12} sm={12} md={6} lg={4}>
                                    <WeatherCard temp={thing.temp}                                
                                            date={thing.timestamp_local}
            
                                            description={thing.weather.description}
                                            iconId={thing.weather.icon}
                                            city={city}
                                            country={country}
                                            loading={loading}/>
                                </Col>
                        );
                    })
                
                    )}                
            </Row>
        </Container>            
        )
    );
}

export default Hourly;