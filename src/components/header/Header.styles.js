import styled from "styled-components";

export const Header = styled.header`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  box-shadow: 0px 0px 16px rgba(36, 170, 24, 0.16);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${({ theme }) => theme.media.mobileS} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 auto;
    flex-direction: row;
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: 64rem;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media.mobileS} {
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 1.5rem;
  }
`;

export const HeaderCurrency = styled.div`
  display: flex;

  @media ${({ theme }) => theme.media.mobileS} {
    padding-bottom: 1rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 0;
  }
`;

export const VerticalLine = styled.div`
  border-left: 2px solid ${(props) => props.theme.colors.black};
`;
