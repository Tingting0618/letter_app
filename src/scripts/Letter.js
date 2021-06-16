import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const Letter = () => {
    return `
        <header class="header">
            <img src="./image/logo1.png" alt="Letter Logo"/>
            <h1>Pen Pal Society</h1>
        </header>
        
        <section class="serviceForm">
            ${ServiceForm()}
        </section>
        <section class="serviceRequests">
            <h2>Letters</h2>
            ${Requests()}
        </section>
    `
}