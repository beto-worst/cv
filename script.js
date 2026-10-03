/* =====================================================
   MI CURRICULUM — ESTILO PERSONA 3 RELOAD
   -----------------------------------------------------
   EDITA SOLO EL OBJETO "CV". Formatos disponibles:
     tipo: "texto"  -> parrafos + chips
     tipo: "filas"  -> filas estilo STATUS (tag / titulo / desc)
     tipo: "stats"  -> filas con barra de nivel
     tipo: "lista"  -> filas con badge y valor a la derecha
   ===================================================== */

const CV_ES = {
  sobremi: {
    menu: "SOBRE MÍ",
    titulo: "SOBRE MÍ",
    tipo: "texto",
    parrafos: [
      "Ingeniero en <b>desarrollo web y videojuegos</b>. Me muevo entre la programación, la animación 3D y el diseño de interfaz.",
      "Busco proyectos donde el código y el arte se toquen: UI que se sienta viva, feedback inmediato y sistemas que el jugador disfrute descubrir."
    ],
    chips: ["PYTHON", "JAVASCRIPT", "C++", "C#", "SQL", "HTML5 / CSS3", "DJANGO", "REACT", "BLENDER", "FIGMA"],
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0001.png", tag: "LEADER", titulo: "Alberto Vázquez", desc: "Desarrollo web y videojuegos · Animación digital" },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0003.png", tag: "CLASE",  titulo: "Frontend + Animación 3D", desc: "Web interactiva, animación y prototipos de juego." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0007.png", tag: "ARMA",   titulo: "Python · JavaScript · C++ · Blender", desc: "Del backend al pulido visual." }
    ]
  },

  educacion: {
    menu: "EDUCACIÓN",
    titulo: "EDUCACIÓN",
    tipo: "filas",
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "ACTUAL",  titulo: "UVM", desc: "Estudiante actual." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "CARRERA", titulo: "Licenciatura en Animación Digital", desc: "Ingeniería en desarrollo web y videojuegos." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0009.png", tag: "CERT.",   titulo: "Certificación en Ingeniería en Inteligencia Artificial", desc: "Desarrollo e integración de sistemas de IA." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "CERT.",   titulo: "UI / UX", desc: "Certificación en diseño de interfaces." }
    ]
  },

  habilidades: {
    menu: "HABILIDADES",
    titulo: "HABILIDADES",
    tipo: "filas",
    /* tag = categoria, desc empieza con el nivel y sigue con lo concreto.
       Revisa cada linea y quita lo que no domines. */
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0005.png", tag: "LENGUAJE", titulo: "Python",
        desc: "Avanzado · Django · FastAPI · APIs REST · integración con la API de Claude · openpyxl" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0010.png", tag: "LENGUAJE", titulo: "JavaScript",
        desc: "Intermedio · ES6+ · React · Next.js · manipulación del DOM · eventos · Web Audio API" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0001.png", tag: "LENGUAJE", titulo: "HTML5 · CSS3",
        desc: "Dominio · maquetación responsiva · Flexbox · Grid · animaciones y transforms · mobile-first" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0008.png", tag: "LENGUAJE", titulo: "C++ · C#",
        desc: "Proyectos de videojuegos en Unreal Engine (C++) y Unity (C#)" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0003.png", tag: "LENGUAJE", titulo: "SQL",
        desc: "Intermedio · MySQL · modelado de datos · consultas" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "HERRAMIENTAS", titulo: "Git · Docker · AWS",
        desc: "Control de versiones y pull requests · contenedores · despliegue en servidor EC2" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "3D", titulo: "Blender",
        desc: "Modelado · animación 3D · render" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0007.png", tag: "DISEÑO", titulo: "Figma · Suite de Adobe",
        desc: "Prototipado · sistemas de diseño · UI/UX · Photoshop · Illustrator · After Effects" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "VIDEO", titulo: "Premiere Pro",
        desc: "Edición y montaje · corrección de color · exportación para web y redes" }
    ]
  },

  proyectos: {
    menu: "PROYECTOS",
    titulo: "PROYECTOS",
    tipo: "lista",
    /* valor = el chip negro de la derecha. Aqui lo uso para el stack,
       que en un CV de programador dice mas que el año. */
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0005.png", tag: "IA", titulo: "Athena — Asistente inmobiliario con IA",
        desc: "Creación completa de una IA inmobiliaria. Chat multi-inquilino: un servidor atiende a varias inmobiliarias, cada una con su marca e inventario. Busca en el inventario real, resuelve dudas y califica al prospecto.",
        valor: "FastAPI · Claude API", badge: "NEW" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "WEB", titulo: "RedNorte — Página web y CRM",
        desc: "Creación de la página y del CRM. Inventario de propiedades con paginación y filtros, herramientas de estimación de valor y reporte de vendibilidad, captación y gestión de prospectos, y reportes de mercado.",
        valor: "Next.js · React" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "SISTEMA", titulo: "Avalo Garantías Jurídicas",
        desc: "Creación de la plataforma: expedientes, cobranzas e investigaciones, con módulos de personas, inmuebles y documentos. Desplegada en servidor AWS.",
        valor: "Django · MySQL · Docker" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0008.png", tag: "IA", titulo: "Proyecto Einstein",
        desc: "Integrante del equipo de desarrollo de inteligencia artificial." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "WEB", titulo: "Este CV interactivo",
        desc: "Interfaz estilo Persona 3 con menú navegable por teclado y sonido, en HTML, CSS y JavaScript puro, sin librerías.",
        valor: "JS · CSS" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0010.png", tag: "3D", titulo: "Animaciones para videojuegos",
        desc: "Animación 3D en proyectos de videojuegos." }
    ]
  },

  experiencia: {
    menu: "EXPERIENCIA",
    titulo: "EXPERIENCIA",
    tipo: "filas",
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0005.png", tag: "DESARROLLO", titulo: "Athena — IA inmobiliaria",
        desc: "Creación del asistente de principio a fin: backend en FastAPI, integración con la API de Claude, arquitectura multi-inquilino y lectura de inventarios reales." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "DESARROLLO", titulo: "RedNorte — Página web y CRM",
        desc: "Creación del sitio y del CRM en Next.js: inventario de propiedades, herramientas de valuación, captación y gestión de prospectos." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "DESARROLLO", titulo: "Avalo Garantías Jurídicas",
        desc: "Creación de la plataforma en Django con MySQL: expedientes, cobranzas e investigaciones. Contenedores Docker y despliegue en AWS." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0010.png", tag: "FREELANCE", titulo: "Desarrollador Frontend Jr.",
        desc: "Creación de varias páginas web a medida." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0008.png", tag: "PERSONAL", titulo: "Creador de contenido técnico",
        desc: "Material y tutoriales sobre desarrollo y diseño." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "SOPORTE", titulo: "Soporte de Sistemas",
        desc: "Mantenimiento de equipos y atención a usuarios." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0009.png", tag: "ATENCIÓN", titulo: "Servicio al cliente",
        desc: "Trato directo con usuarios y clientes." }
    ]
  },

  contacto: {
    menu: "CONTACTO",
    titulo: "CONTACTO",
    tipo: "social",
    /* valor = el texto del chip negro de la derecha.
       Si quieres el chip con cifra tipo juego (VIEWS 3.4M), agrega
       etiqueta: "VIEWS" junto a valor: "3.4M".
       badge: "NEW" saca el sello rojo. */
    filas: [
      { icono: "IG", tag: "INSTAGRAM", titulo: "@rosinante.worst",
        valor: "ABRIR", badge: "NEW",
        url: "https://www.instagram.com/rosinante.worst" },

      { icono: "GH", tag: "GITHUB", titulo: "github.com/beto-worst",
        valor: "ABRIR",
        url: "https://github.com/beto-worst" },

      { icono: "IN", tag: "LINKEDIN", titulo: "linkedin.com/in/alberto-vazquez",
        valor: "ABRIR",
        url: "https://www.linkedin.com/in/alberto-vazquez-590a5a43b/" },


      { icono: "@", tag: "EMAIL", titulo: "albertovazquezavl50@gmail.com",
        valor: "ESCRIBIR",
        url: "mailto:albertovazquezavl50@gmail.com" }
    ]
  }
};

