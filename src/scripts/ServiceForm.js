import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="authorName">Author</label>
            <select id="authorSelection"  class="select">
              <option value="Amy@gmail.com" > Amy</option>
              <option value="Emmy@gmail.com" > Emmy</option>
              <option value="Bob@gmail.com"> Bob </option>
              <option value="Albert@gmail.com" > Albert </option>
            </select>
        </div>

        <div class="field">
            <label class="label" for="letter">Letter</label>
            <textarea type="text" name="letter" class="input" rows="8" cols="50">
            </textarea>
        </div>

        <div class="field">
        <label class="label" for="topic">Topics</label>
        <div class="field_topic">
            <label><input type="radio" name="topic_input" class="input" id="Business"/>Business</label>
            <label><input type="radio" name="topic_input" class="input" id="Friendly"/>Friendly</label>
            <label><input type="radio" name="topic_input" class="input" id="Family"/>Family</label>
            <label><input type="radio" name="topic_input" class="input" id="Congratulations"/>Congratulations</label>
        </div>
        </div>

        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            <select id="recipientSelection"  class="select">
            <option value="Amy@gmail.com" > Amy</option>
            <option value="Emmy@gmail.com" > Emmy</option>
            <option value="Bob@gmail.com"> Bob </option>
            <option value="Albert@gmail.com" > Albert </option>
            </select>
        </div>

        <button class="button" id="submitRequest">Send Letter</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields

        const theSelectedIndex = document.getElementById("authorSelection").options.selectedIndex
        const userauthorpartName = document.getElementById('authorSelection').options[theSelectedIndex].text
        const userauthorEmail = document.getElementById('authorSelection').options[theSelectedIndex].value
        const userauthorName = userauthorpartName + ' (' + userauthorEmail + ")"

        const userLetter = document.querySelector("textarea[name='letter']").value

        const theSelectedIndex2 = document.getElementById("recipientSelection").options.selectedIndex
        const userRecipientpart = document.getElementById('recipientSelection').options[theSelectedIndex2].text
        const userRecipientEmail = document.getElementById('recipientSelection').options[theSelectedIndex2].value
        const userRecipient = userRecipientpart + ' (' + userRecipientEmail + ")"

        const userTopic = document.querySelector('input[name="topic_input"]:checked').id;

        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const userDate = date + ' ' + time;

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorName: userauthorName,
            letter: userLetter,
            topic: userTopic,
            recipient: userRecipient,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

