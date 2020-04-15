const app = () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();
    });

    const checkInputs = () => {
        const emailValue = email.value.trim();
        if (emailValue === "") {
            SetErrorFor(email, 'Please enter a valid email');
        } else if (!isEmailValid(emailValue)) {
            SetErrorFor(email, 'Please provide a valid email');
        } else {
            setSuccessFor(email);
        }
    }

    const SetErrorFor = (input, message) => {
        const formControl = input.parentElement;
        const errorText = formControl.querySelector('small');

        //add error message inside the tag
        errorText.textContent = message;

        //add the error class to the form
        formControl.classList.add('error');
    }

    const isEmailValid = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const setSuccessFor = (input) => {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
    }
}

app();