// KOEHLER Assets Representation — Shared components + i18n
// Language: ES (default), EN, DE

const i18n = {
  es: {
    nav: {
      inicio: 'Inicio', compra: 'Busco un Activo', venta: 'Venda su Activo',
      financiacion: 'Financiación', arquitectura: 'Arquitectura & Interiorismo',
      club: 'Club 1512', colaboradores: 'Red de Colaboradores',
      equipo: 'El Equipo', talento: 'Trabaja con Nosotros',
    },
    footer: {
      servicios: 'Servicios', lafirma: 'La Firma', legal: 'Legal',
      tagline: 'Gestión estratégica de activos singulares.<br>Discreción absoluta. Rigor jurídico.',
      aviso: 'Aviso Legal', privacidad: 'Privacidad', cookies: 'Cookies',
      copy: '©2026 Koehler Assets Representation · Madrid, España',
    }
  },
  en: {
    nav: {
      inicio: 'Home', compra: 'Find an Asset', venta: 'Sell your Asset',
      financiacion: 'Financing', arquitectura: 'Architecture & Interior Design',
      club: 'Club 1512', colaboradores: 'Partner Network',
      equipo: 'The Team', talento: 'Join Us',
    },
    footer: {
      servicios: 'Services', lafirma: 'The Firm', legal: 'Legal',
      tagline: 'Strategic management of singular assets.<br>Absolute discretion. Legal rigour.',
      aviso: 'Legal Notice', privacidad: 'Privacy Policy', cookies: 'Cookie Policy',
      copy: '©2026 Koehler Assets Representation · Madrid, Spain',
    }
  },
  de: {
    nav: {
      inicio: 'Startseite', compra: 'Objekt gesucht', venta: 'Objekt verkaufen',
      financiacion: 'Finanzierung', arquitectura: 'Architektur & Innenarchitektur',
      club: 'Club 1512', colaboradores: 'Partnernetzwerk',
      equipo: 'Das Team', talento: 'Karriere',
    },
    footer: {
      servicios: 'Leistungen', lafirma: 'Die Firma', legal: 'Rechtliches',
      tagline: 'Strategisches Management von Premiumimmobilien.<br>Absolute Diskretion. Rechtliche Präzision.',
      aviso: 'Impressum', privacidad: 'Datenschutz', cookies: 'Cookie-Richtlinie',
      copy: '©2026 Koehler Assets Representation · Madrid, Spanien',
    }
  }
};

function getLang() { return localStorage.getItem('koehler_lang') || 'es'; }

