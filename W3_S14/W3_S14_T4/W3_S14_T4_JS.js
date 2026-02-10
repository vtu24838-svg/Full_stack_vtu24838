const collegeFriends = ["Akhil", "Suresh", "Vikram"]
const workFriends = ["Anita", "Priya", "Rohit"]

const partyList = ["Me", ...collegeFriends, ...workFriends]

const invite = (host, ...guests) => {
    return `Host: ${host} | Guests: ${guests.join(", ")}`
}

const showParty = () => {
    document.getElementById("output").textContent =
        invite(partyList[0], ...partyList.slice(1))
}
