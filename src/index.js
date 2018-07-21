import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1>{props.kurssi.nimi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.kurssi} tehtava={props.kurssi}/>
      <Osa nimi={props.kurssi} tehtava={props.kurssi}/>
      <Osa nimi={props.kurssi} tehtava={props.kurssi}/>
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>Tehtaviä: {props.kurssi}.</p>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>Kurssi: {props.kurssi}, tehtäviä: {props.kurssi}</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [ 
  {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  },
  {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  },
  { 
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
]

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto kurssi={kurssi}/>
      <Yhteensa kurssi={kurssi}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
