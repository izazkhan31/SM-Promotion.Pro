// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("promotion-form");

    // Update the displayed price dynamically as the user enters a quantity
    form.addEventListener("input", updatePrice);

    // Calculate and display price on form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const username = document.getElementById("username").value;
        const platform = document.getElementById("platform").value;
        const service = document.getElementById("service").value;
        const quantity = parseInt(document.getElementById("quantity").value);

        // Calculate the price
        const price = calculatePrice(platform, service, quantity);

        // Display the selected service and payment information
        displaySelectedService(username, platform, service, quantity, price);
    });
});

// Function to calculate price based on platform, service, and quantity
function calculatePrice(platform, service, quantity) {
    let unitPrice;

    if (platform === "tiktok" || platform === "instagram") {
        if (service === "followers" || service === "likes" || service === "views") {
            unitPrice = 0.9;  // 0.9 PKR per follower, like, or view
        }
    } else if (platform === "youtube") {
        if (service === "subscribers") {
            unitPrice = 1;  // 1 PKR per subscriber
        } else if (service === "views") {
            unitPrice = 1;  // 1 PKR per view
        }
    }

    return unitPrice * quantity;
}

// Function to update displayed price as user types quantity
function updatePrice() {
    const platform = document.getElementById("platform").value;
    const service = document.getElementById("service").value;
    const quantity = parseInt(document.getElementById("quantity").value) || 0;

    const price = calculatePrice(platform, service, quantity);
    document.getElementById("calculated-price").innerText = `Total Price: ${price.toFixed(2)} PKR`;
}

// Function to display user-selected service and price, along with payment options
function displaySelectedService(username, platform, service, quantity, price) {
    // Create a summary message
    const summaryMessage = `
        Username: ${username}
        Platform: ${capitalizeFirstLetter(platform)}
        Service: ${capitalizeFirstLetter(service)}
        Quantity: ${quantity}
        Total Price: ${price.toFixed(2)} PKR
        Payment Options: Easypaisa or JazzCash
        Easypaisa Number: 03105382417
        JazzCash Number: 03369905447
    `;

    // Display summary to the user
    alert(summaryMessage);
    
    // Optional: Log summary to console
    console.log("User Selected Service:", summaryMessage);
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

