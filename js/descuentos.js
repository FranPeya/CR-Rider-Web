// Definir las variables globales
let cardsAmostrar = "";
let cardsCtaAmostrar = "";
let contenidoJSON = [];
let contenidoCtaJSON = [];
let verMas = "";
let detalleJSON = [];

const contenidoDOM = document.querySelector("#contenido");
const cargandoDOM = document.querySelector("#cargando");

// URL para obtener los datos
const URL = `https://script.google.com/macros/s/AKfycbzcXd920taU3ukZ54VcRKpAofdr33c3WTHqdSGbEnAhT5yQxj3_vCmtJ4WQB98MqfcS/exec`;

// Función para generar la tarjeta de contenido
const retornoCardContenido = (contenido) => {
    const {
        id,
        track_id,
        logo,
        descripcion,
        descuento,
        nombre,
        obtener_descuento,
        disponibilidad,
      } = contenido;
      let HTMLCard = "";
      HTMLCard += `<div class="col-3 row row-cols-12  text-center m-0 px-0 py-3">
    <a id="${track_id}" href="" class="tarjeta-descuento p-0" data-bs-toggle="modal" data-bs-target="#${track_id}Modal"> 
    <div class="" >
      <div class="col-12">
        <div class="card mx-3 rounded-4">
          <table  class="banner ">
            <tr style="height:10px;">
              <th rowspan="2"  bgcolor="#100423" class=" py-3 text-center rounded-top">
        
                <img src="${logo}" class="logo-convenio card-img-top rounded-3" alt="...">
        
              </th>
              
        
        
        
            </tr>
                      
          </table>
          <div class="card-body">
            <h4 class="card-title">${nombre}</h4>
    
            <h1 class="descuento">${descuento}</h1>
            <p class="card-text">${descripcion}</p>
          </div>
        </div>
      </div>
    </div></a>
    </div>
    
    
    
    <!-- Modal -->
    <div class="modal fade" id="${track_id}Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
           
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <table  class="banner ">
            <tr style="height:10px;">
              <th rowspan="2"  bgcolor="#100423" class=" py-3 text-center rounded-top">
        
                <img src="${logo}" class="logo-convenio card-img-top rounded-3" alt="...">
        
              </th>
              
        
        
        
            </tr>
                      
          </table>
         
          <div class="modal-body">
            <h2>Pasos para acceder:</h2>
            <p>${obtener_descuento}</p>
    
              <h2>Disponible en</h2>
              <p>${disponibilidad}</p>
          </div>
          <div class="modal-footer">
          
          </div>
        </div>
      </div>
    </div>`;
      return HTMLCard;
};

// Función para generar la tarjeta de contenido con CTA
const retornoCardContenidoCta = (contenido) => {
    const {
        id,
        track_id,
        logo,
        descripcion,
        descuento,
        nombre,
        obtener_descuento,
        disponibilidad,
        link_cta,
      } = contenido;
      let HTMLCard = "";
      HTMLCard += `<div class="col-3 row row-cols-12  text-center m-0 px-0 py-3">
    <a id="${track_id}" href="#" class="tarjeta-descuento p-0" data-bs-toggle="modal" data-bs-target="#${track_id}Modal"> 
    <div class="">
      <div class="col-12">
        <div class="card mx-3 rounded-4">
          <table  class="banner ">
            <tr style="height:10px;">
              <th rowspan="2"  bgcolor="#100423" class=" py-3 text-center rounded-top">
        
                <img src="${logo}" class="logo-convenio card-img-top rounded-3" alt="...">
        
              </th>
              
        
        
        
            </tr>
                      
          </table>
          <div class="card-body">
            <h4 class="card-title">${nombre}</h4>
    
            <h1 class="descuento">${descuento}</h1>
            <p class="card-text">${descripcion}</p>
          </div>
        </div>
      </div>
    </div></a>
    </div>
    
    
    
    <!-- Modal -->
    <div class="modal fade" id="${track_id}Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
           
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <table  class="banner ">
            <tr style="height:10px;">
              <th rowspan="2"  bgcolor="#100423" class=" py-3 text-center rounded-top">
        
                <img src="${logo}" class="logo-convenio card-img-top rounded-3" alt="...">
        
              </th>
              
        
        
        
            </tr>
                      
          </table>
         
          <div class="modal-body">
            <h2>Pasos para acceder:</h2>
            <p>${obtener_descuento}</p>
    
              <h2>Disponible en</h2>
              <p>${disponibilidad}</p>
          </div>
          <div class="modal-footer">
            <a href="${link_cta}" type="button" class="btn btn-primary" >Ir a la página</a>
          </div>
        </div>
      </div>
    </div>`;
      return HTMLCard;
};

// Función para generar las tarjetas

  document.addEventListener("DOMContentLoaded", () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {

        contenidoJSON = data.filter((p) => p.publicar === true)


        contenidoJSON.forEach((contenido) => {
          if (contenido.CTA) {
            cardsAmostrar += retornoCardContenidoCta(contenido);
          } else {
            cardsAmostrar += retornoCardContenido(contenido);
          }
        });
  
        // Ordenar el contenido total de mayor a menor según el id
        const contenidoOrdenado = [...contenidoJSON].sort((a, b) => b.id - a.id);
  
        contenidoDOM.innerHTML = contenidoOrdenado.map((contenido) => {
          if (contenido.CTA) {
            return retornoCardContenidoCta(contenido);
          } else {
            return retornoCardContenido(contenido);
          }
        }).join("");
      });
  });