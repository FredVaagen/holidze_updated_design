import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { GOOGLE_API } from "../../../constants/api";

const Map = (props) => {
  const longitude = props.lng;
  const latitude = props.lat;
  // Functions from the Google API Maps Docs ->
  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const center = { lat: latitude, lng: longitude };
  const zoom = 11;

  return (
    // Functions from the Google API Maps Docs ->
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => getMapOptions(map, maps)}>
        <Marker
          lat={latitude}
          lng={longitude}
          name={props.address}
          color="#d2122e"
        />
      </GoogleMapReact>

    </div>
  );
};

export default Map;
