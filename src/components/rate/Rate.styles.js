import styled from "styled-components";

export const Rate = styled.div`
  display: flex;
  margin: 0 1rem;
  flex-direction: column;
`;

export const RateTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey};
`;

export const RateValue = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.greenPrimary};
`;
