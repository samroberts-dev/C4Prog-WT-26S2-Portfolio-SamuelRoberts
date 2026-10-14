const countryFlag = document.getElementById("country-flag");
const dadJokes = document.getElementById("dad-jokes");
const apiInput = document.getElementById("api-value");
const apiResponse = document.getElementById("api-response");
const apiForm = document.getElementById("api-form");

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
    apiInput.placeholder = dadJokes.checked
        ? "No input required"
        : "Enter a country code (e.g. AU)";
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
            flag.src = data.rectangle_image_url;
            flag.alt = "Country flag";
            apiResponse.appendChild(flag);
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
