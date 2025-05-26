import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MapIndex = styled.div`
  background-color: #16033d;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 48px;
`;

export function List(props: {
  pubIndex: string;
  pubName: string;
  pubInfo: string;
}) {
  let { pubIndex, pubName, pubInfo } = props;
  return (
    <StyledDiv>
      <MapIndex>{pubIndex}</MapIndex>
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "bold" }}>{pubName}</div>
        <div style={{ fontSize: "12px" }}>{pubInfo}</div>
      </div>
    </StyledDiv>
  );
}