const CV_EN = {
  sobremi: {
    menu: "ABOUT ME",
    titulo: "ABOUT ME",
    tipo: "texto",
    parrafos: [
      "Engineer in <b>web and game development</b>. I move between programming, 3D animation and interface design.",
      "I look for projects where code and art meet: UI that feels alive, immediate feedback, and systems players enjoy discovering."
    ],
    chips: ["PYTHON", "JAVASCRIPT", "C++", "C#", "SQL", "HTML5 / CSS3", "DJANGO", "REACT", "BLENDER", "FIGMA"],
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0001.png", tag: "LEADER", titulo: "Alberto Vázquez", desc: "Web and game development · Digital animation" },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0003.png", tag: "CLASS",  titulo: "Frontend + 3D Animation", desc: "Interactive web, animation and game prototypes." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0007.png", tag: "WEAPON",   titulo: "Python · JavaScript · C++ · Blender", desc: "From backend to visual polish." }
    ]
  },

  educacion: {
    menu: "EDUCATION",
    titulo: "EDUCATION",
    tipo: "filas",
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "CURRENT",  titulo: "UVM", desc: "Currently enrolled." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "DEGREE", titulo: "BA in Digital Animation", desc: "Engineering in web and game development." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0009.png", tag: "CERT.",   titulo: "Certification in Artificial Intelligence Engineering", desc: "Development and integration of AI systems." },
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "CERT.",   titulo: "UI / UX", desc: "Interface design certification." }
    ]
  },

  habilidades: {
    menu: "SKILLS",
    titulo: "SKILLS",
    tipo: "filas",
    /* tag = categoria, desc empieza con el nivel y sigue con lo concreto.
       Revisa cada linea y quita lo que no domines. */
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0005.png", tag: "LANGUAGE", titulo: "Python",
        desc: "Advanced · Django · FastAPI · REST APIs · Claude API integration · openpyxl" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0010.png", tag: "LANGUAGE", titulo: "JavaScript",
        desc: "Intermediate · ES6+ · React · Next.js · DOM manipulation · events · Web Audio API" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0001.png", tag: "LANGUAGE", titulo: "HTML5 · CSS3",
        desc: "Proficient · responsive layout · Flexbox · Grid · animations and transforms · mobile-first" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0008.png", tag: "LANGUAGE", titulo: "C++ · C#",
        desc: "Game projects in Unreal Engine (C++) and Unity (C#)" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0003.png", tag: "LANGUAGE", titulo: "SQL",
        desc: "Intermediate · MySQL · data modeling · queries" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "TOOLS", titulo: "Git · Docker · AWS",
        desc: "Version control and pull requests · containers · EC2 server deployment" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "3D", titulo: "Blender",
        desc: "Modeling · 3D animation · rendering" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0007.png", tag: "DESIGN", titulo: "Figma · Suite de Adobe",
        desc: "Prototyping · design systems · UI/UX · Photoshop · Illustrator · After Effects" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "VIDEO", titulo: "Premiere Pro",
        desc: "Editing · color grading · export for web and social media" }
    ]
  },

  proyectos: {
    menu: "PROJECTS",
    titulo: "PROJECTS",
    tipo: "lista",
    /* valor = el chip negro de la derecha. Aqui lo uso para el stack,
       que en un CV de programador dice mas que el año. */
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0005.png", tag: "IA", titulo: "Athena — AI real estate assistant",
        desc: "Built a real estate AI from the ground up. Multi-tenant chat: one server serves several agencies, each with its own brand and inventory. It searches the real inventory, answers questions and qualifies leads.",
        valor: "FastAPI · Claude API", badge: "NEW" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "WEB", titulo: "RedNorte — Website and CRM",
        desc: "Built the website and the CRM. Property inventory with pagination and filters, value estimation and sellability report tools, lead capture and management, and market reports.",
        valor: "Next.js · React" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "SYSTEM", titulo: "Avalo Garantías Jurídicas",
        desc: "Built the platform: case files, collections and investigations, with modules for people, properties and documents. Deployed on an AWS server.",
        valor: "Django · MySQL · Docker" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0008.png", tag: "IA", titulo: "Proyecto Einstein",
        desc: "Member of the artificial intelligence development team." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "WEB", titulo: "This interactive CV",
        desc: "Persona 3 style interface with keyboard navigation and sound, in plain HTML, CSS and JavaScript, no libraries.",
        valor: "JS · CSS" },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0010.png", tag: "3D", titulo: "Game animations",
        desc: "3D animation on game projects." }
    ]
  },

  experiencia: {
    menu: "EXPERIENCE",
    titulo: "EXPERIENCE",
    tipo: "filas",
    filas: [
      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0005.png", tag: "DEV", titulo: "Athena — Real estate AI",
        desc: "Built the assistant end to end: FastAPI backend, Claude API integration, multi-tenant architecture and real inventory parsing." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0006.png", tag: "DEV", titulo: "RedNorte — Website and CRM",
        desc: "Built the site and the CRM in Next.js: property inventory, valuation tools, lead capture and management." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0004.png", tag: "DEV", titulo: "Avalo Garantías Jurídicas",
        desc: "Built the platform in Django with MySQL: case files, collections and investigations. Docker containers and AWS deployment." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0010.png", tag: "FREELANCE", titulo: "Jr. Frontend Developer",
        desc: "Built several custom websites." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0008.png", tag: "PERSONAL", titulo: "Technical content creator",
        desc: "Material and tutorials on development and design." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0002.png", tag: "SUPPORT", titulo: "Systems Support",
        desc: "Equipment maintenance and user support." },

      { img: "assets/personajes/T_UI_Camp_Status_Character_Glass_0009.png", tag: "SERVICE", titulo: "Customer service",
        desc: "Direct contact with users and clients." }
    ]
  },

  contacto: {
    menu: "CONTACT",
    titulo: "CONTACT",
    tipo: "social",
    /* valor = el texto del chip negro de la derecha.
       Si quieres el chip con cifra tipo juego (VIEWS 3.4M), agrega
       etiqueta: "VIEWS" junto a valor: "3.4M".
       badge: "NEW" saca el sello rojo. */
    filas: [
      { icono: "IG", tag: "INSTAGRAM", titulo: "@rosinante.worst",
        valor: "OPEN", badge: "NEW",
        url: "https://www.instagram.com/rosinante.worst" },

      { icono: "GH", tag: "GITHUB", titulo: "github.com/beto-worst",
        valor: "OPEN",
        url: "https://github.com/beto-worst" },

      { icono: "IN", tag: "LINKEDIN", titulo: "linkedin.com/in/alberto-vazquez",
        valor: "OPEN",
        url: "https://www.linkedin.com/in/alberto-vazquez-590a5a43b/" },


      { icono: "@", tag: "EMAIL", titulo: "albertovazquezavl50@gmail.com",
        valor: "WRITE",
        url: "mailto:albertovazquezavl50@gmail.com" }
    ]
  }
};


