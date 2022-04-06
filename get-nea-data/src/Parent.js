import "./Parent.css";
import GetNEAData from "./GetNEAData"
import DisplayData from "./DisplayData"
import {useState} from "react";


function ShowData (){
    
    const [psiData, setPsiData]=useState({});
    const [uvData, setUVData]=useState({});
    const [twohourData, settwohourData]=useState({});
    const [twentyfourhourData, settwentyfourhourData]=useState({});
    const [fourdayData, setfourdayData]=useState({});
 
    function getPsiData(data) {
        setPsiData(data);
    }

    function getUVData(data) {
        setUVData(data);
    }

    function gettwohourData(data) {
        settwohourData(data);
    }

    function gettwentyfourhourData(data) {
        settwentyfourhourData(data);
    }

    function getfourdayData(data) {
        setfourdayData(data);
    }

    return(
        <div className="App">
            <u>Parent Screen</u>
            <br/><br/>

            <GetNEAData dataType="psi" getData={getPsiData}/>
            <GetNEAData dataType="uvindex" getData={getUVData}/>
            <GetNEAData dataType="2hour" getData={gettwohourData}/>
            <GetNEAData dataType="24hour" getData={gettwentyfourhourData}/>
            <GetNEAData dataType="4day" getData={getfourdayData}/>
            
            {psiData.readings!==undefined ? <DisplayData psiData={psiData}/> : null }
            {uvData.index!==undefined ? <DisplayData uvData={uvData}/> : null }
            {twohourData.forecasts!==undefined ? <DisplayData twohourData={twohourData}/> : null }
            {twentyfourhourData.general!==undefined ? <DisplayData twentyfourhourData={twentyfourhourData}/> : null }
            {fourdayData.forecasts!==undefined ? <DisplayData fourdayData={fourdayData}/> : null }
        
        </div>
    
    )
}

export default ShowData;