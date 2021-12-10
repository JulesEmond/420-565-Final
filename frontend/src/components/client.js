import {React} from 'react'

const Client = ({client}) => {
    return (
        <tr>
            <td>{client.id}</td>
            <td>{client.firstName}</td>
            <td>{client.gender}</td>
            <td>{client.birthDate}</td>
        </tr>
    )
}

export default Client