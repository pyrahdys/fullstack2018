import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'

console.log('Käynnistetään Kurssi.js')

const Kurssi = ({kurssi}) => {
    return (
        <div>
            <Otsikko nimi = {kurssi.nimi}/>
            <Sisalto sisalto = {kurssi.osat}/>
        </div>
    )
}
/*
const Yhteensa = (props) => {
    const [osa1, osa2, osa3] = props.kurssi.osat
    
    return(
      <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
    )
}
*/
export default Kurssi