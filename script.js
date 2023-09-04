document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const subscribeBtn = document.getElementById("subscribeBtn");
    const modalMessage = document.getElementById("modalMessage");
    const errorText = document.getElementById("errorText");

    subscribeBtn.addEventListener("click", function () {
        const emailValue = emailInput.value.trim();

        if (validateEmail(emailValue)) {
            modalMessage.textContent = "Thanks for subscribing!";
            $('#exampleModal').modal('show'); // Show the modal
            errorText.textContent = ""; // Clear error message
        } else {
            modalMessage.textContent = ""; // Clear modal message
            errorText.textContent = "Valid email required ";
            errorText.classList.add("text-danger");
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});