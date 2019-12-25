//Name:Yipan Wang created on 09-07-2019
var validation = 0;
//validate first name

function validateFirstName() {
  const firstName = document.getElementById("firstName");
  const errorFirstName = document.getElementById("errorFirstName");
  try {
    errorFirstName.style.display = "none";
    firstName.style.background = "white";
    const pattern = /^[A-Z][A-Za-z]*$/;
    if (firstName.value === "") {
      validation += 1;
      throw "Please enter first name";
    } else if (!pattern.test(firstName.value)) {
      validation += 1;
      throw "Only letters and First letter should be in upper case ";
    } else if (firstName.value.length > 15) {
      validation += 1;
      throw "Name can not exceed 15 charactors ";
    }
  } catch (msg) {
    errorFirstName.innerHTML = msg;
    errorFirstName.style.display = "block";
    errorFirstName.style.color = "#e84118";
    firstName.style.background = "#e1b12c";
    validation += 1;
  }
}
//validate last name
function validateLastName() {
  const lastName = document.getElementById("lastName");
  const errorLastName = document.getElementById("errorLastName");
  try {
    errorLastName.style.display = "none";
    lastName.style.background = "white";
    const pattern = /^[A-Z][A-Za-z]*$/;
    if (lastName.value === "") {
      validation += 1;
      throw "Please enter last name";
    } else if (!pattern.test(lastName.value)) {
      validation += 1;
      throw "Only letters and First letter should be in upper case ";
    } else if (lastName.value.length > 15) {
      validation += 1;
      throw "Name can not exceed 15 charactors ";
    }
  } catch (msg) {
    errorLastName.innerHTML = msg;
    errorLastName.style.display = "block";
    errorLastName.style.color = "#e84118";
    lastName.style.background = "#e1b12c";
    validation += 1;
  }
}
//validate password
function validatePassword() {
  const password = document.getElementById("password1");
  const errorPassword = document.getElementById("errorPassword1");
  const pattern = /^(?=.*\d)(?=.*[\/])(?=.*[\.])[A-Za-z\d\/\.]{8,12}$/;
  try {
    errorPassword.style.display = "none";
    password.style.background = "white";
    if (!pattern.test(password.value)) {
      validation += 1;
      throw "8 to 12 characters must include numbers, a dot (.) and a backslash ()";
    }
  } catch (msg) {
    validation += 1;
    errorPassword.innerHTML = msg;
    errorPassword.style.display = "block";
    errorPassword.style.color = "#e84118";
    password.style.background = "#e1b12c";
  }
}
//validate password2
function validatePassword2() {
  const password = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const errorPassword2 = document.getElementById("errorPassword2");
  try {
    errorPassword2.style.display = "none";
    password2.style.background = "white";
    if (password2.value === "") {
      validation += 1;
      throw "Please reenter password";
    } else if (password2.value != password.value) {
      validation += 1;
      throw "Password is not match";
    }
  } catch (msg) {
    validation += 1;
    errorPassword2.innerHTML = msg;
    errorPassword2.style.display = "block";
    errorPassword2.style.color = "#e84118";
    password2.style.background = "#e1b12c";
  }
}
//vlidate phone number
function validateTel() {
  const tel = document.getElementById("tel");
  const errorTel = document.getElementById("errorTel");
  const pattern = /^\d{10}$/;
  try {
    errorTel.style.display = "none";
    tel.style.background = "white";
    if (tel.value === "") {
      validation += 1;
      throw "Please enter your Phone Number";
    } else if (!pattern.test(tel.value)) {
      throw "Phone Number can only be 10 digits";
    }
  } catch (msg) {
    validation += 1;
    errorTel.innerHTML = msg;
    errorTel.style.display = "block";
    errorTel.style.color = "#e84118";
    tel.style.background = "#e1b12c";
  }
}
//validate postalcode
function validatePostCode() {
  const postCode = document.getElementById("postCode");
  const errorPostCode = document.getElementById("errorPostCode");
  pattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
  pattern2 = /^\d{5}$/;
  try {
    errorPostCode.style.display = "none";
    postCode.style.background = "white";
    if (postCode.value === "") {
      validation += 1;
      throw "Please enter Post Code";
    } else if (
      pattern.test(postCode.value) == false &&
      pattern2.test(postCode.value) == false
    ) {
      validation += 1;
      throw "PostCode is not correct";
    }
  } catch (msg) {
    validation += 1;
    errorPostCode.innerHTML = msg;
    errorPostCode.style.display = "block";
    errorPostCode.style.color = "#e84118";
    postCode.style.background = "#e1b12c";
  }
}
//validate email
function validateEmail() {
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  try {
    errorEmail.style.display = "none";
    email.style.background = "white";
    if (email.value === "") {
      validation += 1;
      throw "Please enter email";
    } else if (
      pattern.test(email.value) == false &&
      pattern2.test(email.value) == false
    ) {
      validation += 1;
      throw "Email is not correct";
    }
  } catch (msg) {
    validation += 1;
    errorEmail.innerHTML = msg;
    errorEmail.style.display = "block";
    errorEmail.style.color = "#e84118";
    email.style.background = "#e1b12c";
  }
}
// validate Others
function validateGender() {
  const gender = document.getElementById("gender");
  const errorGender = document.getElementById("errorGender");
  try {
    errorGender.style.display = "none";
    gender.style.background = "white";
    if (gender.selectedIndex <= 0) {
      validation += 1;
      throw "Please choose an option";
    }
  } catch (msg) {
    validation += 1;
    errorGender.innerHTML = msg;
    errorGender.style.display = "block";
    errorGender.style.color = "#e84118";
    gender.style.background = "#e1b12c";
  }
}
function validateCountry() {
  const country = document.getElementById("country");
  const errorCountry = document.getElementById("errorCountry");
  try {
    errorCountry.style.display = "none";
    country.style.background = "white";
    if (country.selectedIndex < 0) {
      validation += 1;
      throw "Please choose an option";
    }
  } catch (msg) {
    validation += 1;
    errorCountry.innerHTML = msg;
    errorCountry.style.display = "block";
    errorCountry.style.color = "#e84118";
    country.style.background = "#e1b12c";
  }
}
function validateAddCityProvince() {
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const province = document.getElementById("province");
  const interest = document.getElementById("interest");
  const errorInterest = document.getElementById("errorInterest");
  const errorAddress = document.getElementById("errorAddress");
  const errorCity = document.getElementById("errorCity");
  const errorProvince = document.getElementById("errorProvince");
  const array = [address, city, province, interest];
  const errorArray = [errorAddress, errorCity, errorProvince, errorInterest];
  for (var i = 0; i < array.length; i++) {
    try {
      array[i].style.background = "white";
      errorArray[i].style.display = "none";
      if (array[i].value === "") {
        validation += 1;
        throw "Area cannot be empty";
      }
    } catch (msg) {
      validation += 1;
      errorArray[i].innerHTML = msg;
      errorArray[i].style.display = "block";
      errorArray[i].style.color = "#e84118";
      array[i].style.background = "#e1b12c";
    }
  }
}

