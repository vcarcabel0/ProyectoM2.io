//Cards
var contenido

function api(){
    fetch("api.json")
        .then(res=> res.json())
        .then(data =>{
            //console.log(data);
            mostrarCasa(data)
            //ordenarTipo(data)
            //ordenarInteres(data)

    });
};
api();
function mostrarTarjeta(data){
    contenido = `
     <div class="album py-5">
        <div class="container">
            <div class="row">`;
    for(let casa of data){
        contenido +=
            `<div class="col col-md-4 col-lg-3">
                <div class=" card mb-4">
                    <img class = "card-img-top cardIm" src="${casa.imagen}">
                    <div class="card-body bg-dark"
                    <br>
                        <p class = "card-text text-light"> U$S <span class="text-danger"> ${casa.precio} </span> </p>
                        <p class = "card-text text-light"> Numero de habitaciones:  <span class=" text-danger"> ${casa.numerohab} </span> </p>
                        <p class = "card-text text-light"> Tipo: <span class=" text-danger"> ${casa.tipo} </span> </p>
                        <p class = "card-text text-light"> Metros: <span class=" text-danger"> ${casa.metros} m2 </span> </p>
                        <p class = "card-text text-light"> Barrio: <span class=" text-danger"> ${casa.barrio} </span>  </p>
                        <p class = "card-text text-light"> Interes: <span class=" text-danger"> ${casa.interes} </span>  </p>
                    </div>
                </div>
                </div>
                <div class = "w-100 d-none d-sm-block d-md-none"></div>`
            };
            contenido +=
            `       </div>
            </div>
            </div>`
            document.getElementById("casas").innerHTML = contenido;
        }
