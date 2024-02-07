let listaAmostrar = "";
let selectionJSON = [];
let listaFiltrada = "";
let filtrado = [];
let filtradoCta = [];
let listaFiltradaCta = "";

const selectionDOM = document.querySelector("#operacionSelection");
const filtroDOM = document.querySelector("#trFiltro");

const Link = `https://script.google.com/macros/s/AKfycbxhDC2DJ8zjZfQuI0q9fQuAxiVP8MYZWfQd_V4YK2nWC1kg03TN-JDkzwN5srC3ZtMf/exec`;

document.addEventListener("DOMContentLoaded", () => {


  const obtengoCont = (Link) => {
    fetch(Link)
      .then((response) => response.json())
      .then((data) => {
        selectionJSON = data;
        selectionJSON.forEach((cont) => {
          listaAmostrar += retornoListaContenido(cont);
        });
        selectionDOM.innerHTML = listaAmostrar;
      });
  };
  obtengoCont(Link);
});

const retornoListaContenido = (cont) => {
  const { categoriasDisponibles } = cont;
  let HTMLCard = "";
  HTMLCard += `<option value="${categoriasDisponibles}">${categoriasDisponibles}</option>`;
  return HTMLCard;
};

filtroDOM.addEventListener("click", (e) => {
  e.preventDefault();
  listaFiltrada = "";
  contenidoDOM.innerHTML = "";
  contenidoJSON = [];
  contenidoCtaJSON = [];
  filtrado = [];
  filtradoCta = [];
  cardsAmostrar = "";
  cardsCtaAmostrar = "";
  listaFiltradaCta = "";
  const obtengoContenido = (URL) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let selection = selectionDOM.value;

        filtrado = data.filter(
          (p) =>
            p.categoria === selection && p.publicar === true && p.CTA != true
        );
        filtradoCta = data.filter(
          (p) =>
            p.categoria === selection && p.publicar === true && p.CTA === true
        );

        contenidoJSON = data.filter(
          (p) => p.publicar === true && p.CTA != true
        );
        contenidoCtaJSON = data.filter(
          (p) => p.publicar === true && p.CTA === true
        );

        if (selection != "Ver todos") {
          filtrado.forEach((contenido) => {
            listaFiltrada += retornoCardContenido(contenido);
          });
          filtradoCta.forEach((contenido) => {
            listaFiltradaCta += retornoCardContenidoCta(contenido);
          });
          contenidoDOM.innerHTML = listaFiltrada + listaFiltradaCta;
        } else if (selection === "Ver todos") {


          const contenidoTotal = [...contenidoJSON, ...contenidoCtaJSON];

          // Ordenar el contenido total de mayor a menor según el id
          contenidoTotal.sort((a, b) => b.id - a.id);

          contenidoTotal.forEach((contenido) => {
            if (contenido.CTA === true) {
              cardsAmostrar += retornoCardContenidoCta(contenido);
            } else {
              cardsAmostrar += retornoCardContenido(contenido);
            }
          });

          // Imprimir las tarjetas en el orden deseado
          contenidoDOM.innerHTML = cardsAmostrar;
        }
      });
  };
  obtengoContenido(URL);
});

// let verTodof = () => {
//   const obtengoContenido = (URL) => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => {
//         contenidoJSON = data;
//         contenidoJSON.forEach((contenido) => {
//           cardsAmostrar += retornoCardContenido(contenido);
//         });
//         contenidoDOM.innerHTML = cardsAmostrar;
//       });
//   };
//   obtengoContenido(URL);
// };
