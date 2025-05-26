import { Map } from "./map";
import { SearchBar } from "./searchbar";
import { Section } from "./section";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: #ffffff;
  color: black;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  height: 3rem;
  width: 100vw;
  box-sizing: border-box;
`;
export function Main() {
  return (
    <StyledMain>
      <h2>Find pubs in London</h2>
      <SearchBar />
      <Section></Section>
    </StyledMain>
  );
}
