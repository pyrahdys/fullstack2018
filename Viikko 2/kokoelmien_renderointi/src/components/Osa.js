import React from 'react'

console.log('Käynnistetään Osa.js')

const Osa = ({osa}) => {
    console.log('tulostetaan osan tiedot: ')
    return (
        <p>
            {osa.nimi} {osa.tehtavia}
        </p>
    )
}

export default Osa