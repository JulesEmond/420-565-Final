import {React} from 'react'
import ListClients from './listClients';
import {useState} from 'react'

const Buttons = () => {
    const [clients, setClients] = useState('')

    function getAll(){
        fetch(`http://localhost:9090/all`)
        .then(async response => {
            const data = await response.json();
            sessionStorage.setItem("list", JSON.stringify(data))
            setClients(data)
        })

    }

    function getHommes(){
        fetch(`http://localhost:9090/hommes`)
        .then(async response => {
            const data = await response.json();
            sessionStorage.setItem("list", JSON.stringify(data))
            setClients(data)
        })
    }

    function getOntariens(){
        fetch(`http://localhost:9090/ontariens`)
        .then(async response => {
            const data = await response.json();
            sessionStorage.setItem("list", JSON.stringify(data))
            setClients(data)
        })
    }

    return(
        <div>
            <button onClick={getAll}>Fetch tous les clients</button>
            <button onClick={getHommes}>Fetch les hommes</button>
            <button onClick={getOntariens}>Fetch les ontariens</button>

            <ListClients clients = {clients}/>
        </div>
    )
}
export default Buttons