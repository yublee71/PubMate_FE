import { GoogleMap, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const StyledMap = styled.div`
  background-color: lightgrey;
  height: 80%;
  width: 45%;
`;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.5074,
  lng: -0.1278, // London
};

import type { Pubs } from "./section";

export function Map({ pubs }: Pubs) {
  return (
    <StyledMap>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {pubs.map((pub) => (
          <Marker
            key={pub.id}
            position={{ lat: pub.lat, lng: pub.lng }}
            title={pub.pub_name}
          />
        ))}
      </GoogleMap>
    </StyledMap>
  );
}
