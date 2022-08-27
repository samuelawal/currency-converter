import React from 'react'
// import AppContext from '../context'
import { currencies } from '../currencies'
import { generateCurrenciesOptions } from '../utils'
const CurrencyOption = ({action}) => {
    const currencyName = generateCurrenciesOptions(currencies)
  return (
    <React.Fragment>
        <select onChange={action} className="currency_input" >
            <option value='default'>Select Currency</option>
            {currencyName.map(([currencyCode, currencyName]) => (
                <option value={currencyCode} key={currencyCode}>{currencyCode.toUpperCase()} - {currencyName}</option>
            ))}
        </select>
    </React.Fragment>
  )
}

export default CurrencyOption