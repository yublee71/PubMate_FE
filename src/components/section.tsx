import styled from "styled-components";
import { Map } from "./map";
import { ListSection } from "./listsection";

const StyledSection = styled.section`
  background-color: #f5f9fc;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export function Section() {
  return (
    <StyledSection>
      <Map></Map>
      <ListSection></ListSection>
    </StyledSection>
  );
}
