import styled from "styled-components";
import { List } from "./list";

const StyledDiv = styled.div`
  height: 80%;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

import type { Pubs } from "./section";

export function ListSection({ pubs }: Pubs) {
  return (
    <StyledDiv>
      {pubs.map((pub, i) => (
        <List pubIndex={i + 1} pubName={pub.pub_name} pubInfo="dummy text" />
      ))}
    </StyledDiv>
  );
}
