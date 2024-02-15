let headingE1 = document.getElementById("heading");
// headingE1.innerHTML = "jyothi";
// headingE1.style.color="green";
// consolo.log(headingE1);

function change(){
    headingE1.textContent="abc";
    headingE1.style.color="green";
    headingE1.style.backgroundColor = "blue";
}
function reset(){
    headingE1.textContent= "HELLO";
    headingE1.style.color= "black";
}
let username = document.getElementById("username");
let password = document.getElementById("password");
function execute(){
    if(username.value  === "jyothi" ){
        if(password.value  === "12345" ){
            if(conformpassword.value === "12345" ){
        alert("Account loggedin!!");
    }
}
}
}