let CV = CV_ES;

/* Orden del menú apilado */
const ORDEN = ["sobremi", "educacion", "habilidades", "proyectos", "experiencia", "contacto"];

/* ============ SONIDO ============
   Usa tu 'assets/persona3 menu sound.wav'.
   Si el archivo no está, cae a tonos generados con WebAudio. */
const SFX = (() => {
  let activo = true;
  let hayWav = true;
  let ctx = null;

  const base = new Audio("assets/persona3 menu sound.wav");
  base.preload = "auto";
  base.addEventListener("error", () => { hayWav = false; });

  const wav = (vol, rate) => {
    if (!hayWav) return false;
    const s = base.cloneNode();
    s.volume = vol;
    s.playbackRate = rate;
    s.play().catch(() => {});
    return true;
  };

  const ac = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };

  const tono = (freq, dur, tipo = "square", vol = 0.05) => {
    const a = ac();
    const osc = a.createOscillator();
    const gan = a.createGain();
    osc.type = tipo;
    osc.frequency.setValueAtTime(freq, a.currentTime);
    gan.gain.setValueAtTime(vol, a.currentTime);
    gan.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
    osc.connect(gan).connect(a.destination);
    osc.start();
    osc.stop(a.currentTime + dur);
  };

  return {
    mover:  () => { if (!activo) return; if (!wav(0.35, 1.0)) tono(920, 0.06, "square", 0.04); },
    abrir:  () => { if (!activo) return; if (!wav(0.55, 0.85)) { tono(1320, 0.07); setTimeout(() => tono(1980, 0.16), 55); } },
    volver: () => { if (!activo) return; if (!wav(0.35, 1.25)) { tono(760, 0.07); setTimeout(() => tono(520, 0.14), 55); } },
    inicio: () => { if (!activo) return; if (!wav(0.6, 0.75)) { tono(660, 0.10, "triangle", 0.06); setTimeout(() => tono(990, 0.12, "triangle", 0.05), 90); } },
    desbloquear: () => { base.load(); },
    alternar: () => { activo = !activo; if (activo) wav(0.35, 1.0); return activo; }
  };
})();


