import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"




const BarSearch = () => {

    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyBbbJP-tRpvj8FoB3Yo6cLPiPPzbxsq2sM"})


    if (!isLoaded) return<div>Loading...</div>
    return (
        <Map/>

    )
}


function Map() {
    return <GoogleMap zoom={10} center={{lat:44, lng:-80}} mapContainerClassName="map-container"></GoogleMap>
}

export default BarSearch