//A ccess data function
const nameInput = document.querySelectorAll("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");
const success = document.querySelector("#success")


//data validation function
function validateForm(){


    clearMessage();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank"
        nameInput.classList.add("error")
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error");

    }
    if(message.value.length < 1){
        errorNodes[1].innerText = "Message cannot be blank";
        message.classList.add("error");
    }
}

function clearMessage(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";  
    }
      nameInput.classList.remove("error");
      email.classList.remove("error");
      message.classList.remove("error");

     
}
function emailIsValid(email){
    let pattern = /\S+@\s+\.\s+/;
    return pattern.test(email);

}