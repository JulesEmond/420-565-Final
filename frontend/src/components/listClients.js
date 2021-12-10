import {React} from 'react'
import Client from './client'

const ListClients = ({clients}) => {

    const list = Array.from(clients)
    console.log(list)
    if(sessionStorage.getItem("list") !== null) {
        return (
            <div>
                <table border = "1">
                    <tbody>
                    {clients.map((client) => (
                        <Client
                            key={clients.indexOf(client)}
                            client={client}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
        </div>
    )
}

export default ListClients