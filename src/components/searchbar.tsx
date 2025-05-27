import styled from "styled-components";

const StyledForm = styled.form`
  background-color: white;
  border-radius: 15px;
  height: 40px;
  min-width: 3rem;
  width: 80%;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
`;

const StyledButton = styled.button`
  background-color: #ffffff;
  border: 0px;
  height: 70%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {}

export function SearchBar() {
  return (
    <StyledForm action="submit" onSubmit={handleSubmit}>
      <StyledInput placeholder="Post Code or Town"></StyledInput>
      <StyledButton>
        <img
          src="/src/assets/search-icon.png"
          alt="search icon"
          height="100%"
        />
      </StyledButton>
    </StyledForm>
  );
}
