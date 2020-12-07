import React,{useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import Current from "./components/Current";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly"
import CustomNavbar from './components/CustomNavbar';


function App() {
  const [cityname, setCityName] = useState("Ranchi");
  
  return (
    <>
      <Router>
        <div>
          <CustomNavbar setCityName={setCityName}/>
          <Route exact path="/" render={()=><Home/>}/>
          <Route path="/current" render={()=><Current cityname={cityname}/>}/>
          <Route path="/daily" render={()=><Daily cityname={cityname}/>}/>
          <Route path="/hourly" render={()=><Hourly cityname={cityname}/>}/>
        </div>
    </Router>
    </>
  );
}

export default App;
