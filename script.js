//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    if (value !== "") {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (e.target.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      } else {
        e.target.value = "";
      }
    } else if (e.key >= "0" && e.key <= "9") {
      // Allow numeric keys
    } else if (e.key !== "Tab") {
      e.preventDefault();
    }
  });
});
