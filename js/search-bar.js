let suggestions = [];

const listaURL = `https://script.google.com/macros/s/AKfycbzSwf1o3EecyeNAjPNCjzVnV6Kl3B2fIuYedOXcLQad1-38VCDODIeinksxzPzjVKbZ/exec`;

// Getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// Function to show loading icon
function showLoadingIcon() {
  icon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
}

// Function to hide loading icon
function hideLoadingIcon() {
  icon.innerHTML = '<i class="fas fa-search"></i>';
}

// Function to display "Lo siento, prueba con otra palabra" message
function displayNoResultsMessage() {
  
  resultBox.innerHTML = "<p>Lo siento, prueba con otra palabra.</p>";
}

// Function to clear the results
function clearResults() {
  resultBox.innerHTML = "";
  searchInput.classList.remove("active")
}

// If the user presses the Enter key
input.addEventListener("keyup", (e) => {
  
  if (e.key === "Enter") {
    let userData = e.target.value.trim(); // User entered data

    if (userData === "") {
      clearResults();
      return;
    }

    let emptyArray = [];

    showLoadingIcon();

    fetch(listaURL)
      .then((response) => response.json())
      .then((data) => {
        emptyArray = data.filter((dataP) => {
          // Filtering array value and user characters to lowercase and return only those words which start with user entered chars
          return dataP.pregunta
            .toLocaleLowerCase()
            .includes(userData.toLocaleLowerCase());
        });

        if (emptyArray.length === 0) {
          displayNoResultsMessage()
        } else {
          emptyArray = emptyArray.map((dataP) => {
            // Passing return data inside li tag
            return (
              '<div class="accordion-item"> <h2 class="accordion-header" id="flush-heading' +
              dataP.id +
              '"><button id="'+ dataP.id +
              '" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' +
              dataP.id +
              '" aria-expanded="false" aria-controls="flush-collapse' +
              dataP.id +
              '"><p>' +
              dataP.pregunta +
              "</p></button> </h2><div id='flush-collapse" +
              dataP.id +
              "' class='accordion-collapse collapse' aria-labelledby='flush-heading" +
              dataP.id +
              "' data-bs-parent='#accordionFlushExample'><div class='accordion-body'> <p>" +
              dataP.respuesta +
              "</p></div></div></div></div>"
              
            );
          });

          searchInput.classList.add("active"); // Show autocomplete box
          showSuggestions(emptyArray);
          let allList = resultBox.querySelectorAll("li");
          for (let i = 0; i < allList.length; i++) {
            // Adding onclick attribute to all li tags
            allList[i].setAttribute("onclick", "select(this)");
          }
        }

        hideLoadingIcon();
      });
  }
});

// Clear the results when the input is empty
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    clearResults();
  }
});

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    listData = "";
  } else {
    listData = list.join("");
  }
  resultBox.innerHTML = listData;
}



