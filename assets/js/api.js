const countryFlag = document.getElementById("country-flag");
const dadJokes = document.getElementById("dad-jokes");
const apiInput = document.getElementById("api-value");
const apiResponse = document.getElementById("api-response");

countryFlag.addEventListener("change", () => {
    if (countryFlag.checked) {
        dadJokes.checked = false;
    }

    apiInput.value = "";
    apiResponse.textContent = "";
});

dadJokes.addEventListener("change", () => {
    if (dadJokes.checked) {
        countryFlag.checked = false;
    }

    apiInput.value = "";
    apiResponse.textContent = "";
});
