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


let over21Container = document.querySelector(".over-21-container")
let under21Container = document.querySelector(".under-21-container")

function printPartyGuest(personObject){
    return `<div class="party-guest-card">
        <h3>${personObject.name}</h3>
        <p>Age: ${personObject.age}</p>
    </div>`
}


for(let i = 0; i < partyGuests.length; i++){
    if(partyGuests[i].age >= 21){
        over21Container.innerHTML += printPartyGuest(partyGuests[i])
    } else {
        under21Container.innerHTML += printPartyGuest(partyGuests[i])
    }
}