import { SET_LOADING, RESET_LOADING, SET_RATES, RESET_RATES, SET_SELECTED_FROM_CURRENCY, SET_SELECTED_TO_CURRENCY, SET_AMOUNT , SET_TOTAL_RATES} from "./constants";
const AppReducer = (state, action) => {
    switch(action.type) {
        case SET_LOADING: 
        return {...state, loading: action.value, loadingText: action.text};
        case SET_TOTAL_RATES:
        return {...state, totalRate: action.value}
        case SET_AMOUNT:
        return {...state, amount: action.value}
        case RESET_LOADING:
        return {...state, loading: false, loadingText: action.text};
        case SET_SELECTED_FROM_CURRENCY:
        return {...state, selectedFromCurrency: action.value};
        case SET_SELECTED_TO_CURRENCY:
        return {...state, selectedToCurrency: action.value}
        case SET_RATES:
        return {...state, rates: {...state.rates, [action.key]:  action.rates}};
        case RESET_RATES:
        return{
            ...state,
            loading: false,
            loadingText: null
        }
        default:
            return state
    }
}


export default AppReducer