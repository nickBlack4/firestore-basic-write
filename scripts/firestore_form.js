// Initialize Firebase
// YOU NEED TO PUT YOUR INFO HERE
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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


