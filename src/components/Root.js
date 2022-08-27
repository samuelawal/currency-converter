import React, { useContext } from "react";
import AppContext from "../context";
import CurrencyOption from "./CurrencyOption";
function Root() {
  const {
    onSelectedRateChange,
    onChangeToValue,
    convertAmount,
    onAmountChange,
    totalRate,
  } = useContext(AppContext);
  return (
    <div className="container">
      <h1 className="title">Currency Converter</h1>
      <div className="total_amount">{totalRate}</div>
      <div className="form_container">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          required
          onChange={onAmountChange}
          className="input_amount"
        />
        <div className="options">
          <div>
            <label className="amount_from">From</label>
            <CurrencyOption action={onSelectedRateChange} />
          </div>
          <div>
            <label className="amount_to">To</label>
            <CurrencyOption action={onChangeToValue} />
          </div>
        </div>
        <button type="submit" onClick={convertAmount}>
          CONVERT
        </button>
      </div>
    </div>
  );
}
export default Root;
