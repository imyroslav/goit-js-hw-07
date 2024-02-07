const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const inputCheck = event.currentTarget.value.trim();
    if( inputCheck.length === 0) {output.textContent = "Anonymous"}
    else { output.textContent = event.currentTarget.value.trim();
    }
})
