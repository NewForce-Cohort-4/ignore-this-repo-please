let partyGuests = [
    {
        name: "Marge",
        age: 44
    },
    {
        name: "Dante",
        age: 17
    },
    {
        name: "Lorraine",
        age: 15
    },
    {
        name: "Kerry",
        age: 22
    },
    {
        name: "Jim",
        age: 58
    },
    {
        name: "Liam",
        age: 31
    },
    {
        name: "Jerry",
        age: 7
    },
    {
        name: "Fiona",
        age: 19
    }
]


// Select the div where we want to print if they CAN drink
let over21Container = document.querySelector(".over-21-container")

// select the div where we want to print if they CAN'T drink
let under21Container = document.querySelector(".under-21-container")

// This function will accept a person object and spit out an HTML representation of that person object
function printPartyGuest(personObject){
    return `<div class="party-guest-card">
        <h3>${personObject.name}</h3>
        <p>Age: ${personObject.age}</p>
    </div>`
}


// loop through all the party guests
for(let i = 0; i < partyGuests.length; i++){
    // For each guest, check if they're over 21
    if(partyGuests[i].age >= 21){
        // if they are, print them to the over 21 container
        over21Container.innerHTML += printPartyGuest(partyGuests[i])
    } else {
        // if not, print them to the under 21 container
        under21Container.innerHTML += printPartyGuest(partyGuests[i])
    }
}