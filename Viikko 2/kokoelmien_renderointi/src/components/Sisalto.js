import React from 'react'
import Osa from './Osa'

const Sisalto = ({sisalto}) => {
    const osat = sisalto.map(osa => <Osa key={osa.id} osa={osa}/>)
    return (
        <div>
            {osat}
        </div>
    )
}

export default Sisalto