/* ============ IDIOMA ============ */
const UI = {
  es: {
    kicker: "CURRICULUM VITAE", rol: "GAME DEVELOPER", start: "PRESS START",
    mover: "MOVER", abrir: "ABRIR", sonido: "SONIDO",
    cambiar: "CAMBIAR", volver: "VOLVER", idioma: "ENGLISH",
    tocar: "TOCA UNA SECCIÓN", desliza: "DESLIZA PARA CAMBIAR",
    dias: ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"]
  },
  en: {
    kicker: "CURRICULUM VITAE", rol: "GAME DEVELOPER", start: "PRESS START",
    mover: "MOVE", abrir: "OPEN", sonido: "SOUND",
    cambiar: "SWITCH", volver: "BACK", idioma: "ESPAÑOL",
    tocar: "TAP A SECTION", desliza: "SWIPE TO SWITCH",
    dias: ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
  }
};

/* Arranca en ingles; si el visitante ya eligio idioma, se respeta su eleccion. */
let lang = "en";
try { lang = localStorage.getItem("cv-lang") === "es" ? "es" : "en"; } catch (e) {}
CV = lang === "en" ? CV_EN : CV_ES;

function aplicarTextosUI() {
  const t = UI[lang];
  document.querySelectorAll("[data-ui]").forEach(el => {
    const k = el.dataset.ui;
    if (t[k]) el.textContent = t[k];
  });
  document.documentElement.lang = lang;
  reloj();
}

