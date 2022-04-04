import './GetNEAData.css';
import axios from 'axios';
import {useEffect, useState} from "react";

const API = axios.create({
  baseURL: "https://api.data.gov.sg/v1/environment",
});

const twentyfourhrData="/24-hour-weather-forecast";
const psiData="/psi";
const uvIndex="/uv-index";
const twohrData="/2-hour-weather-forecast";
const fourdayData="/4-day-weather-forecast";


function GetNEAData() {

  const [neaData,setNeaData]=useState([]);
 

  useEffect(()=>{
    findNEAData();
     return;
  },[])

  async function findNEAData() {
    let nowTime = new Date().toISOString().slice(0, -5);
    const response = await API.get(fourdayData,{
      params: {
        date: [nowTime],
      }
  })
  
    if (response.status===200){
      // let data={defaultState}

      //psi 
      // console.log(response.data.items[0]);

      // console.log(response.data.items[0].readings);
      // console.log(response.data.items[0].readings.psi_twenty_four_hourly);
      // console.log(response.data.items[0].readings.psi_twenty_four_hourly.national);
      // console.log(response.data.items[0].readings.pm25_twenty_four_hourly.national);

      //UV index
      // console.log(response.data.items[0]);
      // console.log(response.data.items[0].index[0]);
      // console.log(response.data.items[0].index[0].value);

      //2 hour weather
      //  console.log(response.data.items[0]);

      // console.log(response.data.items[0]);
      // console.log(response.data.items[0].forecasts);

      // 4 day weather
      // console.log("4 Days:",response.data.items[0]);

      // console.log(response.data.items[0].forecasts[0].forecast);
      // console.log(response.data.items[0].forecasts[0].temperature);
      // console.log(response.data.items[0].forecasts[0].relative_humidity);
      // console.log(response.data.items[0].forecasts[0].wind);
      
      // 24 hours weather
      // console.log("24 Hours:",response.data.items[0]);
     
      
        // data.forecast=response.data.items[0].general.forecast;
        // data.relative_humidity=response.data.items[0].general.relative_humidity;
        // data.temperature=response.data.items[0].general.temperature

  
      let data={...response.data.items[0]};
      console.log(data)
      // setNeaData(data)
    
        
    }
  }

  return (
    <div className="App">
      <u>NEA Data Retrieval component</u>
      <br/><br/>
   
    </div>
  );
}

export default GetNEAData;
