import React from 'react'

const Sum = ({kurssi}) => {
    const amount = kurssi.osat.reduce((currentValue, accumulator) => {
      return accumulator.tehtavia + currentValue;
  }, 0 ); 
      return (
        <div>
          <p>Kursseja yhteensä: {amount}</p>
        </div>
      )
  }

  export default Sum;