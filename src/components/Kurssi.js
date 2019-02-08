import React from 'react'

const Kurssi = ({kurssi}) => {
    const kurssit = kurssi.osat.map(data => <li key={data.id}>{data.nimi} {data.tehtavia}</li>)
      return (
        <div>
          <h1>{kurssi.nimi}</h1>    
          <ul>
            {kurssit}
          </ul>
        </div>
      )
  }

  export default Kurssi;