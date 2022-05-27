

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
            mostrarCartas(datosEvento);
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
function mostrarCartas(datosEvento){
    carrousel=`

    <div class="carousel-item active" data-bs-interval="1000">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="card bg-success text-white">
                        <img src="${datosEvento[0].img}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${datosEvento[0].nombre}</h5>
                          <p class="card-text">${datosEvento[0].descripcion}</p>
                          <p class="card-text">${datosEvento[0].fecha}</p>
                          <button class="box" id ="${datosEvento[0].id}">Ver</button>

                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card bg-success text-white">
                        <img src="${datosEvento[1].img}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${datosEvento[1].nombre}</h5>
                          <p class="card-text">${datosEvento[1].descripcion}</p>
                          <p class="card-text">${datosEvento[1].fecha}</p>
                          <button class="box" id ="${datosEvento[1].id}">Ver</button>

                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card bg-success text-white">
                        <img src="${datosEvento[2].img}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${datosEvento[2].nombre}</h5>
                          <p class="card-text">${datosEvento[2].descripcion}</p>
                          <p class="card-text">${datosEvento[2].fecha}</p>
                          <button class="box" id ="${datosEvento[2].id}">Ver</button>

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
  <div class="carousel-item" data-bs-interval="2500">
    <div class="container">
      <div class="row">`

          for(i=0; i <3; i++){

              let evento = datosEvento[indice];
              eventres += 
              `
            <div class="col">
              <div class="card bg-success text-white">
                <img src="${evento.img}" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title">${evento.nombre}</h5>
                  <p class="card-text">${evento.descripcion}</p>
                  <p class="card-text">${evento.fecha}</p>
                  <button class="box" id ="${evento.id}">Ver</button>
                </div>
              </div>
            </div>
              `
              indice += 1;


            }              
            carrousel2 += eventres

            carrousel2 += `</div></div></div>`
eventres = ``
          }

            document.getElementById("acaTabla").innerHTML = carrousel + carrousel2;

            const cbox = document.querySelectorAll(".box");
            for (let i = 0; i < cbox.length; i++) {
            cbox[i].addEventListener("click", function() {
            cbox[i].style.color = "red";
            guardarLocal(cbox[i].id)
            obtenerCarta(eventos)

  });
}

}



//guardar local

function guardarLocal(idTocado){
    console.log(idTocado);
    localStorage.setItem("IdTocado", idTocado);
    console.log(localStorage.getItem("IdTocado"))

}   


//carta especifica
function obtenerCarta(cartas){
    let cartaId = localStorage.getItem("IdTocado");
    console.log(cartaId)
    let carta = cartas.filter(x => (x.id == cartaId));
    console.log(carta)
    mostrarInfo(carta);
  
}


//mostrar Carta
let cartaHtml = ``;
function mostrarInfo(carta){
  let card = `<div class="container my-5">
            <div class="row d-flex justify-content-center">
              <div class="col-7 text-center">
                <div class="card border-success mb-3 w-100 h-75">
                  <div class="card-header bg-transparent border-success text-center">${carta[0].evento}</div>
                  <div class="card-body text-success">
                    <h5 class="card-title">${carta[0].nombre}</h5>
                    <p class="card-text">${carta[0].descripcion}</p>
                  </div>
                  <div class="card-footer bg-transparent border-success text-center">${carta[0].fecha}</div>
                </div>
              </div>
              <div class="col-4">
                <div class="card mb-3 bg-success">
                  <img src="${carta[0].img}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <table class="table table-dark table-hover ">
                      <thead>
                        <tr>
                          <th scope="col">Duracion</th>
                          <th scope="col">Lugar</th>
                          <th scope="col">Disponibles</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>`
                      let tablaCarta = ``
                      for (let i = 0; i < 4; i++) {
                        tablaCarta +=                         
                        `<tr>
                          <td>${carta[0].Salas[i]}</td>
                          <td>${carta[0].precio[i]}</td>
                          <td>${carta[0].disponible[i]}</td>
                          <th scope="row"><button class="btn btn-success">Comprar</button></th>
                        </tr>`
                      }
                        card += tablaCarta + 
                        `
                      </tbody>
                    </table>
                  </div>
                </div>  
              </div>
            </div>
          </div>`
          document.getElementById("mostrarEspecifico").innerHTML = card;

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
