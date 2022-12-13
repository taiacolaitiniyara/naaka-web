import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { geocodeByLatLng } from "react-google-places-autocomplete";

export const AddAddressMap = (props) => {
  const apiKey = "AIzaSyBOi8QTpYyNNGAh4Rue0QPYBwz6IOJeEe8";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const [lat, setLat] = useState(
    props.lat === undefined ? -0.532357 : props.lat
  );
  const [lng, setLng] = useState(
    props.lng === undefined ? 166.930775 : props.lng
  );

  const coords = (lat, lng) => {
    setLat(lat);
    setLng(lng);
    props.setLat(lat);
    props.setLng(lng);

    geocodeByLatLng({ lat: lat, lng: lng })
      .then((results) => props.setGpsAddress(results[0].formatted_address))
      .catch((error) => console.error(error));
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: lat, lng: lng }}
      mapContainerClassName="map"
      apiKey={props.apiKey}
      mapContainerStyle={{
        width: `${props.width}%`,
        height: `${props.height}px`,
        borderRadius: "5px",
      }}
    >
      <MarkerF
        onDragEnd={(e) => {
          coords(e.latLng.lat(), e.latLng.lng());
        }}
        position={{ lat: lat, lng: lng }}
        draggable={true}
      />
    </GoogleMap>
  );
};

export const ConnectionsMap = (props) => {
  const apiKey = "AIzaSyBOi8QTpYyNNGAh4Rue0QPYBwz6IOJeEe8";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const [lat, setLat] = useState(
    props.lat === undefined ? -0.532357 : props.lat
  );
  const [lng, setLng] = useState(
    props.lng === undefined ? 166.930775 : props.lng
  );

  const coords = (lat, lng) => {
    setLat(lat);
    setLng(lng);
    props.setLat(lat);
    props.setLng(lng);

    geocodeByLatLng({ lat: lat, lng: lng })
      .then((results) => props.setGpsAddress(results[0].formatted_address))
      .catch((error) => console.error(error));
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <GoogleMap
        zoom={12.5}
        center={{ lat: lat, lng: lng }}
        mapContainerClassName="map"
        apiKey={props.apiKey}
        mapContainerStyle={{
          width: props.width,
          height: props.height,
          borderRadius: "5px",
        }}
      >
        {props.coordsList.map((c, i) => (
          <MarkerF
            key={i}
            onDragEnd={(e) => {
              coords(e.latLng.lat(), e.latLng.lng());
            }}
            position={{ lat: c.YLat, lng: c.XLng }}
            draggable={true}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export const DisplayAddressMap = ({ lat, lng, width, height }) => {
  const apiKey = "AIzaSyBOi8QTpYyNNGAh4Rue0QPYBwz6IOJeEe8";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: lat === null ? 0.0 : lat, lng: lng === null ? 0.0 : lng }}
      apiKey={apiKey}
      mapContainerStyle={{
        width: `${width}%`,
        height: `${height}px`,
        borderRadius: "5px",
      }}
    >
      <MarkerF
        position={{
          lat: lat === null ? 0.0 : lat,
          lng: lng === null ? 0.0 : lng,
        }}
      />
    </GoogleMap>
  );
};
