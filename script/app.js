//access data function
const firstNameInput = document.querySelector("#first-name");
const surnameInput = document.querySelector("#surname");
const email = document.querySelector("#email");
const telNumber = document.querySelector("#telnumber");
const message = document.querySelector("#comments-message");
const submit = document.querySelector("#submit");
const errorNodes = document.querySelectorAll(".error");
const success = document.querySelector("#success")


//data validation function
function validateForm(){
    if(firstNameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank"
        firstNameInput.classList.add("error-border")
    }
}
