import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
  height: 60px;
  padding: 20px;
`;

export function List(props: { name: string }) {
  let { name } = props;
  return <StyledDiv>{name}</StyledDiv>;
}
