import React, { useEffect, useState } from 'react';

const style = {
    width: "75%",
	margin: "0 auto",
	padding: "30px",
	color: "white",
}

const SearchBar = (props) => {

    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleClick = e => {
        e.preventDefault();
        props.cityname(value);
    }


    return(
        <div id="searchDiv" className="bg-dark" style={style}>
            <h1 style={{textAlign:"center", marginBottom:"20px"}}>Search for any city</h1>
            <div className="input-group mb-3">
                  {/* <from> */}
                  <input   
                    type="text" 
                    className="form-control"
                    placeholder="Search" 
                    aria-label="Username" 
                    aria-describedby="basic-addon1" id="movieInput"
                    onChange={handleChange}/>
                    <input type="button" value="Search" className="btn btn-primary" onClick={handleClick}></input>
                  {/* </from> */}
            </div>
	    </div>
    );
}

export default SearchBar;