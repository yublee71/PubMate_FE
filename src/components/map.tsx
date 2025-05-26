import styled from "styled-components";

const StyledMap = styled.div`
  background-color: lightgrey;
  height: 80%;
  width: 45%;
`;

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

type Pub = {
  id: number;
  pub_name: string;
  address: string;
  lat: number;
  lng: number;
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.5074,
  lng: -0.1278, // London
};

export function Map() {
  const [pubs, setPubs] = useState<Pub[]>([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("pubs").select("*");
      if (!data) return;

      const pubsWithLatLng: Pub[] = [];

      for (const pub of data) {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            pub.address
          )}&key=${GOOGLE_MAPS_API_KEY}`
        );
        const json = await res.json();
        const location = json.results[0]?.geometry?.location;

        if (location) {
          pubsWithLatLng.push({
            ...pub,
            lat: location.lat,
            lng: location.lng,
          });
        }
      }

      setPubs(pubsWithLatLng);
    };

    fetchData();
  }, []);

  if (!isLoaded) return <div>Loading map...</div>;

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
