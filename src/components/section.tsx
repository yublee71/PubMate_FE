import styled from "styled-components";
import { Map } from "./map";
import { ListSection } from "./listsection";

const StyledSection = styled.section`
  background-color: #f5f9fc;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useJsApiLoader } from "@react-google-maps/api";

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

export type Pubs = {
  pubs: Pub[];
};

export function Section() {
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
    <StyledSection>
      <Map pubs={pubs}></Map>
      <ListSection pubs={pubs}></ListSection>
    </StyledSection>
  );
}
