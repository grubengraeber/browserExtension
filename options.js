const apiKeyField = document.getElementById("apiKey");
const clockodoMailField = document.getElementById("clockoDoMailAddress");
const saveButton = document.getElementById("optionsSaveButton");
let apiKey = "";
let clockodoMail = "";

chrome.storage.sync.get(["apiKey", "clockodoMail"], (result) => {
    apiKey = result.apiKey;
    clockodoMail = result.clockodoMail;
    apiKeyField.value = apiKey ?? "";
    clockodoMailField.value = clockodoMail ?? "";
})

saveButton.onclick = (clickEvent) => {
    const apiKey = apiKeyField.value ?? "";
    const clockodoMail = clockodoMailField.value ?? "";
    chrome.storage.sync.set({apiKey, clockodoMail}, () => {
        console.log(`The options entered were: '${apiKey}' + '${clockodoMail}'`)
    });

    chrome.storage.sync.get(["apiKey", "clockodoMail"], (result) => {
        console.info(`From chrome.storage.sync: '${result.apiKey}' + '${result.clockodoMail}'`)
    })
    /* const storageValue = chrome.storage.sync.get(["optionsInput"])
    console.info("From storage.sync: '" +  + "'"); */
}