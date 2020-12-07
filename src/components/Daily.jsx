import React, { useState,useEffect } from "react";
import WeatherCard from "./WeatherCard";
import loadstyle from "../loader.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Daily = (props) => {
    
    const [things, setThings] = useState([]);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        setErrorMessage("");
        setLoading(true);
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${props.cityname}&days=7&key=d049a479f8124db6a7044ed32e8add6d`)
        .then(response=>response.json())
        .then(jsonResponse=>{
            setLoading(false);
            if(jsonResponse.error)
            setErrorMessage(jsonResponse.error);
            else{
                console.log(jsonResponse);
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
                                    <WeatherCard minTemp={thing.min_temp}
                                            maxTemp={thing.max_temp}
                                            date={thing.datetime}
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

export default Daily;