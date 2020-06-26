// LOGIN DEFAULT

function Firebase_Login(userEmail,userPass){
    userEmail = userEmail.value;
    userPass = userPass.value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        if(errorMessage == "The password is invalid or the user does not have a password."){
            window.alert("Senha inválida ou usuário não cadastrado.")
        }
        else if(errorMessage == "The email address is badly formatted."){
            window.alert("O endereço de email está mal formatado ou não foi preenchido.")
        }
        // ...
    });
}

// $LOGIN DEFAULT

// LOGOUT

function Firebase_Logout(){
    firebase.auth().signOut();  
}

// $LOGOUT

// LOGIN GOOGLE

// $LOGIN GOOGLE

// LOGIN FACEBOOK

// $LOGIN FACEBOOK

// CADASTRAR



// $CADASTRAR


// SIGNED

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
    } else{
    }
});

// $SIGNED
