import { createContext } from "react";
import { APP_INITIAL_STATE } from "./constants";
const AppContext = createContext({
    ...APP_INITIAL_STATE,
    onSelectedRateChange: () => {},
    onChangeToValue: () => {},
    convertAmount: () => {},
    onAmountChange: () => {},
})
export default AppContext