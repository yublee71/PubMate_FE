import { SearchBar } from "./searchbar";
import { Section } from "./section";
import { Aside } from "./aside";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: #ffffff;
  color: black;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box;
`;

const StyledDiv = styled.div`
  color: black;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
  flex-grow: 1;
  padding: 0px 10%;
  height: 80%;
`;

export function Main() {
  return (
    <StyledMain>
      <Aside></Aside>
      <StyledDiv>
        <h2>Find pubs in London</h2>
        <SearchBar />
        <Section></Section>
      </StyledDiv>
    </StyledMain>
  );
}
