import { useState } from "react";
import CurrencyInput from "../input/CurrencyInput";
import { validateData } from "../../utils/helpers/validation.helpers";
import { roundNumber } from "../../utils/helpers/currency.helpers";
import * as S from "./Convertor.styles";

const Convertor = ({ rate, title }) => {
  const [amountLeft, setAmountLeft] = useState(0);
  const [amountRight, setAmountRight] = useState(0);
  const [currencyLeft, setCurrencyLeft] = useState("USD");
  const [currencyRight, setCurrencyRight] = useState("EUR");

  const handleChangeCurrencyLeft = (currencyLeft) => {
    setAmountLeft(roundNumber(amountRight * (rate[currencyLeft] / rate[currencyRight])));
    setCurrencyLeft(currencyLeft);
  };

  const handleChangeCurrencyRight = (currencyRight) => {
    setAmountRight(roundNumber(amountLeft * (rate[currencyRight] / rate[currencyLeft])));
    setCurrencyRight(currencyRight);
  };

  const handleChangeLeftAmount = (amountLeft) => {
    if (validateData(amountLeft)) {
      setAmountRight(roundNumber(amountLeft * (rate[currencyRight] / rate[currencyLeft])));
      setAmountLeft(amountLeft);
    }
  };

  const handleChangeRightAmount = (amountRight) => {
    if (validateData(amountRight)) {
      setAmountLeft(roundNumber(amountRight * (rate[currencyLeft] / rate[currencyRight])));
      setAmountRight(amountRight);
    }
  };

  return (
    <S.Convertor>
      <S.ConvertorContent>
        <S.ConvertorTitle>{title}</S.ConvertorTitle>
        <S.ConvertorInputs>
          <CurrencyInput
            amountChange={handleChangeLeftAmount}
            currencyChange={handleChangeCurrencyLeft}
            currencies={Object.keys(rate)}
            amount={amountLeft}
            currency={currencyLeft}
          />
          <CurrencyInput
            amount={amountRight}
            amountChange={handleChangeRightAmount}
            currencyChange={handleChangeCurrencyRight}
            currencies={Object.keys(rate)}
            currency={currencyRight}
          />
        </S.ConvertorInputs>
      </S.ConvertorContent>
    </S.Convertor>
  );
};

export default Convertor;
