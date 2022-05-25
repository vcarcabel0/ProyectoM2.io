//transicion

const btnSignIn = document.querySelector(".sign-in-btn");
const btnSignUp = document.querySelector(".sign-up-btn");
const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");

document.addEventListener("click", e =>{
    if(e.target === btnSignIn || e.target === btnSignUp){
        signIn.classList.toggle("active");
        signUp.classList.toggle("active");
    }
});
//login

const user = "tuki"
const contra = "tuki123"

function acceder() {
    localStorage.setItem("Usuario", document.getElementById("usuario").value);
    localStorage.setItem("Contraseña", document.getElementById("contraseña").value);
    
    if ((document.getElementById("usuario").value === user) && (document.getElementById("contraseña").value === contra)) {
        location.href="";
    } else {
        alert("El usuario o la contraseña no son los correctos...Por favor intentelo de nuevo");
    }
};