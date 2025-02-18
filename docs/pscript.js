
document.getElementById("check-btn").addEventListener("click", () => {
    const inputElement = document.getElementById("text-input");
    const resultElement = document.getElementById("result");
    const inputText = inputElement.value.trim();

    if (inputText === "") {
        alert("Please input a value.");
        return;
    }

    const cleanedText = inputText
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // Removes non-alphanumeric characters

    const reversedText = cleanedText.split("").reverse().join("");

    if (cleanedText === reversedText) {
        resultElement.textContent = `${inputText} is a palindrome.`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome.`;
    }
});
