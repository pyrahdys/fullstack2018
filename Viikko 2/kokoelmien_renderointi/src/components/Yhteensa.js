import React from 'react'

const Yhteensa = ({sisalto}) => {
    
    const summa = sisalto.reduce((acc, val) => {
        return acc + val.tehtavia
    }, 0);

    return (
        <p>
            yhteensä {summa} tehtävää
        </p>
    )
}

export default Yhteensa