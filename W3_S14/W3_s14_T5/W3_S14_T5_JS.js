const pizzaPromise = new Promise((resolve, reject) => {
    const isShopOpen = true

    setTimeout(() => {
        isShopOpen
            ? resolve("🍕 Pizza delivered successfully!")
            : reject("❌ Pizza shop is closed")
    }, 2000)
})

const orderPizza = () => {
    document.getElementById("status").textContent = "⏳ Ordering pizza..."

    pizzaPromise
        .then(message => {
            document.getElementById("status").textContent = message
        })
        .catch(error => {
            document.getElementById("status").textContent = error
        })
}
