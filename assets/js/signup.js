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
    let passwordfield = document.getElementById("password");
    let confirmpasswordfield = document.getElementById("confirmpassword");
    passwordfield.classList.add("error")
    confirmpasswordfield.classList.add("error")
}

function passwordShort() {
    showerror("Passwords needs to be at least 8 characters long");
}

function passwordsDontMatch() {
    showerror("Passwords don't match, Please try again.");
}

function hidePasswordError(){
    let errorfield = document.getElementById("error-field");
    errorfield.classList.add("hidden")
    let passwordfield = document.getElementById("password");
    let confirmpasswordfield = document.getElementById("confirmpassword");
    passwordfield.classList.remove("error")
    confirmpasswordfield.classList.remove("error")
}

function processsignup() {
    let passwordfield = document.getElementById("passwordinput");
    let confirmpasswordfield = document.getElementById("confirmpasswordinput");
    console.log(passwordfield.value)
    if(passwordfield.value.length<8||confirmpasswordfield.value.length<8){
        passwordShort()
    }else if(passwordfield.value != confirmpasswordfield.value) {
        passwordsDontMatch()
    } else {
        //add netcode here
        window.location.assign("./login.html")
    }
} 