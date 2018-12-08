import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'

const Kurssi = ({kurssi}) => {
    return (
        <div>
            <Otsikko nimi = {kurssi.nimi}/>
            <Sisalto sisalto = {kurssi.osat}/>
            <Yhteensa sisalto = {kurssi.osat}/>
        </div>
    )
}

export default Kurssi