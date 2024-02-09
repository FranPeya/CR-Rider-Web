const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
const analytics = document.getElementById('analytics');
let prevScrollPos = window.pageYOffset;
let isScrollingUp = false;

document.addEventListener("DOMContentLoaded", () => {

  const contenidoAnalytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-12C90M0V3Z"></script>

  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-12C90M0V3Z');
  </script>`


  const contenidoNavbar = `<div class="container">
  <a class="navbar-brand " href="../CR-Rider-Web/index.html">
    <img src="https://i.postimg.cc/L5dxHpYL/logo-riders.png" alt="Logo Desktop" class="d-none d-lg-inline logo-desktop img-fluid" style="max-width: 130px;">
    <img src="https://i.postimg.cc/fRchtmGS/logo-rider-reducido.png" alt="Logo Mobile" class="d-lg-none logo-mobile img-fluid" style="max-width: 100px;">
  </a>

  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="navbarOffcanvas">
    <div class="offcanvas-header ps-5">
      <h5 class="offcanvas-title text-white">Menu</h5>
      <button type="button" class="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
    </div>
    <div class="offcanvas-body justify-content-end ps-5">
      <ul class="navbar-nav justify-content-end">
        <li class="nav-item py-2">
        
        <a class="nav-link text-white nav-cat" href="../CR-Rider-Web/centro.html">
        <img src="/img/Help.svg" alt="Logo Mobile" class="d-lg-none logo-mobile img-fluid" style="width: 30px;padding-right:5px">  Centro de autogestión</a>
        </li>
        <li class="nav-item py-2">
          <a class="nav-link text-white nav-cat" href="../CR-Rider-Web/seguridad.html">
          <img src="/img/Security.svg" alt="Logo Mobile" class="d-lg-none logo-mobile img-fluid" style="width: 30px;padding-right:5px"> 
          Seguridad</a>
        </li>
        <li class="nav-item py-2">
        <a class="nav-link text-white nav-cat" href="../CR-Rider-Web/descuentos.html">
        <img src="/img/Discount.svg" alt="Logo Mobile" class="d-lg-none logo-mobile img-fluid" style="width: 30px;padding-right:5px"> 
        Descuentos</a>
      </li>
      <li class="nav-item py-2">
        <a class="nav-link text-white nav-cat" href="../CR-Rider-Web/aplicantes.html">
        <img src="/img/Information.svg" alt="Logo Mobile" class="d-lg-none logo-mobile img-fluid" style="width: 30px;padding-right:5px"> 
        ¿Qué necesito para aplicar?</a>
      </li>
        <li class="nav-item py-2">
          <a class="nav-link text-white nav-cat" href="#">
          <img src="../img/Moto.svg" alt="Logo Mobile" class="d-lg-none logo-mobile img-fluid" style="width: 30px;padding-right:5px"> 
          Regístrate aquí</a>
        </li>
      </ul>
    </div>
  </div>
</div>`;

  const contenidoFooter = `<footer class="footer bg-dark text-white py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h5 class="mb-3">Información de contacto</h5>
        <p>Dirección: 123 Calle Principal, Ciudad</p>
        <p>Teléfono: +1 234 567890</p>
        <p>Email: info@example.com</p>
      </div>
      <div class="col-md-6">
        <h5 class="mb-3"><u>Enlaces útiles</u></h5>
        <ul class="list-unstyled">
          <li><a href="#">Acerca de nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 text-center">
        <p style="font-size:12px">&copy; <span id="currentYear"></span> PedidosYa. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
 </footer>`;
 analytics.innerHTML = contenidoAnalytics;
  footer.innerHTML = contenidoFooter;
  navbar.innerHTML = contenidoNavbar;

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      isScrollingUp = true;
      navbar.classList.remove('hidden');
      navbar.classList.add('fixed');
    } else {
      if (isScrollingUp) {
        navbar.classList.add('hidden');
        navbar.classList.remove('fixed');
        isScrollingUp = false;
      }
    }
  
    prevScrollPos = currentScrollPos;
  
    if (window.scrollY === 0) {
      navbar.classList.remove('fixed');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Obtener el elemento del año actual
  var currentYearElement = document.getElementById("currentYear");

  // Verificar si el elemento existe antes de actualizar el contenido
  if (currentYearElement) {
    // Obtener el año actual
    var currentYear = new Date().getFullYear();

    // Actualizar el contenido del elemento con el año actual
    currentYearElement.textContent = currentYear;
  }
});
