// ASK FOR apiUserEmail
// ASK FOR apiKey
let fromTime = false;
let toTime = false;
const emailField = document.getElementById("clockodo-email-address");
const apiKeyField = document.getElementById("clockodo-api-key");
const inputButton = document.getElementById("button");
let apiUserEmail = "";
let apiKey = "";
inputButton.onclick = (clickEvent) => {
    apiKey = apiKeyField.value;
    apiUserEmail = emailField.value;
    alert("Should have worked! (values: ['" + apiKey + "', '" + apiUserEmail + "'])");
}
chrome.action.setBadgeText({
    text: "USER"
})
// ASK FOR timeSince
let timeSince = "";
if (fromTime) {
    chrome.action.setBadgeText({
        text: "FROM"
    })
}

// ASK FOR timeUntil

if (toTime) {
    chrome.action.setBadgeText({
        text: "TO"
    })
}
let timeUntil = "";

// Get Clockodo Api Data
const apiBaseGetRouteClockodo = "https://my.clockodo.com/api/v2/entries";
let clockodoApplicationName = "";
let headOfApiCall = {
    'X-ClockodoApiUser': apiUserEmail,
    'X-ClockodoApiKey': apiKey,
    'X-Clockodo-External-Application': clockodoApplicationName + "; " + apiUserEmail
};
let pathVariables = "?time_since=" + timeSince +  "&time_until=" + timeUntil;

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