function validateEduWorkCam() {
  const education = document.getElementById("education");
  const working = document.getElementById("working");
  const campus = document.getElementById("campus");
  const errorEducation = document.getElementById("errorEducation");
  const errorWorking = document.getElementById("errorWorking");
  const errorCampus = document.getElementById("errorCampus");
  const array = [education, working, campus];
  const errorArray = [errorEducation, errorWorking, errorCampus];
  for (var i = 0; i < array.length; i++) {
    try {
      array[i].style.background = "white";
      errorArray[i].style.display = "none";
      if (array[i].selectedIndex <= 0) {
        validation += 1;
        throw "Please choose an option";
      }
    } catch (msg) {
      validation += 1;
      errorArray[i].innerHTML = msg;
      errorArray[i].style.display = "block";
      errorArray[i].style.color = "#e84118";
      array[i].style.background = "#e1b12c";
    }
  }
}
function validateHear() {
  const hear = document.getElementsByName("hear");
  const errorHear = document.getElementById("errorHear");
  var ifChecked = false;
  for (var i = 0; i < hear.length; i++) {
    if (hear[i].checked) {
      ifChecked = true;
      break;
    }
  }
  try {
    errorHear.style.display = "none";
    hear.forEach(e => {
      e.style.background = "white";
    });

    if (!ifChecked) {
      validation += 1;
      throw "Please choose an option";
    }
  } catch (msg) {
    validation += 1;
    errorHear.innerHTML = msg;
    errorHear.style.display = "block";
    errorHear.style.color = "#e84118";
    hear.forEach(e => (e.style.background = "#e1b12c"));
  }
}
//submit confirm page
function submitted() {
  var propertyWidth = 600;
  var propertyHeight = 400;
  var winLeft = (screen.width - propertyWidth) / 2;
  var winTop = (screen.height - propertyHeight) / 2;
  var winOptions = "width=600,height=400";
  winOptions = winOptions + ",left=" + winLeft;
  winOptions = winOptions + ",top=" + winTop;
  var zoomWindow = window.open("zoomIn.html", "_blank", winOptions);
  zoomWindow.focus();
}
//validate submit message
function Eventlistener() {
  validation = 0;
  validateFirstName();
  validateLastName();
  validatePassword();
  validatePassword2();
  validatePostCode();
  validateEmail();
  validateTel();
  validateGender();
  validateCountry();
  validateAddCityProvince();
  validateEduWorkCam();
  validateHear();
  console.log(validation);
  if (validation === 0) {
    submitted();
  }
}

function validate() {
  const button = document.getElementById("submit");
  button.addEventListener("click", Eventlistener, false);
}

// windows
window.addEventListener("load", validate, false);
