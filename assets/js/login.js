function processblur(ele) {
    if (ele.value) {
        ele.classList.add("notempty")
    } else {
        ele.classList.remove("notempty")
    }
} 

function showerror(errmsg) {
    let errorfield = document.getElementById("error-field");
    errorfield.innerHTML = errmsg;
    errorfield.classList.remove("hidden")
    let userfield = document.getElementById("username");
    let passwordfield = document.getElementById("password");
    userfield.classList.add("error")
    passwordfield.classList.add("error")
}

function hideError(){
    let errorfield = document.getElementById("error-field");
    errorfield.classList.add("hidden")
    let userfield = document.getElementById("username");
    let passwordfield = document.getElementById("password");
    userfield.classList.remove("error")
    passwordfield.classList.remove("error")
}

function processlogin() {
    showerror("Username or Password was incorrect")
    //add netcode here
} 