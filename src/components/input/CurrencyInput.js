import * as S from "./CurrencyInput.styles";

const CurrencyInput = ({ amount, amountChange, currencyChange, currencies, currency }) => {
  return (
    <S.Form>
      <S.FormInput
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => amountChange(e.target.value)}
        onFocus={(e) => (e.target.value === "0" ? e.target.select() : null)}
      />
      <S.FormSelect value={currency} onChange={(e) => currencyChange(e.target.value)}>
        {currencies.map((currency, index) => {
          return (
            <option key={index} value={currency}>
              {currency}
            </option>
          );
        })}
      </S.FormSelect>
    </S.Form>
  );
};

export default CurrencyInput;
