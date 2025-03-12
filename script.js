document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");
    const customerNameInput = document.getElementById("customer-name");
    const customerLastNameInput = document.getElementById("customer-last-name");
    const guestNumberInput = document.getElementById("number-guests");
    const checkInDateInput = document.getElementById("check-in");
    const checkOutDateInput = document.getElementById("check-out");
    const customerPhoneInput = document.getElementById("phone-number");
    const customerSpecialNeeds = document.getElementById("special-needs");
    const bookingList = document.getElementById("booking-list");


    checkInDateInput.min = new Date().toISOString().split("T")[0];
    console.log(checkInDateInput.min) //Outputs 2025-03-12

    // Wait for the Check In date input to change the parameters for
    // Check out date
    checkInDateInput.addEventListener('change', function () {
        const checkInDate = new Date(checkInDateInput.value);
        let minTime = checkInDate.getTime() + 86400000; //Milliseconds for next day
        //Converts the next day input into the format YYYY-MM-DD
        checkOutDateInput.min = new Date(minTime).toISOString().split("T")[0];
        console.log(checkOutDateInput.min);

    });

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from reloading the page

        const customerName = customerNameInput.value.trim();
        // const customerLastName = customerLastNameInput.value.trim();
        // const guestNumber = guestNumberInput.value.trim();
        // const checkInDate = checkInDateInput.value.trim();
        // const checkOutDate = checkOutDateInput.value.trim();
        // const customerPhone = customerPhoneInput.value.trim();

        if (customerName === "") {
            // Swal.fire("Please enter a customer name.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = customerName;
        bookingList.appendChild(listItem);

        customerNameInput.value = ""; // Clear input field
        customerLastNameInput.value = "";
        guestNumberInput.value = "";
        checkInDateInput.value = "";
        checkOutDateInput.value = "";
        customerPhoneInput.value = "";
        customerSpecialNeeds.value = "";
    });
});

