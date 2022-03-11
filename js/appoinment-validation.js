console.log("hello")
const form = document.getElementById('form')

function validateForm(e) {
    // e.preventDefault()
    let Valid =true
    var el = document.getElementById('err-txt')
    el.innerText= ' '
    let message = document.forms["form"]["message"].value;
    let category = document.forms["form"]["category"].value;
    let date = document.forms["form"]["date"].value;
    let doctors = document.forms["form"]["doctors"].value;
    let email = document.forms["form"]["email"].value;
    let name = document.forms["form"]["names"].value;
    let mobile = document.forms["form"]["mobile"].value;

    var regexEmail = /\S+@\S+\.\S+/;

    document.getElementById("category").style.borderColor = "rgba(0, 0, 0, 0.05)";
    document.getElementById("doctors").style.borderColor = "rgba(0, 0, 0, 0.05)";
    document.getElementById("date").style.borderColor = "rgba(0, 0, 0, 0.05)";
    document.getElementById("email").style.borderColor = "rgba(0, 0, 0, 0.05)";
    document.getElementById("names").style.borderColor = "rgba(0, 0, 0, 0.05)";
    document.getElementById("mobile").style.borderColor = "rgba(0, 0, 0, 0.05)";
    document.getElementById("message").style.borderColor = "rgba(0, 0, 0, 0.05)";

    console.log(mobile.length)
    
    if (category.length < 5) {
      document.getElementById("category").style.borderColor = "red";
      
      alert("Category must be filled out");
      el.innerText= "Category must be filled out";
      Valid =false
      return false;
    }
    if (doctors.length < 5) {
        document.getElementById("doctors").style.borderColor = "red";
        
        alert("Doctors must be filled out");
        el.innerText=  "Doctors must be filled out"
        Valid =false
        return false;
      }
      if (date.length <= 0) {
        document.getElementById("date").style.borderColor = "red";
        
        alert("Date must be filled out");
        el.innerText= "Date must be filled out"
        Valid =false
        return false;
      }
      if (email.length <= 0) {
        document.getElementById("email").style.borderColor = "red";
        
        alert("Email must be filled out");
        el.innerText= "Email must be filled out"
        Valid =false
        return false;
      }else if(!regexEmail.test(email)){
        document.getElementById("email").style.borderColor = "red";
        
        alert("Email not Valid");
        el.innerText= "Email Not Valid"
        Valid =false
        return false
        
      }
      if (name.length <= 0) {
        document.getElementById("names").style.borderColor = "red";
        
        alert("Name must be filled out");
        el.innerText= "Name must be filled out"
        Valid =false
        return false;
      }
      if (mobile.length < 1) {
        document.getElementById("mobile").style.borderColor = "red";
        alert("Phone must be filled out");
        el.innerText= "Phone must be filled out"
        Valid =false
        return false;
      }else if (mobile.length !== 10){
        document.getElementById("mobile").style.borderColor = "red";
        alert("Phone number must be 10 digit");
        el.innerText= "Phone number must be 10 digit"
        Valid =false
        return false
      }
     

      if (message.length <= 0) {
        document.getElementById("message").style.borderColor = "red";
        alert("Message must be filled out");
        el.innerText= "Message must be filled out"
        Valid =false
        return false;
      }

      if(Valid){
        document.getElementById("load").style.display = "table";
          
      let data = {"data": {"category":category,"doctors":doctors,"date":date,"email":email,"name":name,"phone":mobile,"message":message}}
      postData(data)
      .then(data => {
        console.log(data); 
       
      }).finally(()=>  window.location.assign('confirmation.html'));
    }
      

    //   window.location.assign('/confirmation.html')
      console.log('nice')
}  


async function postData(data) {
    const response = await fetch('https://api.apispreadsheets.com/data/kAF5v8bajF6Y6np3/', {
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
  
  