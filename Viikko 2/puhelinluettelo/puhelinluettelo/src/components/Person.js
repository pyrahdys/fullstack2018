import React from 'react';

const Person = ({person, removeName}) => {
    console.log(person.name)
    return (
        <tr>
            <td>
                {person.name}
            </td>
            <td>
                {person.number}
            </td>
            <td>
                <button onClick={removeName}>Poista</button>
            </td>
        </tr>
    )
}

export default Person