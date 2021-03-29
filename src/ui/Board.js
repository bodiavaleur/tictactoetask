import styled from "styled-components";

export const Board = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const BoardField = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  font-size: 3rem;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  background: white;
  color: ${({ theme }) => theme.colors.textBlack};
  cursor: pointer;
`;
