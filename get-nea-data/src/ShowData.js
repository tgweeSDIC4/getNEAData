import "./ShowData.css";
import GetNEAData from "./GetNEAData"
import DisplayData from "./DisplayData"
import {useState} from "react";


function ShowData (){
    const [psiData, setPsiData]=useState({});
    const [uvData, setUVData]=useState({});
    const [twohourData, settwohourData]=useState({});
    const [twentyfourData, settwentyfourData]=useState({});
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

    function gettwentyfourData(data) {
        settwentyfourData(data);
    }

    function getfourdayData(data) {
        setfourdayData(data);
    }



    
    return(
        <div className="App">
            <u>Show Data Screen</u>
            <br/><br/>

            <GetNEAData dataType="psi" getData={getPsiData}/>
            <GetNEAData dataType="uvindex" getData={getUVData}/>
            <GetNEAData dataType="2hour" getData={gettwohourData}/>
            <GetNEAData dataType="24hour" getData={gettwentyfourData}/>
            <GetNEAData dataType="4day" getData={getfourdayData}/>
            {/* <DisplayData psiData={psiData}/> */}
            {/* <DisplayData uvData={uvData}/> */}
            {/* <DisplayData twohourData={twohourData}/> */}
            <DisplayData twentyfourData={twentyfourData}/>
            {/* <DisplayData fourdayData={fourdayData}/>  */}
        
        </div>
    
    )
}

export default ShowData;