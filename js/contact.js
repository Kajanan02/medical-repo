function validateForm(e) {
  // e.preventDefault()
  let Valid =true
  var el = document.getElementById("error-valdation");

  let fullName = document.forms["contact-form"]["name"].value;
  let email = document.forms["contact-form"]["email"].value;
  let subject = document.forms["contact-form"]["subject"].value;
  let phone = document.forms["contact-form"]["phone"].value;
  let message = document.forms["contact-form"]["message"].value;

  var regexEmail = /\S+@\S+\.\S+/;

  document.getElementById("name").style.borderColor = "rgba(0, 0, 0, 0.05)";
  document.getElementById("email").style.borderColor = "rgba(0, 0, 0, 0.05)";
  document.getElementById("subject").style.borderColor = "rgba(0, 0, 0, 0.05)";
  document.getElementById("email").style.borderColor = "rgba(0, 0, 0, 0.05)";
  document.getElementById("phone").style.borderColor = "rgba(0, 0, 0, 0.05)";
  document.getElementById("message").style.borderColor = "rgba(0, 0, 0, 0.05)";

  if (fullName.length <= 0) {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("error-valdation").style.display = "block";
    el.innerText = "Full Name must be filled out";
    Valid = false;
    return;
  }

  if (email.length <= 0) {
    document.getElementById("email").style.borderColor = "red";

    el.innerText = "Email must be filled out";
    Valid = false;
    return;
  } else if (!regexEmail.test(email)) {
    document.getElementById("email").style.borderColor = "red";

    el.innerText = "Email Not Valid";
    Valid = false;
    return;
  }

  if (subject.length <= 0) {
    document.getElementById("subject").style.borderColor = "red";
    document.getElementById("error-valdation").style.display = "block";
    el.innerText = "Subject must be filled out";
    Valid = false;
    return;
  }

  if (phone.length < 1) {
    document.getElementById("phone").style.borderColor = "red";
    el.innerText= "Phone must be filled out"
    Valid =false
    return 
  }else if (phone.length !== 10){
    document.getElementById("phone").style.borderColor = "red";
    el.innerText= "Phone number must be 10 digit"
    Valid =false
    return
  }

  if (message.length <= 0) {
    document.getElementById("message").style.borderColor = "red";
    document.getElementById("error-valdation").style.display = "block";
    el.innerText = "Message must be filled out";
    Valid = false;
    return;
  }

  if(Valid){
    document.getElementById("error-valdation").style.display = "none";
    document.getElementById("load").style.display = "table";
      
  let data = {"data": {"Name":fullName,"Email":email,"Topic":subject,"Mobile":phone,"Message":message}}
  postData(data)
  .then(data => {
    console.log(data); 
   
  
}).finally(()=> {
  document.getElementById("contact-form").reset();
  document.getElementById("load").style.display = "none";
  document.getElementById("contact__msg").style.display = "flex" 
});
}

  // console.log(message)
}



async function postData(data) {
  const response = await fetch('https://api.apispreadsheets.com/data/zqhVhggcyQ2ShVTI/', {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json(); 
}


