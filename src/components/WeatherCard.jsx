import React, {useState} from "react";
import './weather.css';
import loadstyle from '../loader.module.css';

const WeatherCard = (props) => {

    let date="";

    const img = `icons/${props.iconId}.png`;

    const dateTime = () => {
        let temp="";
        if(props.date.length>10)
        temp = props.date.slice(0,10) + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " + props.date.slice(11,props.date.length);
        console.log(temp);
        date=temp;
    }   

    if(props.date)
    dateTime();

    return(
        <div className="container1">
                    <div className="app-title">
                        {date?(
                            <p>{date}</p>
                        ):props.date?(
                            <p>{props.date}</p>
                        ):(
                            <p>Weather</p>
                        )}
                    </div>
                {props.loading?(
                    <div style={{height:"260px",backgroundColor:"#F4F9FF", padding:"5rem"}}>
                        <div className={loadstyle.loader}></div>
                    </div>
                ):(
                    <>
                    <div className="notification"></div>
                    <div className="weather-container">
                        <div className="weather-icon">
                            {props.iconId?(
                                <img src={img} alt=""/>
                            ):(
                                <img src="icons/unknown.png" alt=""/>
                            )}
                        </div>
                        {props.temp?(
                            <div className="temperature-value">
                                <p> {props.temp} <span>&deg;C</span></p>
                            </div>
                        ):props.minTemp?(
                            <div className="min-max-temp">
                                <p>Low: {props.minTemp} <span>&deg;C</span></p>
                                <p>High: {props.maxTemp} <span>&deg;C</span></p>
                            </div>
                        ):(
                            <div className="temperature-value">
                                <p> - <span>&deg;C</span></p>
                            </div>
                        )}
                        <div className="temperature-description">
                            <p>{props.description}</p>
                        </div>
                        <div className="location">
                            {props.city||props.country?(
                                <p>{props.city},{props.country}</p>
                            ):(
                                <p>-</p> 
                            )}
                        </div>  
                    </div>
                    </>
                )}
            </div>
    );
}

export default WeatherCard;