let listRegistro = ""
let listInd = ""

let listCuenta = ""
let contenidoJSON = []
let verMas = ""
let detalleJSON = []




const contenidoRegistroDOM = document.querySelector("#registro")
const contenidoIndDOM = document.querySelector("#indumentaria")
const contenidoCuentaDOM = document.querySelector("#cuenta")

const URL=`https://script.google.com/macros/s/AKfycbz-ff4iuvCdo4yn_2ECDrpMgBbgqhQbhLnml4SWZvmL3TLKruJtgSrxR3LGHleTNWbA7A/exec`




document.addEventListener("DOMContentLoaded", ()=> {

 const obtengoContenido = (URL)=> {
  fetch(URL)
  .then(response => response.json() )
  .then(data=> { 
     
        filtrado = data.filter( p => p.categoria === "Etapa de registro" )
        console.log(filtrado)
        filtrado.forEach(contenido => {
            listRegistro += retornoCardContenido(contenido)
        })
        contenidoRegistroDOM.innerHTML = listRegistro

        filtrado = data.filter( p => p.categoria === "Equipamiento" )
        console.log(filtrado)
        filtrado.forEach(contenido => {
            listInd += retornoCardContenido(contenido)
        })
        contenidoIndDOM.innerHTML = listInd


        filtrado = data.filter( p => p.categoria === "Ya tengo mi cuenta" )
        console.log(filtrado)
        filtrado.forEach(contenido => {
            listCuenta += retornoCardContenido(contenido)
        })
        contenidoCuentaDOM.innerHTML = listCuenta


      

     })}
     obtengoContenido(URL)


 
  //  seleccionDePais()
   
          })



const retornoCardContenido = (contenido)=> {
   
            const {categoria,pregunta, id, respuesta} = contenido
               let HTMLCard = ""
                     HTMLCard += `<div class="accordion-item">
                     <h2 class="accordion-header" id="flush-heading${id}">
                       <button id=${id} class="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${id}" aria-expanded="false" aria-controls="flush-collapse${id}">
                        <p class="m-0 py-2"> ${pregunta}</p>
                       </button>
                     </h2>
                     <div id="flush-collapse${id}" class="accordion-collapse collapse" aria-labelledby="flush-heading${id}" data-bs-parent="#accordionFlushExample">
                       <div class="accordion-body"> <p>${respuesta}</p>
                         
                         </div>
                     </div>
                   </div>`
               return HTMLCard
         }


        