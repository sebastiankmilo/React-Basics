import React from 'react';

const PresentationalElement = ({bpi}) => {
    
    if (bpi != null) {
      console.log(bpi)
      const currencies_monedas = Object.keys(bpi)
      console.log(currencies_monedas)
      return currencies_monedas.map((currencie_moneda) => (
        <div key={currencie_moneda}>
          1 BTC = {bpi[currencie_moneda].rate}
          <span> {currencie_moneda} </span>
        </div>
      ))
    }
}

export default PresentationalElement