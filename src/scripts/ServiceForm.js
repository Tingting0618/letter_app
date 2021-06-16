import { sendRequest } from "./dataAccess.js"
// <input type="text" name="authorName" class="input" />

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="authorName">Author</label>
            <select id="authorSelection"  class="select">
              <option value="amy">Amy</option>
              <option value="emmy">Emmy</option>
              <option value="bob">Bob</option>
              <option value="albert">Albert</option>
            </select>
        </div>

        <div class="field">
            <label class="label" for="letter">Letter</label>
            <textarea type="text" name="letter" class="input" rows="8" cols="50">
            </textarea>
        </div>

        <div class="field">
            <label class="label" for="topic">Topics</label>
            <label><input type="radio" name="topic_input" class="input" id="business"/>Business</label>
            <label><input type="radio" name="topic_input" class="input" id="friendly"/>Friendly</label>
            <label><input type="radio" name="topic_input" class="input" id="family"/>Family</label>
            <label><input type="radio" name="topic_input" class="input" id="congratulations"/>Congratulations</label>
        </div>

        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            <select id="recipientSelection"  class="select">
              <option value="amy">Amy</option>
              <option value="emmy">Emmy</option>
              <option value="bob">Bob</option>
              <option value="albert">Albert</option>
            </select>
        </div>

        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
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
        const userauthorName = document.getElementById('authorSelection').options[theSelectedIndex].text

        const userLetter = document.querySelector("textarea[name='letter']").value

        const theSelectedIndex2 = document.getElementById("recipientSelection").options.selectedIndex
        const userRecipient = document.getElementById('recipientSelection').options[theSelectedIndex2].text

        const userTopic = document.querySelector('input[name="topic_input"]:checked').value;

        const userDate = document.querySelector("input[name='serviceDate']").value

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

