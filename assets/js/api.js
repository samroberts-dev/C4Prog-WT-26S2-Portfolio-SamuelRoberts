/* jshint esversion: 8, browser: true */

const countryFlag = document.getElementById("country-flag");
const dadJokes = document.getElementById("dad-jokes");
const apiInput = document.getElementById("api-value");
const apiResponse = document.getElementById("api-response");
const apiForm = document.getElementById("api-form");
const API_KEY="1yvsBE1tjX3oPjzW0mn6jteUTTmolv9zfHb9qSmR";

countryFlag.addEventListener("change", () => {
    if (countryFlag.checked) {
        dadJokes.checked = false;
    }

    apiInput.value = "";
    apiResponse.textContent = "";
    apiInput.disabled = false;
    apiInput.placeholder = "Enter a country code (e.g. AU)";
});

dadJokes.addEventListener("change", () => {
    if (dadJokes.checked) {
        countryFlag.checked = false;
    }

    apiInput.value = "";
    apiResponse.textContent = "";
    apiInput.disabled = dadJokes.checked;
    if (dadJokes.checked) {
        apiInput.placeholder = "No input required";
    } else {
        apiInput.placeholder = "Enter a country code (e.g. AU)";
    }
});

apiForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    apiResponse.textContent = "";

    let apiUrl;

    if (countryFlag.checked) {
        const country = apiInput.value.trim();

        if (!country) {
            apiResponse.textContent = "Please enter a country.";
            return;
        }

        apiUrl = `https://api.api-ninjas.com/v1/countryflag?country=${encodeURIComponent(country)}`;

    } else if (dadJokes.checked) {
        apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

    } else {
        apiResponse.textContent = "Please select an API.";
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            headers: {
                "X-Api-Key": API_KEY
            }
        });

        const data = await response.json();

        if (!response.ok) {
            apiResponse.textContent =
                data.error || data.message || "API request failed.";
            return;
        }

        if (countryFlag.checked) {
            const flag = document.createElement("img");
            flag.alt = "Country flag";

            if (!data.rectangle_image_url) {
                apiResponse.textContent = "No valid flag was found for this country."
            }

            flag.onload = () => {
                apiResponse.appendChild(flag);
            };

            flag.onerror = () => {
                apiResponse.textContent = "Invalid country code."
            }

            flag.src = data.rectangle_image_url;
        } else {
            data.forEach(item => {
                const paragraph = document.createElement("p");
                paragraph.textContent = item.joke;
                apiResponse.appendChild(paragraph);
            });
        }

    } catch (error) {
        apiResponse.textContent = "Unable to retrieve API data.";
    }
});
