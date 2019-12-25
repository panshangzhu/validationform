//Name:Yipan Wang created on 09-07-2019
var firstName = window.opener.document.getElementById("firstName").value;
var lastName = window.opener.document.getElementById("lastName").value;
var closeBtn = document.getElementById("close");
var nameinput = document.getElementsByTagName("span")[0];
var receiveText = document.getElementsByTagName("h6")[0];

function getName() {
  var name=firstName+" "+lastName;
  nameinput.innerHTML = name;
}

function Close() {
  window.close();
}

function event() {
  getName();
  
  closeBtn.addEventListener("click", Close, false);
}
window.addEventListener("load", event, false);
