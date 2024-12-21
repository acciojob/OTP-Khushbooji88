//your JS code here. If required.
function moveFocus(currentInput, nextInputId) {
    if (currentInput.value.length === 1) {
        const nextInput = document.getElementById(nextInputId);
        if (nextInput) {
            nextInput.focus();
        }
    }
}

function handleBackspace(event, currentInputId) {
    if (event.key === "Backspace") {
        const currentInput = document.getElementById(currentInputId);
        if (currentInput.value === '') {
            const previousInput = document.getElementById(getPreviousInputId(currentInputId));
            if (previousInput) {
                previousInput.focus();
            }
        }
    }
}

function getPreviousInputId(currentInputId) {
    const inputs = ['otp1', 'otp2', 'otp3', 'otp4', 'otp5', 'otp6'];
    const currentIndex = inputs.indexOf(currentInputId);
    return currentIndex > 0 ? inputs[currentIndex - 1] : null;
}