function cambiarIdioma() {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("cv-lang", lang); } catch (e) {}
  CV = lang === "en" ? CV_EN : CV_ES;
  SFX.abrir();

  aplicarTextosUI();
  const i = cursor;
  construirMenu();
  if (vista === "detalle") mostrarSeccion(i, true);
  else moverCursor(i, true);
}

/* ============ ELEMENTOS ============ */
const $ = (s) => document.querySelector(s);

const boot            = $("#boot");
const pantallaMenu    = $("#screen-menu");
const pantallaDetalle = $("#screen-detail");
const stack           = $("#stack");
const cuerpo          = $("#detail-body");
const tabActual       = $("#tab-current");
const tabPrevLbl      = $("#tab-prev-label");
const tabNextLbl      = $("#tab-next-label");

let cursor = 0;        // elemento resaltado en el menú
let vista = "boot";    // boot | menu | detalle

/* ============ MENÚ APILADO ============ */
let itemsMenu = [];

function construirMenu() {
  stack.innerHTML = "";
  ORDEN.forEach((id, i) => {
    const li = document.createElement("li");
    li.className = "stack-item";
    li.style.setProperty("--i", i);
    li.style.setProperty("--n", ORDEN.length - 1);
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", "false");
    li.innerHTML = `<span class="txt"><span class="idx">${String(i + 1).padStart(2, "0")}</span>${CV[id].menu}</span>`;
    li.addEventListener("mouseenter", () => moverCursor(i));
    li.addEventListener("click", () => abrir(i));
    stack.appendChild(li);
  });
  itemsMenu = [...stack.children];
}
construirMenu();

function moverCursor(i, silencioso = false) {
  if (i === cursor && itemsMenu[i] && itemsMenu[i].classList.contains("active")) return;
  cursor = i;
  itemsMenu.forEach((el, n) => {
    el.classList.toggle("active", n === i);
    el.setAttribute("aria-selected", n === i ? "true" : "false");
  });
  if (!silencioso) SFX.mover();
}

/* Cambiar el hash falla al abrir el archivo con file:// en algunos
   navegadores. No es critico, asi que si truena seguimos igual. */
function irAlHash(h) {
  try {
    history.replaceState(null, "", h || location.pathname);
  } catch (e) {
    /* sin permalink, pero la pagina funciona */
  }
}