function setLang(lang) {
  localStorage.setItem('koehler_lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let val = i18n[lang];
    for (const k of keys) { val = val?.[k]; }
    if (val !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.innerHTML = val;
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

function getNavHTML(activePage) {
  return `
  <nav>
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-name">KOEHLER</span>
      <div class="nav-logo-line"></div>
      <span class="nav-logo-sub">Assets Representation</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='inicio'?'class="active"':''} data-i18n="nav.inicio">Inicio</a></li>
      <li><a href="compra.html" ${activePage==='compra'?'class="active"':''} data-i18n="nav.compra">Busco un Activo</a></li>
      <li><a href="venta.html" ${activePage==='venta'?'class="active"':''} data-i18n="nav.venta">Venda su Activo</a></li>
      <li><a href="financiacion.html" ${activePage==='financiacion'?'class="active"':''} data-i18n="nav.financiacion">Financiación</a></li>
      <li><a href="arquitectura.html" ${activePage==='arquitectura'?'class="active"':''} data-i18n="nav.arquitectura">Arquitectura & Interiorismo</a></li>
      <li><a href="club1512.html" ${activePage==='club'?'class="active"':''} data-i18n="nav.club">Club 1512</a></li>
      <li><a href="colaboradores.html" ${activePage==='colaboradores'?'class="active"':''} data-i18n="nav.colaboradores">Red de Colaboradores</a></li>
      <li><a href="equipo.html" ${activePage==='equipo'?'class="active"':''} data-i18n="nav.equipo">El Equipo</a></li>
      <li><a href="talento.html" ${activePage==='talento'?'class="active"':''} data-i18n="nav.talento">Trabaja con Nosotros</a></li>
    </ul>
    <div style="display:flex;align-items:center;">
      <div class="lang-selector">
        <button class="lang-btn" data-lang="es" onclick="setLang('es')">ES</button>
        <span class="lang-sep">·</span>
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>
        <span class="lang-sep">·</span>
        <button class="lang-btn" data-lang="de" onclick="setLang('de')">DE</button>
      </div>
      <button class="nav-hamburger" id="hamburger" aria-label="Menú" style="margin-left:20px;">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="nav-mobile" id="navMobile">
    <a href="index.html" data-i18n="nav.inicio">Inicio</a>
    <a href="compra.html" data-i18n="nav.compra">Busco un Activo</a>
    <a href="venta.html" data-i18n="nav.venta">Venda su Activo</a>
    <a href="financiacion.html" data-i18n="nav.financiacion">Financiación</a>
    <a href="arquitectura.html" data-i18n="nav.arquitectura">Arquitectura & Interiorismo</a>
    <a href="club1512.html" data-i18n="nav.club">Club 1512</a>
    <a href="colaboradores.html" data-i18n="nav.colaboradores">Red de Colaboradores</a>
    <a href="equipo.html" data-i18n="nav.equipo">El Equipo</a>
    <a href="talento.html" data-i18n="nav.talento">Trabaja con Nosotros</a>
    <div style="display:flex;gap:12px;padding-top:12px;border-top:1px solid var(--grey-mid);margin-top:4px;">
      <button class="lang-btn" data-lang="es" onclick="setLang('es')">ES</button>
      <span class="lang-sep">·</span>
      <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>
      <span class="lang-sep">·</span>
      <button class="lang-btn" data-lang="de" onclick="setLang('de')">DE</button>
    </div>
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
          <p class="footer-tagline" data-i18n="footer.tagline">Gestión estratégica de activos singulares.<br>Discreción absoluta. Rigor jurídico.</p>
        </div>
        <div class="footer-col">
          <div class="footer-col-title" data-i18n="footer.servicios">Servicios</div>
          <ul>
            <li><a href="compra.html" data-i18n="nav.compra">Busco un Activo</a></li>
            <li><a href="venta.html" data-i18n="nav.venta">Venda su Activo</a></li>
            <li><a href="financiacion.html" data-i18n="nav.financiacion">Financiación</a></li>
            <li><a href="arquitectura.html" data-i18n="nav.arquitectura">Arquitectura & Interiorismo</a></li>
            <li><a href="club1512.html" data-i18n="nav.club">Club 1512</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title" data-i18n="footer.lafirma">La Firma</div>
          <ul>
            <li><a href="equipo.html" data-i18n="nav.equipo">El Equipo</a></li>
            <li><a href="colaboradores.html" data-i18n="nav.colaboradores">Red de Colaboradores</a></li>
            <li><a href="talento.html" data-i18n="nav.talento">Trabaja con Nosotros</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title" data-i18n="footer.legal">Legal</div>
          <ul>
            <li><a href="index.html#legal" data-i18n="footer.aviso">Aviso Legal</a></li>
            <li><a href="index.html#privacidad" data-i18n="footer.privacidad">Privacidad</a></li>
            <li><a href="index.html#cookies" data-i18n="footer.cookies">Cookies</a></li>
            <li><a href="mailto:info@koehlerassets.com">info@koehlerassets.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy" data-i18n="footer.copy">©2026 Koehler Assets Representation · Madrid, España</span>
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
    hamburger.addEventListener('click', () => navMobile.classList.toggle('open'));
  }
  applyLang(getLang());
}
