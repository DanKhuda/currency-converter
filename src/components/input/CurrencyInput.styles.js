import styled from "styled-components";

export const Form = styled.div`
  position: relative;
  border: 2px solid ${(props) => props.theme.colors.greenPrimary};
  background: ${(props) => props.theme.colors.white};
  border-radius: 1rem;

  @media ${({ theme }) => theme.media.mobileS} {
    margin: 1rem 1rem;
  }

  @media ${({ theme }) => theme.media.laptop} {
    margin: 0 1rem;
  }
`;

export const FormInput = styled.input`
  border: none;
  padding: 2rem 1rem;
  border-radius: 1rem;
  font-size: 1.5rem;

  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.colors.lightGreen};
  }
`;

export const FormSelect = styled.select`
  border: none;
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 400;
  position: absolute;
  right: 1rem;
  top: 2.2rem;
`;
