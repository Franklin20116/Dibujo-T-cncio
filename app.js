const ERAS = {
  antiguedad: {
    code: "ETAPA 01 · ~3000 a.C. – 500 d.C.",
    title: "Antigüedad: Primeros planos en Mesopotamia y Egipto",
    description:
      "Las civilizaciones fluviales necesitaron registrar dimensiones exactas para erigir templos, canales y tumbas. El ejemplo más célebre es la estatua de Gudea de Lagash (c. 2120 a.C.), donde aparece grabada en piedra la planta de una fortaleza junto a una regla graduada.",
    highlights: [
      "Mesopotamia: tablillas de arcilla y diorita con plantas arquitectónicas a escala y proporciones modulares.",
      "Antiguo Egipto: papiros cuadriculados con tinta roja y negra para definir alzados de columnas y cámaras.",
      "Uso temprano de la plomada, escuadra de madera y cuerda de nudos para trasladar ángulos rectos al terreno."
    ],
    image: "assets/img/era-antiguedad.jpg",
    imageAlt: "Tablilla mesopotámica con planta arquitectónica y papiro egipcio cuadriculado",
    caption: "Planos arquitectónicos modulares en tablilla mesopotámica y papiro egipcio"
  },
  renacimiento: {
    code: "ETAPA 02 · SIGLOS XV – XVI",
    title: "Renacimiento: Perspectiva cónica y bocetos mecánicos",
    description:
      "El dibujo se separa de la intuición empírica y adopta fundamentos matemáticos. Filippo Brunelleschi formula las leyes geométricas de la perspectiva cónica lineal hacia 1415, mientras Leonardo da Vinci inaugura el dibujo técnico analítico mediante vistas en despiece y secciones de mecanismos.",
    highlights: [
      "Filippo Brunelleschi y Leon Battista Alberti sistematizan el punto de fuga y la línea de horizonte.",
      "Leonardo da Vinci introduce perspectivas transparentes, vistas explotadas y sombreado direccional para engranajes y máquinas.",
      "Consolidación del dibujo como herramienta de proyecto previa a la construcción de cúpulas e ingenios."
    ],
    image: "assets/img/era-renacimiento.svg",
    imageAlt: "Diagrama de perspectiva cónica con punto de fuga central y estudio de engranaje",
    caption: "Perspectiva cónica lineal con punto de fuga central (PF) y estudio mecánico"
  },
  industrial: {
    code: "ETAPA 03 · SIGLOS XVIII – XIX",
    title: "Revolución Industrial: Geometría descriptiva y estandarización",
    description:
      "La fabricación en serie de máquinas de vapor y piezas intercambiables exigía planos sin ambigüedades. El matemático francés Gaspard Monge sistematizó la Geometría Descriptiva (1799), permitiendo representar cuerpos tridimensionales sobre dos planos ortogonales perpendiculares.",
    highlights: [
      "Gaspard Monge establece el sistema diédrico: proyección ortogonal sobre plano vertical (alzado) y horizontal (planta).",
      "Separación clara entre diseño en oficina técnica y manufactura en taller mediante piezas intercambiables.",
      "Nacimiento de las primeras normas nacionales de líneas, rayados y escalas industriales (antecedentes de DIN e ISO)."
    ],
    image: "assets/img/era-industrial.svg",
    imageAlt: "Sistema diédrico de Gaspard Monge con alzado, planta y perfil abatidos",
    caption: "Sistema diédrico de Monge: alzado, planta y perfil sobre línea de tierra"
  },
  digital: {
    code: "ETAPA 04 · 1963 – ACTUALIDAD",
    title: "Era Digital: Del tablero al CAD 2D, modelado 3D y BIM",
    description:
      "Con el lanzamiento de Sketchpad (Ivan Sutherland, 1963) y la posterior irrupción del CAD en computadoras personales en los años ochenta, la tinta y el papel vegetal cedieron lugar al dibujo vectorial de precisión infinita y al modelado paramétrico tridimensional.",
    highlights: [
      "CAD 2D: gestión de capas normalizadas, bloques reutilizables, acotación asociativa y trazado automatizado.",
      "Modelado sólido 3D y paramétrico: generación instantánea de vistas ortogonales, cortes y listas de materiales.",
      "Integración con simulación por elementos finitos (FEA), manufactura CNC, impresión 3D y metodología BIM."
    ],
    image: "assets/img/era-digital.svg",
    imageAlt: "Entorno digital CAD con malla paramétrica, capas y ejes XYZ",
    caption: "Estación CAD 3D: modelado paramétrico, capas y coordenadas XYZ"
  }
};

