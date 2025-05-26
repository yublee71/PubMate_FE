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
      <List name="A"></List>
      <List name="B"></List>
    </StyledDiv>
  );
}
