import {React} from 'react'

function getAll(){
    console.log("tous")
    fetch(`http://localhost:9090/all`)
    .then(async response => {
        const data = await response.json();
        sessionStorage.setItem("list", JSON.stringify(data))
    })
}

function getHommes(){
    console.log("hommes")
    fetch(`http://localhost:9090/hommes`)
    .then(async response => {
        const data = await response.json();
        sessionStorage.setItem("list", JSON.stringify(data))
    })
}

function getOntariens(){
    sessionStorage.clear()
    console.log("ontariens")
    fetch(`http://localhost:9090/ontariens`)
    .then(async response => {
        const data = await response.json();
        sessionStorage.setItem("list", JSON.stringify(data))
    })
}

const Buttons = () => {


    return(
        <div>
            <button onClick={getAll}>Fetch tous les clients</button>
            <button onClick={getHommes}>Fetch les hommes</button>
            <button onClick={getOntariens}>Fetch les ontariens</button>
        </div>
    )
}
export default Buttons