const GALLERY_ITEMS = [
  {
    id: "vistas-ortogonales",
    code: "LÁMINA 01 · PROY-01",
    category: "proyecciones",
    categoryLabel: "Proyecciones",
    title: "Vistas Ortogonales: Sistema Europeo y Americano",
    norm: "ISO 128-30 · ISO 5456-2",
    shortDesc: "Disposición normalizada de alzado, planta y perfil en primer diedro (ISO-E) frente al tercer diedro (ISO-A).",
    fullDesc:
      "Las proyecciones ortogonales descomponen un volumen tridimensional en vistas planas perpendiculares. En el Sistema Europeo (primer diedro), el objeto se sitúa entre el observador y el plano, proyectándose la vista izquierda a la derecha del alzado. En el Sistema Americano (tercer diedro), el plano se ubica entre el observador y el objeto.",
    image: "assets/img/plano-ortogonal.jpg",
    imageAlt: "Plano técnico de vistas ortogonales con alzado, planta, perfil y línea de inglete a 45 grados",
    specs: [
      { label: "Norma Principal", value: "ISO 128-30" },
      { label: "Escala Tipo", value: "1:1 / 1:2" },
      { label: "Aristas Ocultas", value: "Trazo discontinuo" },
      { label: "Símbolo", value: "Cono truncado" }
    ]
  },
  {
    id: "perspectiva-isometrica",
    code: "LÁMINA 02 · PROY-02",
    category: "proyecciones",
    categoryLabel: "Proyecciones",
    title: "Perspectiva Isométrica Normalizada",
    norm: "ISO 5456-3 · DIN 5",
    shortDesc: "Proyección axonométrica con tres ejes separados a 120° entre sí y coeficientes de reducción iguales.",
    fullDesc:
      "La perspectiva isométrica ofrece una lectura volumétrica inmediata manteniendo proporciones uniformes sobre los ejes X, Y y Z dispuestos a 30° respecto a la horizontal. En dibujo técnico industrial suele emplearse el dibujo isométrico sin reducción (coeficiente 1:1) para agilizar el trazado.",
    image: "assets/img/plano-isometrico.jpg",
    imageAlt: "Proyección isométrica de bloque mecánico con ejes a 30 grados y cotas en cian",
    specs: [
      { label: "Ángulos Axiales", value: "120° / 120° / 120°" },
      { label: "Inclinación Base", value: "30° horizontal" },
      { label: "Coeficiente Teórico", value: "0.816" },
      { label: "Norma", value: "ISO 5456-3" }
    ]
  },
  {
    id: "cortes-secciones",
    code: "LÁMINA 03 · MEC-01",
    category: "mecanica",
    categoryLabel: "Piezas Mecánicas",
    title: "Cortes, Secciones y Rayados",
    norm: "ISO 128-40 · ISO 128-50",
    shortDesc: "Representación de cavidades internas mediante plano de corte A–A y achurado metálico a 45°.",
    fullDesc:
      "Los cortes revelan geometrías interiores (taladros, chaveteros, cámaras) sin recurrir a múltiples líneas ocultas confusas. El plano secante se señala con línea de trazo y punto gruesa en los extremos y flechas de dirección; las zonas macizas cortadas se rayan con líneas finas paralelas a 45°.",
    image: "assets/img/plano-cortes.jpg",
    imageAlt: "Plano mecánico con corte A-A y rayado diagonal a 45 grados",
    specs: [
      { label: "Norma de Cortes", value: "ISO 128-40" },
      { label: "Ángulo de Rayado", value: "45° continuo" },
      { label: "Indicación", value: "Plano A – A" },
      { label: "Material", value: "Acero / Fundición" }
    ]
  },
  {
    id: "plano-mecanico-brida",
    code: "LÁMINA 04 · MEC-02",
    category: "mecanica",
    categoryLabel: "Piezas Mecánicas",
    title: "Plano Mecánico de Pieza: Brida de Acoplamiento",
    norm: "ISO 2768-mK · ISO 1302",
    shortDesc: "Definición de elemento cilíndrico con circunferencia primitiva de pernos, tolerancias generales y rugosidad.",
    fullDesc:
      "Un plano de fabricación de pieza mecánica reúne geometría completa, diámetros de ajuste, distribución angular de taladros, acabados superficiales (Ra) y tolerancias dimensionales generales ISO 2768 para asegurar el montaje preciso en conjunto.",
    image: "assets/img/plano-brida.jpg",
    imageAlt: "Plano mecánico de brida de acero con seis perforaciones y vista en corte",
    specs: [
      { label: "Tolerancia General", value: "ISO 2768-mK" },
      { label: "Rugosidad", value: "Ra 1.6 µm" },
      { label: "Taladros", value: "6 × Ø10 H7" },
      { label: "Material", value: "Acero AISI 1045" }
    ]
  },
  {
    id: "acotacion-normalizada",
    code: "LÁMINA 05 · MEC-03",
    category: "mecanica",
    categoryLabel: "Piezas Mecánicas",
    title: "Acotación Normalizada y Cadena de Cotas",
    norm: "ISO 129-1 · DIN 406",
    shortDesc: "Reglas de disposición de líneas auxiliares, flechas normalizadas, cifras de cota y radios.",
    fullDesc:
      "La acotación expresa las magnitudes reales del objeto sin importar la escala del plano. Las líneas de cota deben separarse al menos 8 mm del contorno, evitar cruces entre sí y ubicarse preferentemente en paralelo o desde planos de referencia funcionales.",
    image: "assets/img/plano-acotacion.jpg",
    imageAlt: "Lámina técnica de acotación normalizada ISO en paralelo con líneas de referencia y flechas",
    specs: [
      { label: "Norma", value: "ISO 129-1" },
      { label: "Flecha", value: "15° cerrada llena" },
      { label: "Separación Mín.", value: "8 mm / 5 mm" },
      { label: "Unidad", value: "Milímetros (mm)" }
    ]
  },
  {
    id: "planta-arquitectonica",
    code: "LÁMINA 06 · ARQ-01",
    category: "arquitectura",
    categoryLabel: "Arquitectura",
    title: "Plano de Planta Arquitectónica",
    norm: "ISO 7519 · UNE-EN ISO 5457",
    shortDesc: "Sección horizontal a 1.20 m con muros de carga, ejes estructurales, abatimiento de puertas y cotas parciales.",
    fullDesc:
      "La planta arquitectónica resulta de seccionar horizontalmente una edificación a 1.20 m sobre el nivel de piso terminado. Incorpora ejes de referencia alfanuméricos, espesores de tabiquería y muros, vanos de ventanas, sentidos de giro de puertas y cotas acumuladas a ejes y caras.",
    image: "assets/img/plano-arquitectura.jpg",
    imageAlt: "Plano de planta arquitectónica con ejes estructurales, muros, puertas y cotas métricas",
    specs: [
      { label: "Norma", value: "ISO 7519" },
      { label: "Escala Habitual", value: "1:50 / 1:100" },
      { label: "Plano de Corte", value: "h = +1.20 m" },
      { label: "Ejes", value: "A–D / 1–3" }
    ]
  }
];

