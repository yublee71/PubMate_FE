import styled from "styled-components";
import { List } from "./list";

const StyledDiv = styled.div`
  height: 80%;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export function ListSection() {
  return (
    <StyledDiv>
      <List
        pubIndex="A"
        pubName="pub A"
        pubInfo="£4 for a pint of Guiness"
      ></List>
      <List
        pubIndex="B"
        pubName="pub B"
        pubInfo="£5.5 for a pint of Neckoil"
      ></List>
    </StyledDiv>
  );
}
