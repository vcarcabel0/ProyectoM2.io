//Cards
var contenido

function api(){
    fetch("html.json")
        .then(res=> res.json())
        .then(data =>{
            //console.log(data);
            mostrarEventos(data)
            //ordenarTipo(data)
            //ordenarInteres(data)

    });
};
api();

function mostrarEventos(data)
{
    contenido =  `
     <div class="album py-5">
        <div class="container">
            <div class="row">`;
    for(let eventos of data){
        contenido +=
            `<div class="col col-md-4 col-lg-3  col-12">
                <div class=" card mb-4">
                    <img class = "card-img-top cardIm" src="${eventos.img}">
                    <div class="card-body bg-dark"
                    <br>
                        <p class = "card-text text-light"> Nombre:  <span class=" text-danger"> ${eventos.nombre} </span> </p>
                        <p class = "card-text text-light"> Descripcion  <span class=" text-danger"> ${eventos.descripcion} </span> </p>
                        <p class = "card-text text-light"> Fecha: <span class=" text-danger"> ${eventos.fecha} m2 </span> </p>
                        <p class = "card-text text-light"> Lugar: <span class=" text-danger"> ${eventos.Lugar} </span>  </p>
                        <p class = "card-text text-light"> Disponible: <span class=" text-danger"> ${eventos.disponible} </span>  </p>
                        <p class = "card-text text-light"> precio <span class="text-danger"> ${eventos.precio} </span> </p>
                        <p class = "card-text text-light"> evento <span class="text-danger"> ${eventos.evento} </span> </p>
                        <p class = "card-text text-light"> local<span class="text-danger"> ${eventos.Local } </span> </p>
                        <p class = "card-text text-light"> duracion <span class="text-danger"> ${eventos.Duracion} </span> </p>
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
        
        
    
