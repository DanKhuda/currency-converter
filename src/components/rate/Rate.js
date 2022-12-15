import * as S from "./Rate.styles";

const Rate = ({ currency, text }) => {
  return (
    <S.Rate>
      <S.RateTitle>{text}</S.RateTitle>
      <S.RateValue>{currency}</S.RateValue>
    </S.Rate>
  );
};

export default Rate;
