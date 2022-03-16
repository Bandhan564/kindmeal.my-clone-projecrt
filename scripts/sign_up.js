document.querySelector("#form").addEventListener("submit",store)
function store(event) {
    event.preventDefault()
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Please fill in email');

    } else if (pw.value.length == 0) {
        alert('Please fill in password');

    } else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Please fill in email and password');

    } else if (pw.value.length > 10) {
        alert('Max of 10');

    } else if (!pw.value.match(numbers)) {
        alert('please add 1 number');

    } else if (!pw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');

    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('please add 1 lovercase letter');

    } else {
        storeData()
        alert('Your account has been created');
    }
}
var dataArr=JSON.parse(localStorage.getItem("signUpData"))||[]
function storeData(){
    var name=document.querySelector("#name").value 
    var pass=document.querySelector("#pw").value
    console.log(name,pass)
    var dataObj={
        name:name,
        password:pass
    }
    dataArr.push(dataObj)
    localStorage.setItem("signUpData", JSON.stringify(dataArr))
    window.location.href="log_in.html"
}