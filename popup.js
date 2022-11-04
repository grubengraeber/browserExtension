
// ASK FOR apiUserEmail
// ASK FOR apiKey
const emailField = document.getElementById("clockodo-email-address");
const apiKeyField = document.getElementById("clockodo-api-key");
const inputButton = document.getElementById("button");
const fromDate = document.getElementById("fromDate");
const untilDate = document.getElementById("untilDate");
let timeSince = "";
let timeUntil = "";
let apiUserEmail = "";
let apiKey = "";

chrome.storage.sync.get(["apiKey", "clockodoMail"], (result) => {
    apiKey = result.apiKey ?? "";
    apiUserEmail = result.clockodoMail ?? "";
    emailField.value = apiUserEmail;
    apiKeyField.value = apiKey;
    console.info(`From chrome.storage.sync: '${result.apiKey}' + '${result.clockodoMail}'`)
})

emailField.onchange = (changeEvent) => {
    const clockodoMail = changeEvent.target.value;
    chrome.storage.sync.set({clockodoMail}, function () {
        console.log(clockodoMail)
    })
}

apiKeyField.onchange = (changeEvent) => {
    const apiKey = changeEvent.target.value;
    chrome.storage.sync.set({apiKey}, function () {
        console.log(apiKey)
    })
}

const apiBaseGetRouteClockodo = "https://my.clockodo.com/api/v2/entries";
let clockodoApplicationName = "SMATRICS";
let headOfApiCall = {
    'X-ClockodoApiUser': apiUserEmail,
    'X-ClockodoApiKey': apiKey,
    'X-Clockodo-External-Application': clockodoApplicationName + "; " + apiUserEmail
};
let pathVariables = "?time_since=" + timeSince +  "&time_until=" + timeUntil;

inputButton.onclick = (clickEvent) => {
    apiKey = apiKeyField.value;
    apiUserEmail = emailField.value;
    timeSince = fromDate.value + "%0000:00:00"
    timeUntil = untilDate.value + "%2400:00:00"
    console.log(apiKey + ", " + apiUserEmail + ", " + timeSince + ", " + timeUntil)
    alert("Should have worked! (values: ['" + apiKey + "', '" + apiUserEmail + "', '" + timeSince + "', '" + timeUntil + "'])");
    fetch(apiBaseGetRouteClockodo + pathVariables, {
        method: "GET",
        headers: headOfApiCall
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}
chrome.action.setBadgeText({
    text: "SYNC"
});


// Get Clockodo Api Data


// Display fetched data and let user modify specific names, 
    // dates, 
    // invite other people, 
    // change location of events, 
    // set reminders for each,
    // set wheter private or not,
    // show as: [beschäftigt, frei, mit vorbehalt, außer haus, an anderem Ort tätig],
//  the events color,
// Write Data to Microsoft api 


// BROWSER EXTENSION OR FULL WEBAPP THAT SYNC'S OUTLOOK CALENDAR WITH CLOCKO:DO 