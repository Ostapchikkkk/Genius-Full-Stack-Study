function checkInputs() {
    const name = document.getElementById("form-name").value.trim()
    const phone = document.getElementById("form-phone").value.trim()
    const email = document.getElementById("form-email").value.trim()
    const button = document.getElementById("form-button")

    // console.log(name, phone, email, button);
    // regular expression
    // const nameRegex = /^[a-zA-Z\s]+$/;
    // const phoneRegex = /^\+[1-9]\d{1,3}-\d{3}-\d{3}-\d{4}$/;
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (name == "Даня") {alert("Данік лох")}

    if (name !== "" && phone !== "" && email !=="" )
    {
        button.disabled = false;
    } else
    { 
        button.disabled = true;
    }
};


