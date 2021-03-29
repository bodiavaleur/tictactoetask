import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  width: 9rem;
  height: 4rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.border};
  font-size: 1.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  background: white;
  color: ${({ theme }) => theme.colors.textBlack};
  cursor: pointer;
`;

export const ButtonRadio = styled(Button).attrs({ as: "label" })`
  input {
    display: none;
  }

  ${({ selected, theme }) =>
    selected &&
    `
    background: ${theme.colors.selected};
    color: white;
    border: none;
  `}
`;

export const ButtonLink = styled(Button).attrs({ as: Link })`
  text-decoration: none;
`;
