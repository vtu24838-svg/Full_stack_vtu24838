const user = {
    name: "Ram",
    age: 20,
    address: {
        city: "Hyderabad",
        country: "India"
    }
}

const scores = [85, 90, 95]

const showData = () => {
    const { name, address: { city } } = user
    const [firstScore, , thirdScore] = scores

    document.getElementById("result").textContent =
        `Name: ${name}, City: ${city}, Scores: ${firstScore} & ${thirdScore}`
}
