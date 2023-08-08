import React from "react";
import { View } from "react-native";
import MapView from 'react-native-maps';
import mapStyles from "./styles";

const MapTracker = () => {
    return (
        <View style={mapStyles.container}>
            <MapView
                style={mapStyles.mapView}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

export default MapTracker;