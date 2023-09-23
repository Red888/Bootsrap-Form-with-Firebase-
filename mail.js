const firebaseConfig = {
    apiKey: "AIzaSyDqs53cnqVmYymvV7QOiaJQCczh2L9RoMM",
    authDomain: "fir-form-8e52b.firebaseapp.com",
    databaseURL: "https://fir-form-8e52b-default-rtdb.firebaseio.com",
    projectId: "fir-form-8e52b",
    storageBucket: "fir-form-8e52b.appspot.com",
    messagingSenderId: "273343992682",
    appId: "1:273343992682:web:6c8252d2bc181f17144b13"
  };

// initialize firebase
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var emailid = getElementVal('emailid');
  var msgContent = getElementVal('msgContent');

  saveMessage(name, emailid, msgContent);

  // enable alert message 
  document.querySelector(".alert").style.display = "block";

  // remove the alert after 3 sec
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // clear the content form
  document.getElementById("contactForm").reset();

}

const saveMessage = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
}






