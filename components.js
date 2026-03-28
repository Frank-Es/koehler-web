// Shared navigation and footer for all Koehler pages
// Include this script in each page: <script src="components.js"></script>

function getNavHTML(activePage) {
  return `
  <nav>
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-name">KOEHLER</span>
      <div class="nav-logo-line"></div>
      <span class="nav-logo-sub">Assets Representation</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='inicio'?'class="active"':''}>Inicio</a></li>
      <li><a href="compra.html" ${activePage==='compra'?'class="active"':''}>Busco un Activo</a></li>
      <li><a href="venta.html" ${activePage==='venta'?'class="active"':''}>Venda su Activo</a></li>
      <li><a href="arquitectura.html" ${activePage==='arquitectura'?'class="active"':''}>Arquitectura & Interiorismo</a></li>
      <li><a href="club1512.html" ${activePage==='club'?'class="active"':''}>Club 1512</a></li>
      <li><a href="colaboradores.html" ${activePage==='colaboradores'?'class="active"':''}>Red de Colaboradores</a></li>
      <li><a href="equipo.html" ${activePage==='equipo'?'class="active"':''}>El Equipo</a></li>
      <li><a href="talento.html" ${activePage==='talento'?'class="active"':''}>Trabaja con Nosotros</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="nav-mobile" id="navMobile">
    <a href="index.html">Inicio</a>
    <a href="compra.html">Busco un Activo</a>
    <a href="venta.html">Venda su Activo</a>
    <a href="arquitectura.html">Arquitectura & Interiorismo</a>
    <a href="club1512.html">Club 1512</a>
    <a href="colaboradores.html">Red de Colaboradores</a>
    <a href="equipo.html">El Equipo</a>
    <a href="talento.html">Trabaja con Nosotros</a>
  </div>`;
}

function getFooterHTML() {
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo" style="display:inline-flex;">
            <span class="nav-logo-name" style="font-size:24px;">KOEHLER</span>
            <div class="nav-logo-line"></div>
            <span class="nav-logo-sub">Assets Representation</span>
          </a>
          <p class="footer-tagline">Gestión estratégica de activos singulares.<br>Discreción absoluta. Rigor jurídico.</p>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Servicios</div>
          <ul>
            <li><a href="compra.html">Busco un Activo</a></li>
            <li><a href="venta.html">Venda su Activo</a></li>
            <li><a href="arquitectura.html">Arquitectura & Interiorismo</a></li>
            <li><a href="club1512.html">Club 1512</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">La Firma</div>
          <ul>
            <li><a href="equipo.html">El Equipo</a></li>
            <li><a href="colaboradores.html">Red de Colaboradores</a></li>
            <li><a href="talento.html">Trabaja con Nosotros</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Legal</div>
          <ul>
            <li><a href="index.html#legal">Aviso Legal</a></li>
            <li><a href="index.html#privacidad">Privacidad</a></li>
            <li><a href="index.html#cookies">Cookies</a></li>
            <li><a href="mailto:info@koehlerassets.com">info@koehlerassets.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">©2026 Koehler Assets Representation · Madrid, España</span>
        <div class="footer-social">
          <a href="https://www.instagram.com/koehlerassets/" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/company/koehler-assets/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function initNav(activePage) {
  document.getElementById('nav-placeholder').innerHTML = getNavHTML(activePage);
  document.getElementById('footer-placeholder').innerHTML = getFooterHTML();

  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      navMobile.classList.toggle('open');
    });
  }
}
