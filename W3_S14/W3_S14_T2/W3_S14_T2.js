const generateReceipt = (price, tip) => {
    const total = price + tip
    document.getElementById("output").textContent =
        `Price: ₹${price}, Tip: ₹${tip}, Total Amount: ₹${total}`
}
