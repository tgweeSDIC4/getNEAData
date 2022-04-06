
function DisplayData(props){

    console.log("Display data: ",props)
    return(
        <div className="App">
            <u>Display Data screen</u>
            <br/>
            {props.psiData!==undefined ? "PSI: "+(props.psiData.readings.psi_twenty_four_hourly.national) : null }
            {props.uvData!==undefined ? "UV Index: "+(props.uvData.index[0].value) : null }
            {props.twohourData!==undefined ?  "2 hour: "+(props.twohourData.forecasts[0].area) : null }
            {props.twentyfourhourData!==undefined ? "24 hour Forecast: "+(props.twentyfourhourData.general.forecast)  : null }
            {props.fourdayData!==undefined ? "4 Days: "+(props.fourdayData.forecasts[0].forecast) : null }

        </div>
    )
}

export default DisplayData