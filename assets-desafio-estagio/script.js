
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const socialName = document.getElementById("social-name");
const cnpj = document.getElementById("cnpj");
const cep = document.getElementById("cep");
const address = document.getElementById("address");
const numberAddress = document.getElementById("number-address");
const numberContact = document.getElementById("number-contact");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();

})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

socialName.addEventListener("blur", () => {
    checkInputSocialName();
})

cnpj.addEventListener("blur", () => {
    checkInputCnpj();
})

numberContact.addEventListener("blur", () => {
    checkInputNumberContact();
})

address.addEventListener("blur", () => {
    checkInputAddress();
})

numberAddress.addEventListener("blur", () => {
    checkInputNumberAddress();
})

cep.addEventListener("blur", () => {
    checkInputCep();
})
  

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Obrigatório")
    } else {
        const formitem = username.parentElement;
        formitem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "O email é obrigatório")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatória")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A Confirmação de senha é obrigatória")
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputSocialName() {
        const socialNameValue = socialName.value;

        if (socialNameValue === "") {
        errorInput(socialName, "Obrigatório")
        } else {
        const formItem = socialName.parentElement;
        formItem.className = "form-content"
        }
}

function checkInputCnpj() {
    const cnpjValue = cnpj.value;

    if (cnpjValue === "") {
    errorInput(cnpj, "Obrigatório")
    } else {
    const formItem = cnpj.parentElement;
    formItem.className = "form-content"
    }
}


function checkInputNumberContact() {
        const numberContactValue = numberContact.Value;

    if(numberContact ===""){
        errorInput(numberContact, "obrigatório")
    }else {
        const formItem = numberContact.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputAddress() {
    const addressValue = address.value;

    if (addressValue === "") {
    errorInput(address, "Obrigatório")
    } else {
    const formItem = addressValue.parentElement;
    formItem.className = "form-content"
    }
}


function checkInputNumberAddress() {
    const numberAddressValue = numberAddress.Value;

    if(numberAddress ===""){
        errorInput(numberAddress, "obrigatório")
    }else {
        const formItem = numberAddress.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputCep() {
    const cepValue = cep.Value;

    if(cep ===""){
        errorInput(cep, "obrigatório")
    }else {
        const formItem = cep.parentElement;
        formItem.className = "form-content"
    }
}



function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();
    checkInputSocialName();
    checkInputCnpj();
    checkInputNumberContact();
    checkInputAddress();
    checkInputNumberAddress();
    checkInputCep();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"

    });


if(isValid){
    alert("CADASTRO ENVIADO COM SUCESSO!")
    }else{
        alert("Preencha todos os campos corretamente")
    }
}



function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}


