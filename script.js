const malla = [
  {
    semestre: 1,
    ramos: [
      { nombre: "Introducción a la historia", tipo: "teórico" },
      { nombre: "Mundo antiguo", tipo: "teórico" },
      { nombre: "Historia y filosofía de la educación en chile y latam", tipo: "teórico" },
      { nombre: "Autorregulación", tipo: "teórico" },
      { nombre: "Introducción a la geografía", tipo: "teórico" }
    ]
  },
  {
    semestre: 2,
    ramos: [
      { nombre: "Mundo medieval", tipo: "teórico" },
      { nombre: "Sociedades indígenas de américa y chile", tipo: "teórico" },
      { nombre: "Pensamiento político y estado", tipo: "teórico" },
      { nombre: "Políticas públicas y sistema educativo chileno", tipo: "teórico" },
      { nombre: "Lenguaje y comunicación", tipo: "teórico" }
    ]
  },
  {
    semestre: 3,
    ramos: [
      { nombre: "Mundo moderno XVI-XVIII", tipo: "teórico" },
      { nombre: "América colonial XVI-XVIII", tipo: "teórico" },
      { nombre: "Chile colonial XVII-XVIII", tipo: "teórico" },
      { nombre: "Teoría del pensamiento económico", tipo: "teórico" },
      { nombre: "Gestión en el aula", tipo: "teórico" },
      { nombre: "Ética y educación", tipo: "teórico" }
    ]
  },
  {
    semestre: 4,
    ramos: [
      { nombre: "Mundo contemporaneo XVIII-XIX", tipo: "teórico" },
      { nombre: "América siglo XIX", tipo: "teórico" },
      { nombre: "Chile siglo XIX", tipo: "teórico" },
      { nombre: "Geografía física y problemáticas medioambientales", tipo: "teórico" },
      { nombre: "Teoría del aprendizaje en el contexto de la adolescencia y cultura juvenil", tipo: "teórico" },
      {
        nombre: "Práctica inicial",
        tipo: "práctico",
        prerrequisitos: [
          "Historia y filosofía de la educación en chile y latam",
          "Políticas públicas y sistema educativo chileno"
        ]
      }
    ]
  },
  {
    semestre: 5,
    ramos: [
      { nombre: "Mundo contemporáneo XX", tipo: "teórico" },
      { nombre: "América siglo XX", tipo: "teórico" },
      { nombre: "Chile siglo XX", tipo: "teórico" },
      { nombre: "Ciudadanía, democracia y derechos humanos", tipo: "teórico" },
      { nombre: "Gestión curricular para el aprendizaje", tipo: "teórico" },
      { nombre: "Métodos de evaluación educativa", tipo: "teórico" },
      { nombre: "Taller de integración 1", tipo: "práctico" }
    ]
  },
  {
    semestre: 6,
    ramos: [
      { nombre: "Historia de estados unidos y américa latina", tipo: "teórico" },
      { nombre: "Teoría de la historia geográfica de la población y de los asentamientos humanos", tipo: "teórico" },
      { nombre: "Planificación curricular y evaluación para la historia y ciencias sociales", tipo: "teórico" },
      { nombre: "Didáctica de la historia", tipo: "teórico" },
      {
        nombre: "Taller de integración 2",
        tipo: "práctico",
        prerrequisitos: ["Taller de integración 1"]
      }
    ]
  },
  {
    semestre: 7,
    ramos: [
      { nombre: "Metodología de la investigación en ciencias sociales", tipo: "teórico" },
      { nombre: "Historia del tiempo presente", tipo: "teórico" },
      { nombre: "Geografía de chile y américa", tipo: "teórico" },
      { nombre: "Didáctica de las ciencias sociales", tipo: "teórico" },
      {
        nombre: "Practica",
        tipo: "práctico",
        prerrequisitos: ["Práctica inicial"]
      }
    ]
  },
  {
    semestre: 8,
    ramos: [
      { nombre: "Seminario de historia mundial", tipo: "teórico" },
      { nombre: "Seminario de historia de chile", tipo: "teórico" },
      { nombre: "Seminario de geografía regional de Valparaíso", tipo: "teórico" },
      { nombre: "Didáctica de la formación ciudadana", tipo: "teórico" },
      { nombre: "Métodos de investigación", tipo: "teórico" },
      {
        nombre: "Taller de reflexión sobre la práctica 1",
        tipo: "teórico",
        prerrequisitos: ["Práctica inicial", "Practica"]
      }
    ]
  },
  {
    semestre: 9,
    ramos: [
      { nombre: "Monográfico historia Y", tipo: "teórico" },
      { nombre: "Seminario de grado I", tipo: "teórico" },
      {
        nombre: "Practica profesional",
        tipo: "práctico",
        prerrequisitos: ["Práctica inicial", "Practica", "Taller de reflexión sobre la práctica 1"]
      }
    ]
  },
  {
    semestre: 10,
    ramos: [
      { nombre: "Monográfico historia II", tipo: "teórico" },
      { nombre: "Elaboración de proyectos educativos en formación ciudadana", tipo: "teórico" },
      {
        nombre: "Taller de reflexión sobre la práctica 2",
        tipo: "teórico",
        prerrequisitos: ["Taller de reflexión sobre la práctica 1", "Practica profesional"]
      },
      { nombre: "Seminario de grado II", tipo: "teórico" }
    ]
  }
];

// Colores pastel para diferenciar tipos de ramos
const colores = {
  teórico: "#d8eafd",
  práctico: "#d3f7d5"
};

const container = document.querySelector(".malla");

malla.forEach((sem) => {
  const semDiv = document.createElement("div");
  semDiv.classList.add("semestre");

  const titulo = document.createElement("h3");
  titulo.textContent = `Semestre ${sem.semestre}`;
  semDiv.appendChild(titulo);

  sem.ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.classList.add("ramo");

    // Restaurar progreso si está guardado
    const estado = localStorage.getItem(ramo.nombre);
    if (estado === "completado") {
      div.classList.add("completado");
    }

    div.textContent = ramo.nombre;
    div.style.backgroundColor = colores[ramo.tipo] || "#eee";

    // Mostrar tooltip al pasar el mouse
    div.addEventListener("mouseenter", (e) => {
      const tooltip = document.getElementById("tooltip");
      tooltip.innerHTML = `
        <strong>${ramo.nombre}</strong><br>
        Tipo: ${ramo.tipo}<br>
        ${ramo.prerrequisitos ? "Prerrequisitos: " + ramo.prerrequisitos.join(", ") : ""}
      `;
      tooltip.classList.add("visible");
    });

    div.addEventListener("mousemove", (e) => {
      const tooltip = document.getElementById("tooltip");
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
    });

    div.addEventListener("mouseleave", () => {
      document.getElementById("tooltip").classList.remove("visible");
    });

    // Marcar o desmarcar ramo
    div.addEventListener("click", () => {
      div.classList.toggle("completado");
    });

    semDiv.appendChild(div);
  });

  container.appendChild(semDiv);
});

// Botón para guardar
document.getElementById("guardar").addEventListener("click", () => {
  document.querySelectorAll(".ramo").forEach((div) => {
    const nombre = div.textContent;
    if (div.classList.contains("completado")) {
      localStorage.setItem(nombre, "completado");
    } else {
      localStorage.removeItem(nombre);
    }
  });
  alert("¡Progreso guardado!");
});

// Botón para reiniciar
document.getElementById("reiniciar").addEventListener("click", () => {
  document.querySelectorAll(".ramo").forEach((div) => {
    div.classList.remove("completado");
    localStorage.removeItem(div.textContent);
  });
  alert("Progreso reiniciado");
});
