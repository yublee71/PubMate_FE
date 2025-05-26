import { SideBar } from "./sidebar";
import { Profiles } from "./profiles";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #151b29;
  color: white;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  height: 3rem;
  width: 100vw;
  box-sizing: border-box;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 5%;
  align-items: center;
`;

export function Header(props: { logo: string; title: string }) {
  let { logo, title } = props;
  return (
    <StyledHeader>
      <SideBar />
      <StyledHeaderContent>
        <h1>
          <a href="/">
            <span className="emoji">{logo}</span> {title}
          </a>
        </h1>
        <Profiles />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
