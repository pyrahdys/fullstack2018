import React from 'react';

const Person = ({person}) => {
    console.log(person.name)
    return (
        <tr>
            <td>
                {person.name}
            </td>
            <td>
                {person.number}
            </td>
        </tr>
    )
}

export default Person