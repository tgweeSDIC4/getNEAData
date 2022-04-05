import { useEffect } from "react"


function DisplayData(props){

    console.log("Display data: ",props)
    return(
        <div className="App">
            Display Data screen
         
            <br/><br/>
            {/* PSI: {props.psiData.readings.psi_twenty_four_hourly.national} */}
            {/* UV Index: {props.uvData.value} */}
            {/* 2 hour: {props.forecasts[0].area} {props.forecasts[0].forecast} */}
            {/* 24 hour Forecast: {props.twentyfourData.general.forecast} */}
            {/* 4 Days: {props.fourdayData[0].forecast} */}
        </div>
    )
}

export default DisplayData