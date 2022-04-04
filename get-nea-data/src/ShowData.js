import "./ShowData.css";
import GetNEAData from "./GetNEAData"
import {useEffect,useState} from "react";


function ShowData (){
    const [neaData, setData]=useState({});

    function getData(data) {
        setData(data);
      
    }
    
    return(
        <div className="App">
            <u>Show Data Screen</u>
            <GetNEAData dataType="24hour" getData={getData}/>
            <br/><br/>   
            {/* Forecast: {neaData.general.forecast} */}
                   
            <br/>
        </div>
    
    )
}

export default ShowData;