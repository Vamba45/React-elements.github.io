import React from 'react';
import './Converter.scss';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export default function Converters() {
  const [fromCurrency, setFromCurrency] = React.useState('RUB');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);
  const[rates, setRates] = React.useState({})
  
  const onChaneFromPrice = (value) => {
    setFromPrice(value);
  }

  const onChaneToPrice = (value) => {
    setToPrice(value);
  }

  return (
  <div className='converters'>
    <Converter value={0} 
                currency={fromCurrency}
                onChangeCurrency={setFromCurrency} 
                onChangeValue={onChaneFromPrice}/>
    <Converter value={0} 
                currency={toCurrency} 
                onChangeCurrency={setToCurrency}/>
  </div>)
}

function Converter ({ value, currency, onChangeValue, onChangeCurrency }) { 
  return (
  <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? 'active' : ''}
          key={cur}>
          {cur}
        </li>
      ))}
      <li>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>);
}