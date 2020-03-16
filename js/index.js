const app = () => {
    const form = document.getElementById("form");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

const checkInputs = () => {
    const emailValue = email.value.trim();
    if(emailValue === "") {
        alert("error");
    } else if (!isEmailValid(emailValue)) {
        alert("no");
    } else {
        alert("yes");
    }
}

const isEmailValid= (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
}

app();