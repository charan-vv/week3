function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var skills = document.querySelectorAll('input[name="skills[]"]:checked');
    var password = document.getElementById("pwd").value.trim();
    var confirmPassword = document.getElementById("cpwd").value.trim();
    var workLocation = document.getElementById("workLocation").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("skillsError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("passwordNotMatch").innerText = "";
    document.getElementById("workLocationError").innerText = "";

    var errors = false;

    if (name === " " || name.includes(" ")) {
        document.getElementById("nameError").innerText = "\nName cannot be empty or contain blank spaces";
        errors = true;
    }

    if (email === "" || email.includes(" ")) {
        document.getElementById("emailError").innerText = "\nEmail cannot be empty or contain blank spaces";
        errors = true;
    }

    if (phone === "" || phone.includes(" ")) {
        document.getElementById("phoneError").innerText = "\nPhone number cannot be empty or contain blank spaces";
        errors = true;
    }

    if (name.length < 3) {
        document.getElementById("nameError").innerText = "\nName must be at least 3 characters";
        errors = true;
    }

    var emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "\nInvalid email format";
        errors = true;
    }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").innerText = "\nInvalid phone number format. Please enter a 10-digit number.";
        errors = true;
    }

    if (!gender) {
        document.getElementById("genderError").innerText = "\nPlease select your gender";
        errors = true;
    }

    if (skills.length === 0) {
        document.getElementById("skillsError").innerText = "\nPlease select at least one skill";
        errors = true;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "\nPassword must be at least 8 characters long."; 
        errors = true;
    }

    if (confirmPassword !== password) {
        document.getElementById("passwordNotMatch").innerText = "\nPasswords do not match.";
        errors = true;
    }

    if (workLocation === "") {
        document.getElementById("workLocationError").innerText = "\nPlease select a work location";
        errors = true;
    }

    var submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = false; 

    return !errors;
}
