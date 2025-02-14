document.getElementById("proposalForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        memory: document.getElementById("memory").value,
        proposal: document.getElementById("proposal").value
    };

    fetch(" https://script.google.com/macros/s/AKfycbzxr9gUksWgoajIIe9AqM3uEuMoPBl-eF9_s5iqnLlmx9ajYtGD335Adwmy8hwxtaB8/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        alert("Response saved! ❤️");
        document.getElementById("proposalForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
