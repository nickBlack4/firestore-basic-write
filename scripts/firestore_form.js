// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCEehkaC-8U5007XmitXuHdkYMiD1skqqc",
    authDomain: "scm2-94a82.firebaseapp.com",
    databaseURL: "https://scm2-94a82.firebaseio.com",
    projectId: "scm2-94a82",
    storageBucket: "scm2-94a82.appspot.com",
    messagingSenderId: "321283054862",
    appId: "1:321283054862:web:b3f44ff4795f445fdb4b5f",
    measurementId: "G-N5GYQV9V2B"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const docRef = firestore.doc("users/person");


const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    docRef.set({
        firstName: firstNameValue,
        lastName: lastNameValue,
    }).then(function() {
        console.log("Status saved!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    })
});


