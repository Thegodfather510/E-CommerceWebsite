  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBb5M6Gxh12z8F2jYQScHJuZLi6nEmOVnU",
    authDomain: "test2-20cee.firebaseapp.com",
    projectId: "test2-20cee",
    storageBucket: "test2-20cee.appspot.com",
    messagingSenderId: "138724384678",
    appId: "1:138724384678:web:502c23008254edbc1df967",
    measurementId: "G-1JJ1GFK460"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const auth = firebase.auth();
  const form = document.querySelector('#RegForm');

    form.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = form.email.value;
    var password = form.password.value;

    auth.createUserWithEmailAndPassword(email, password).then(promise => {
        alert("Signed Up");
        console.log(promise);
    }).catch(e => alert(e.message));
    //promise.catch();

    })
    
    /*let x1=document.getElementById('RegForm').elements['email'].value;
    alert(x1);*/
    
