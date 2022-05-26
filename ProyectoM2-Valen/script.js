

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

// picanteando
let eventos;
function traerEventos(){
  fetch("html.json")
    .then(respuesta => respuesta.json())
    .then(datosEvento =>{
      console.log("Se cargó correctamente.", datosEvento);
            mostrarCasas(datosEvento);
            eventos = datosEvento
        }).catch(error =>{
            console.log("Hay tremendo error, andá a revisarlo.", error.message);
        });
};
traerEventos();
let carrousel = ``;
let eventres = ``;
let indice = 3;

//Función para mostrar los inmuebles en una galeria de cartas
function mostrarCasas(datosEvento){
    carrousel=`

    <div class="carousel-item active" data-bs-interval="10000">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="card bg-dark text-white">
                        <img src="${datosEvento[0].img}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${datosEvento[0].nombre}</h5>
                          <p class="card-text">${datosEvento[0].descripcion}</p>
                          <p class="card-text">${datosEvento[0].fecha}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card bg-dark text-white">
                        <img src="${datosEvento[1].img}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${datosEvento[1].nombre}</h5>
                          <p class="card-text">${datosEvento[1].descripcion}</p>
                          <p class="card-text">${datosEvento[1].fecha}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card bg-dark text-white">
                        <img src="${datosEvento[2].img}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${datosEvento[2].nombre}</h5>
                          <p class="card-text">${datosEvento[2].descripcion}</p>
                          <p class="card-text">${datosEvento[2].fecha}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
              
let carrousel2 = ``;
// for para hoja de carrusel y for para carta
for (let j = 1; j < 5; j++) {
  carrousel2 += `
  <div class="carousel-item" data-bs-interval="2000">
    <div class="container">
      <div class="row">`

          for(i=0; i <3; i++){

              let evento = datosEvento[indice];
              eventres += 
              `
            <div class="col">
              <div class="card bg-dark text-white">
                <img src="${evento.img}" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title">${evento.nombre}</h5>
                  <p class="card-text">${evento.descripcion}</p>
                  <p class="card-text">${evento.fecha}</p>
                </div>
              </div>
            </div>
              `
              console.log(eventres)
              indice += 1;
              console.log(indice)


            }              
            carrousel2 += eventres

            carrousel2 += `</div></div></div>`
eventres = ``
          }

            document.getElementById("acaTabla").innerHTML = carrousel + carrousel2;

}

/*
//Partes de busqueda


//Busqueda por palabra
let botonBusc = document.getElementById("buscar");
botonBusc = document.getElementById("buscar");
botonBusc.addEventListener("click", function (){
  buscar();
})

function buscar(){
  let coincidencia = document.getElementById("buscador").value;
  let filtrada = pisos.filter(x => x.Titulo.toLowerCase().indexOf(coincidencia.toLowerCase()) > -1);
  mostrarCasas(filtrada);
}


//Busqueda por Partner
let botonGE = document.getElementById("GE");
let botonSM = document.getElementById("SM");
let botonB = document.getElementById("B");
let botonH = document.getElementById("H");
let botonC = document.getElementById("C");

function buscarPartner(boton){
  boton.addEventListener("click", function (){
    buscarPorPartner(boton)
  })
}

function buscarPorPartner(boton){
  let filtrada = pisos.filter(x => (x.Auspiciantes == boton.id));
  mostrarCasas(filtrada)
}

buscarPartner(botonGE);
buscarPartner(botonSM);
buscarPartner(botonB);
buscarPartner(botonH);
buscarPartner(botonC);


//Busqueda por tipo
let tipo1 = document.getElementById("tipo1");
let tipo2 = document.getElementById("tipo2");
let tipo3 = document.getElementById("tipo3");

function buscarTipo(tipo){
    tipo.addEventListener("click", function (){
        buscarPorTipo(tipo)
    })
};

function buscarPorTipo(tipo){
    let filtrada = pisos.filter(x => x.TipoResidencia == tipo.text);
    mostrarCasas(filtrada)
};

buscarTipo(tipo1);
buscarTipo(tipo2);
buscarTipo(tipo3);


//Busqueda por lugar
let lugar1 = document.getElementById("lugar1");
let lugar2 = document.getElementById("lugar2");
let lugar3 = document.getElementById("lugar3");
let lugar4 = document.getElementById("lugar4");
let lugar5 = document.getElementById("lugar5");

function buscarLugar(lugar){
    lugar.addEventListener("click", function (){
        buscarPorLugar(lugar)
    })
};

function buscarPorLugar(lugar){
    let filtrada = pisos.filter(x => x.Barrio == lugar.text);
    mostrarCasas(filtrada)
};

buscarLugar(lugar1);
buscarLugar(lugar2);
buscarLugar(lugar3);
buscarLugar(lugar4);
buscarLugar(lugar5);


//Busqueda por intereses
let interes1 = document.getElementById("interes1");
let interes2 = document.getElementById("interes2");

function buscarInteres(interes){
    interes.addEventListener("click", function (){
        buscarPorInteres(interes)
    })
};

function buscarPorInteres(interes){
    let filtrada = pisos.filter(x => x.TipoTramite == interes.text);
    mostrarCasas(filtrada)
};

buscarInteres(interes1);
buscarInteres(interes2);


//Busqueda por precios
let precioRango = document.getElementById("precioRango");
let min = 0;
let max;

precioRango.addEventListener("click", function (){
    min = parseInt(document.getElementById("min").value);
    max = parseInt(document.getElementById("max").value);
    buscarPorPrecio(min, max)
})

function buscarPorPrecio(min, max){
    let filtrada1 = pisos.filter(x => x.Precio >= min);
    let filtrada2 = filtrada1.filter(x => x.Precio <= max)
    mostrarCasas(filtrada2)
};

*/
//Busqueda por habitaciones
//Busqueda por Dimensiones
