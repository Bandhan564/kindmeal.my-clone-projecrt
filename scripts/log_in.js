document.querySelector("#form1").addEventListener("submit", captureData);
function captureData(event) {
  event.preventDefault();
  var userMail = form1.userName.value;
  var userPass = form1.userPw.value;
  checkData(userMail, userPass);
}
var signUpList = JSON.parse(localStorage.getItem("signUpData"));
function checkData(userMail, userPass) {
  signUpList.map(function (el) {
    if (el.name == userMail && el.password == userPass) {
      alert("log in successful");
      window.location.href = "index.html";
    }
  });
}
