let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


const firebaseConfig = {
  apiKey: "AIzaSyCtdV-AOVaBau51I68zaIJ-QW-ncOFPwCc",
  authDomain: "crescent-public-school-49ef7.firebaseapp.com",
  databaseURL: "https://crescent-public-school-49ef7-default-rtdb.firebaseio.com",
  projectId: "crescent-public-school-49ef7",
  storageBucket: "crescent-public-school-49ef7.appspot.com",
  messagingSenderId: "790706971092",
  appId: "1:790706971092:web:3bea2955f192a63a767641",
  measurementId: "G-PBTPHQYGZQ"
};
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
    }, 3000);


    document.getElementById('contactForm').reset();
}


const saveMessages = (name, emailid, msgContent) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        msgContent : msgContent,
    })
};



const getElementVal = (id) =>{
    return document.getElementById(id).value;
}