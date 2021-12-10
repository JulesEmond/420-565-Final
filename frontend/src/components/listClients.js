import {React} from 'react'
import Client from './client'

const ListClients = () => {
    let clients = JSON.parse(sessionStorage.getItem("list"))

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