const APPLICATIONS = {
  mecanica: {
    badge: "SECTOR 01 · INGENIERÍA MECÁNICA Y MECATRÓNICA",
    title: "Mecánica Industrial y Mecatrónica",
    description:
      "Define con precisión submilimétrica la geometría de ejes, engranajes, carcasas y ensamblajes automatizados. Integra tolerancias geométricas (GD&T), ajustes eje-agujero y especificaciones de tratamiento térmico para garantizar intercambiabilidad y vida útil.",
    deliverables: [
      { title: "Planos de Despiece", desc: "Vistas detalladas de cada componente individual listo para mecanizado CNC." },
      { title: "Conjuntos y Explosivos", desc: "Listas de materiales (BOM), marcas de posición y secuencia de montaje." },
      { title: "Engranajes y Transmisiones", desc: "Módulos, ángulos de presión y perfiles normalizados de dientes." },
      { title: "Tolerancias GD&T", desc: "Control de concentricidad, planitud, perpendicularidad y ajustes ISO." }
    ],
    image: "assets/img/app-mecanica.svg",
    imageAlt: "Esquema técnico de transmisión por engranajes y tolerancias GD&T",
    caption: "Transmisión por engranajes acoplados con distancia entre centros (a) y ajuste H7/g6"
  },
  arquitectura: {
    badge: "SECTOR 02 · ARQUITECTURA E INGENIERÍA CIVIL",
    title: "Arquitectura y Construcción",
    description:
      "Traduce el proyecto espacial en documentación ejecutiva para obra: implantación topográfica, plantas de distribución, alzados o fachadas, cortes constructivos y detalles de cimentación, acero de refuerzo y acabados.",
    deliverables: [
      { title: "Plantas de Distribución", desc: "Zonificación, circulaciones, mobiliario fijo, niveles y cotas generales." },
      { title: "Elevaciones y Fachadas", desc: "Proporciones exteriores, alturas de entrepiso y materialidad." },
      { title: "Cortes Constructivos", desc: "Relación vertical de losas, cubiertas, escaleras y cimentación." },
      { title: "Detalles Estructurales", desc: "Armaduras, anclajes metálicos y encuentros constructivos a escala 1:10." }
    ],
    image: "assets/img/app-arquitectura.svg",
    imageAlt: "Alzado arquitectónico con cotas de nivel de piso terminado y azotea",
    caption: "Alzado esquemático con cotas de nivel (+NPT) y proporciones de fachada"
  },
  electricidad: {
    badge: "SECTOR 03 · ELECTRICIDAD Y ELECTRÓNICA",
    title: "Electricidad y Electrónica",
    description:
      "Emplea simbología normalizada internacional (IEC 60617 / IEEE) para describir flujos de potencia, automatismos industriales y ruteo de señales electrónicas sin depender de la forma física real del componente.",
    deliverables: [
      { title: "Diagramas Unifilares", desc: "Distribución eléctrica desde acometida, interruptores termomagnéticos y tableros." },
      { title: "Esquemas de Control", desc: "Lógica cableada de mando y potencia con contactores, relés y motores." },
      { title: "Esquemáticos Electrónicos", desc: "Interconexión de resistencias, condensadores, microcontroladores y buses." },
      { title: "Diseño de PCB", desc: "Pistas de cobre, planos de masa, vías pasantes y máscaras de soldadura." }
    ],
    image: "assets/img/app-electricidad.svg",
    imageAlt: "Esquema eléctrico normalizado IEC 60617 con fuente, resistencia, condensador y motor",
    caption: "Esquema lógico normalizado IEC 60617 con alimentación, carga y motor trifásico"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTimeline();
  initGallery();
  initModal();
  initApplications();
});

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initTimeline() {
  const tabs = Array.from(document.querySelectorAll(".timeline-tab"));
  const stage = document.getElementById("timeline-stage");
  if (!stage || tabs.length === 0) return;

  const renderEra = (eraKey) => {
    const era = ERAS[eraKey];
    if (!era) return;

    tabs.forEach((tab) => {
      const active = tab.dataset.era === eraKey;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    stage.innerHTML = `
      <div>
        <div class="era-stage-meta">${era.code}</div>
        <h3 class="era-stage-title">${era.title}</h3>
        <p class="era-stage-desc">${era.description}</p>
        <ul class="era-highlights">
          ${era.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="era-visual-box">
        <img src="${era.image}" alt="${era.imageAlt}" />
        <p class="era-visual-caption">${era.caption}</p>
      </div>
    `;
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => renderEra(tab.dataset.era));
  });

  renderEra("antiguedad");
}

