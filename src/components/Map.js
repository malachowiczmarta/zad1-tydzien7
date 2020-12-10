import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapUser({ coordinates, name }) {
  const position1 = Number(coordinates.latitude);
  const position2 = Number(coordinates.longitude);
  console.log(position1);
  // const position = [coordinates.latitude, coordinates.longitude];
  const position = [position1, position2];
  console.log(position);
  const { first, last } = name;

  // return (
  //   <div style={{ width: 360, height: 320 }}>
  //     <MapContainer
  //       center={position}
  //       zoom={scale}
  //       style={{ width: 360, height: 320 }}
  //     >
  //       <TileLayer
  //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />

  //       <Marker position={position}>
  //         <Popup>{`${first} ${last}`}</Popup>
  //       </Marker>
  //     </MapContainer>
  //   </div>
  // );

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: 360, height: 320 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{`${first} ${last}`}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapUser;
