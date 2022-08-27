import  { useCallback, useEffect, useReducer } from "react";
import * as API from "../api";
import AppReducer from "../reducer";
import { APP_INITIAL_STATE, RESET_LOADING, SET_LOADING, SET_SELECTED_FROM_CURRENCY, SET_RATES, SET_SELECTED_TO_CURRENCY, SET_AMOUNT, SET_TOTAL_RATES } from "../constants";

export default function DataWrapper({render}) {
  const {state, onSelectedRateChange, onChangeToValue , convertAmount, onAmountChange} = useLocalState();
  const contextData = {
    ...state,
    onSelectedRateChange,
    onChangeToValue,
    convertAmount,
    onAmountChange
  }
  return render(contextData)
}

const useLocalState = () => {
  const [state, dispatch] = useReducer(AppReducer, APP_INITIAL_STATE);
  const {selectedFromCurrency, rates, selectedToCurrency, amount} = state
  
  const onSelectedRateChange = (e) => {
    dispatch({type: SET_SELECTED_FROM_CURRENCY, value: e.target.value}) 
  }
  const onChangeToValue = (e) => {
    dispatch({type: SET_SELECTED_TO_CURRENCY, value: e.target.value})
  }
  const onAmountChange = (e) => {
    dispatch({type: SET_AMOUNT, value: e.target.value})
  }
  const convertAmount = () => {
    const amountRate = rates[selectedFromCurrency][selectedToCurrency]
    const myAmount = amountRate * amount
    let internationalNumber  = new Intl.NumberFormat('en-US')
    const data = internationalNumber.format(myAmount.toFixed())
    dispatch({type: SET_TOTAL_RATES, value: data})
    console.log(state)
  }
  useEffect( 
    useCallback(
      () => {
      const setRates = async () => {
        dispatch({ type: SET_LOADING, value: true, text: "Fetching rates..." });
          try {
            const rates = await API.fetchRates(selectedFromCurrency);
      
            dispatch({type: SET_RATES, key:selectedFromCurrency, rates: rates})
            // console.log(state)
          } catch (error) {
            window.alert(error.message);
          } finally{
            dispatch({type: RESET_LOADING})
          }
        }
      if(selectedFromCurrency !== null && selectedFromCurrency !== 'default') setRates()
    }, [dispatch, state]),
    [selectedFromCurrency]
    )
  return {
    state,
    onSelectedRateChange,
    onChangeToValue,
    convertAmount,
    onAmountChange
  }
};


