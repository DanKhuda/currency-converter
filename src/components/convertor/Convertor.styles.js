import styled from "styled-components";

export const Convertor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const ConvertorContent = styled.div`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 16px rgba(36, 170, 24, 0.16);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.media.mobileS} {
    width: 95%;
    height: 95%;
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: auto;
    height: 50%;
  }
`;

export const ConvertorTitle = styled.h2`
  text-transform: uppercase;
`;

export const ConvertorInputs = styled.div`
  display: flex;

  @media ${({ theme }) => theme.media.mobileS} {
    flex-direction: column;
    padding: 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    padding: 1rem;
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 2rem;
  }
`;
