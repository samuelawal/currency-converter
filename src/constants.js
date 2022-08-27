export const END_POINT = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';
export const APP_INITIAL_STATE = {
    loading: false,
    selectedFromCurrency: 'usd',
    totalRate: 0,
    amount: 1,
    optionsType: ('from' | 'to'),
    selectedToCurrency: '',
    rates: {},
    loadingText: '',
}
export const RESET_LOADING = 'RESET_LOADING';
export const SET_TOTAL_RATES = 'SET_TOTAL_RATES'
export const SET_AMOUNT = 'SET_AMOUNT'
export const SET_SELECTED_FROM_CURRENCY = 'SET_SELECTED_FROM_CURRENCY';
export const SET_SELECTED_TO_CURRENCY = 'SET_SELECTED_TO_CURRENCY';
export const SET_LOADING = 'SET_LOADING';
export const SET_RATES = 'SET_RATES';
export const RESET_RATES = 'RESET_RATES';
