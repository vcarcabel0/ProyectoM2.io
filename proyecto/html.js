//Cards
var contenido

function api(){
    fetch("api.json")
        .then(res=> res.json())
        .then(data =>{
            //console.log(data);
            mostrarEventos(data)
            //ordenarTipo(data)
            //ordenarInteres(data)

    });
};
api();
function mostrarEventos(data){
    contenido = `
     <div class="album py-5">
        <div class="container">
            <div class="row">`;
    for(let casa of data){
        contenido +=
            `<div class="col col-md-4 col-lg-3">
                <div class=" card mb-4">
                    <img class = "card-img-top cardIm" src="${evento.imagen}">
                    <div class="card-body bg-dark"
                    <br>
                        <p class = "card-text text-light"> Sala <span class="text-danger"> ${evento.sala} </span> </p>
                        <p class = "card-text text-light"> Lugares:  <span class=" text-danger"> ${evento.lugares} </span> </p>
                        <p class = "card-text text-light"> Sector  <span class=" text-danger"> ${evento.sector} </span> </p>
                        <p class = "card-text text-light"> Ubicacion: <span class=" text-danger"> ${evento.ubicacion} m2 </span> </p>
                        <p class = "card-text text-light"> Precio: <span class=" text-danger"> ${evento.precio} </span>  </p>
                        <p class = "card-text text-light"> Interes: <span class=" text-danger"> ${evento.interes} </span>  </p>
                        
                  </div>

                </div>
                </div>
                <div class = "w-100 d-none d-sm-block d-md-none"></div>`
            };
            contenido +=
            `       </div>
            </div>
            </div>`
            document.getElementById("eventos").innerHTML = contenido;
        }
