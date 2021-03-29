import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  font-family: "Josefin Sans", sans-serif;
  color: ${({ theme }) => theme.colors.textOrange};
`;

export const TextOptional = styled.p`
  font-size: 0.9rem;
  text-align: center;
  font-family: "Lato", sans-serif;
  color: ${({ theme }) => theme.colors.textTransparent};
`;