/* ============ RENDER DEL DETALLE ============ */
function esc(t) {
  return String(t ?? "").replace(/&(?![a-z#]+;)/gi, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function filaHTML(f, tipo, retardo, indice) {
  const estilo = `style="animation-delay:${retardo}ms;--i:${indice}"`;
  const esLink = Boolean(f.url);
  const externo = /^https?:/i.test(f.url || "") ? ` target="_blank" rel="noopener"` : "";
  const etiqueta = esLink ? "a" : "div";
  const attrs = esLink ? ` href="${esc(f.url)}"${externo}` : "";

  const conValor = tipo === "lista" || tipo === "social";

  let derecha = "";
  if (conValor && (f.valor || f.badge)) {
    const num = f.etiqueta
      ? `<em class="rv-label">${esc(f.etiqueta)}</em><b class="rv-num">${esc(f.valor || "")}</b>`
      : `<span>${esc(f.valor || "")}</span>`;
    derecha = `<div class="row-value">
        ${f.badge ? `<em class="row-badge"><span>${esc(f.badge)}</span></em>` : ""}
        ${num}
      </div>`;
  }

  /* img: "assets/loquesea.png" pinta el retrato dentro del recuadro negro.
     Si no hay img se usan las iniciales de 'icono'. */
  const mini = f.img
    ? `<div class="row-thumb"><img src="${esc(f.img)}" alt="" loading="lazy"></div>`
    : (f.icono ? `<div class="row-thumb"><span>${esc(f.icono)}</span></div>` : "");

  const barra = tipo === "stats"
    ? `<div class="row-bar"><i style="width:${Number(f.nivel) || 0}%;animation-delay:${retardo + 180}ms"></i></div>`
    : "";

  return `<${etiqueta} class="row${esLink ? " is-link" : ""}${f.img ? " con-img" : ""}" ${estilo}${attrs}>
    ${mini}
    ${f.tag ? `<div class="row-tag"><span>${esc(f.tag)}</span></div>` : ""}
    <div class="row-main">
      <div class="row-title">${esc(f.titulo)}</div>
      ${f.desc ? `<div class="row-desc">${esc(f.desc)}</div>` : ""}
      ${barra}
    </div>
    ${derecha}
  </${etiqueta}>`;
}

function render(id) {
  const d = CV[id];
  let html = "";
  let r = 0;

  if (d.tipo === "texto") {
    html += `<div class="prose" style="animation-delay:0ms">` +
      d.parrafos.map(p => `<p>${p}</p>`).join("") +
      (d.chips ? `<div class="chips">${d.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("")}</div>` : "") +
      `</div>`;
    r = 90;
  }

  (d.filas || []).forEach((f, i) => {
    html += filaHTML(f, d.tipo, r, i);
    r += 65;
  });

  cuerpo.innerHTML = html;
  cuerpo.scrollTop = 0;
}

function mostrarSeccion(i, silencioso = false) {
  cursor = (i + ORDEN.length) % ORDEN.length;
  const id = ORDEN[cursor];

  tabActual.textContent = CV[id].titulo;
  tabPrevLbl.textContent = CV[ORDEN[(cursor - 1 + ORDEN.length) % ORDEN.length]].menu;
  tabNextLbl.textContent = CV[ORDEN[(cursor + 1) % ORDEN.length]].menu;

  render(id);
  moverCursor(cursor, true);
  irAlHash("#" + id);
  if (!silencioso) SFX.mover();
}

/* ============ NAVEGACIÓN ENTRE PANTALLAS ============ */
function iniciar() {
  if (vista !== "boot") return;
  SFX.desbloquear();
  $("#bg-video").play().catch(() => {});   // por si el navegador bloqueo el autoplay
  SFX.inicio();
  boot.classList.add("hidden");
  vista = "menu";
  pantallaMenu.hidden = false;

  const destino = location.hash.replace("#", "");
  const i = ORDEN.indexOf(destino);
  if (i >= 0) {
    moverCursor(i, true);
    setTimeout(() => abrir(i, true), 420);
  } else {
    setTimeout(() => moverCursor(0, true), 420);
  }
}

function abrir(i, silencioso = false) {
  if (!silencioso) SFX.abrir();
  vista = "detalle";
  pantallaMenu.hidden = true;
  pantallaDetalle.hidden = false;
  mostrarSeccion(i, true);
}

function volverAlMenu() {
  if (vista !== "detalle") return;
  SFX.volver();
  vista = "menu";
  pantallaDetalle.hidden = true;
  pantallaMenu.hidden = false;
  irAlHash("");
  moverCursor(cursor, true);
}

/* Si un retrato no existe, se quita el recuadro en vez de dejar la imagen rota */
cuerpo.addEventListener("error", (e) => {
  const img = e.target;
  if (!img.matches || !img.matches(".row-thumb img")) return;
  const fila = img.closest(".row");
  img.closest(".row-thumb").remove();
  if (fila) fila.classList.remove("con-img");
}, true);

$("#tab-prev").addEventListener("click", () => mostrarSeccion(cursor - 1));
$("#tab-next").addEventListener("click", () => mostrarSeccion(cursor + 1));
document.querySelectorAll("[data-lang-btn]").forEach(b =>
  b.addEventListener("click", (e) => { e.stopPropagation(); cambiarIdioma(); }));

$("#boot-press").addEventListener("click", iniciar);
boot.addEventListener("click", iniciar);

/* ============ TECLADO ============ */
document.addEventListener("keydown", (e) => {
  const k = e.key;

  if (vista === "boot") {
    if (k !== "Tab") iniciar();
    return;
  }

  if (k.toLowerCase() === "m") { SFX.alternar(); return; }
  if (k.toLowerCase() === "l") { cambiarIdioma(); return; }

  if (vista === "menu") {
    if (k === "ArrowDown" || k === "ArrowRight") { e.preventDefault(); moverCursor((cursor + 1) % ORDEN.length); }
    else if (k === "ArrowUp" || k === "ArrowLeft") { e.preventDefault(); moverCursor((cursor - 1 + ORDEN.length) % ORDEN.length); }
    else if (k === "Enter" || k === " ") { e.preventDefault(); abrir(cursor); }
    else if (/^[1-9]$/.test(k) && Number(k) <= ORDEN.length) { abrir(Number(k) - 1); }
    return;
  }

  if (vista === "detalle") {
    if (k === "ArrowRight") { e.preventDefault(); mostrarSeccion(cursor + 1); }
    else if (k === "ArrowLeft") { e.preventDefault(); mostrarSeccion(cursor - 1); }
    else if (k === "Escape" || k === "Backspace") { e.preventDefault(); volverAlMenu(); }
    else if (/^[1-9]$/.test(k) && Number(k) <= ORDEN.length) { mostrarSeccion(Number(k) - 1); }
  }
});


/* ============ GESTOS (movil) ============ */
/* Deslizar de lado cambia de seccion; deslizar hacia abajo regresa al menu. */
(function gestos() {
  let x0 = 0, y0 = 0, t0 = 0;

  document.addEventListener("touchstart", (e) => {
    const t = e.changedTouches[0];
    x0 = t.clientX; y0 = t.clientY; t0 = Date.now();
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    if (vista !== "detalle") return;
    const t = e.changedTouches[0];
    const dx = t.clientX - x0, dy = t.clientY - y0;
    if (Date.now() - t0 > 700) return;              // demasiado lento, no es gesto

    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      mostrarSeccion(cursor + (dx < 0 ? 1 : -1));   // izquierda = siguiente
    } else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.6 && cuerpo.scrollTop <= 0) {
      volverAlMenu();
    }
  }, { passive: true });
})();

/* ============ RELOJ ============ */
function reloj() {
  const n = new Date();
  $("#corner-day").textContent = UI[lang].dias[n.getDay()];
  $("#corner-clock").textContent =
    String(n.getHours()).padStart(2, "0") + ":" + String(n.getMinutes()).padStart(2, "0");
}
aplicarTextosUI();
setInterval(reloj, 15000);

/* ============ VIDEO DE FONDO ============ */
(function video() {
  const v = $("#bg-video");
  const listo = () => {
    v.classList.add("ready");
    document.body.classList.add("has-video");
  };
  if (v.readyState >= 2) listo();
  v.addEventListener("loadeddata", listo);
  v.play().catch(() => {});
})();
