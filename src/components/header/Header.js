import Rate from "../rate/Rate";
import * as S from "./Header.styles";
import { roundNumber } from "../../utils/helpers/currency.helpers";

const Header = ({ rate, title }) => {
  return (
    <S.Header>
      <S.HeaderContent>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderCurrency>
          <Rate text="US Dollar" currency={roundNumber(1 / rate.USD)} />
          <S.VerticalLine />
          <Rate text="Euro" currency={roundNumber(1 / rate.EUR)} />
        </S.HeaderCurrency>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
