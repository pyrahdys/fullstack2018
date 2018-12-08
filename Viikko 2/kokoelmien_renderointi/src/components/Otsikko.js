import React from 'react'
import Sisalto from './Sisalto'

console.log('Käynnistetään Otsikko.js')

const Otsikko = ({nimi}) => {
    return (
        <h1>{nimi}</h1>
    )
}

export default Otsikko