function initGallery() {
  const grid = document.getElementById("gallery-grid");
  const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
  if (!grid) return;

  const renderCards = (category) => {
    const items =
      category === "todos"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === category);

    grid.innerHTML = items
      .map(
        (item) => `
        <article class="blueprint-card">
          <button type="button" class="blueprint-card-trigger" data-item-id="${item.id}" aria-label="Ampliar ${item.title}">
            <div class="card-preview">
              <span class="card-code-pill">${item.code}</span>
              <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
            </div>
            <div class="card-body">
              <span class="card-norm">${item.norm}</span>
              <h3 class="card-title">${item.title}</h3>
              <p class="card-desc">${item.shortDesc}</p>
              <div class="card-footer">
                <span class="card-cat">${item.categoryLabel}</span>
                <span class="card-action">Ver ficha técnica →</span>
              </div>
            </div>
          </button>
        </article>
      `
      )
      .join("");
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
    });
  });

  renderCards("todos");
}

function initModal() {
  const modal = document.getElementById("blueprint-modal");
  const closeBtn = document.getElementById("modal-close");
  const galleryGrid = document.getElementById("gallery-grid");
  const modalCode = document.getElementById("modal-code");
  const modalTitle = document.getElementById("modal-title");
  const modalPreview = document.getElementById("modal-preview");
  const modalNorm = document.getElementById("modal-norm");
  const modalDesc = document.getElementById("modal-desc");
  const modalSpecs = document.getElementById("modal-specs");

  if (!modal || !galleryGrid || !closeBtn) return;

  let lastTrigger = null;

  const openModal = (itemId, triggerEl) => {
    const item = GALLERY_ITEMS.find((entry) => entry.id === itemId);
    if (!item) return;

    lastTrigger = triggerEl;
    modalCode.textContent = `${item.code} · ${item.categoryLabel.toUpperCase()}`;
    modalTitle.textContent = item.title;
    modalPreview.innerHTML = `<img src="${item.image}" alt="${item.imageAlt}" />`;
    modalNorm.textContent = item.norm;
    modalDesc.textContent = item.fullDesc;
    modalSpecs.innerHTML = item.specs
      .map(
        (spec) => `
        <div class="modal-spec-item">
          <dt>${spec.label}</dt>
          <dd>${spec.value}</dd>
        </div>
      `
      )
      .join("");

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  };

  galleryGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-item-id]");
    if (!trigger) return;
    openModal(trigger.dataset.itemId, trigger);
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function initApplications() {
  const tabs = Array.from(document.querySelectorAll(".app-tab"));
  const panel = document.getElementById("app-panel");
  if (!panel || tabs.length === 0) return;

  const renderApp = (appKey) => {
    const app = APPLICATIONS[appKey];
    if (!app) return;

    tabs.forEach((tab) => {
      const active = tab.dataset.app === appKey;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    panel.innerHTML = `
      <div>
        <div class="app-panel-badge">${app.badge}</div>
        <h3>${app.title}</h3>
        <p>${app.description}</p>
        <div class="app-deliverables">
          ${app.deliverables
            .map(
              (item) => `
              <div class="deliverable-item">
                <strong>${item.title}</strong>
                <span>${item.desc}</span>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
      <div class="app-diagram-box">
        <img src="${app.image}" alt="${app.imageAlt}" />
        <p class="app-diagram-caption">${app.caption}</p>
      </div>
    `;
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => renderApp(tab.dataset.app));
  });

  renderApp("mecanica");
}
