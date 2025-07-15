const malla = [
  {
    semestre: "Semestre 1",
    ramos: [
      { nombre: "Introducción a la historia", tipo: "teórico" },
      { nombre: "Mundo antiguo", tipo: "teórico" },
      { nombre: "Historia y filosofía de la educación en Chile y LATAM", tipo: "teórico" },
      { nombre: "Autorregulación", tipo: "teórico" },
      { nombre: "Introducción a la geografía", tipo: "teórico" }
    ]
  },
  {
    semestre: "Semestre 2",
    ramos: [
      { nombre: "Mundo medieval", tipo: "teórico" },
      { nombre: "Sociedades indígenas de América y Chile", tipo: "teórico" },
      { nombre: "Pensamiento político y estado", tipo: "teórico" },
      { nombre: "Políticas públicas y sistema educativo chileno", tipo: "teórico" },
      { nombre: "Lenguaje y comunicación", tipo: "teórico" }
    ]
  },
  {
    semestre: "Semestre 3",
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
    semestre: "Semestre 4",
    ramos: [
      { nombre: "Mundo contemporáneo XVIII-XIX", tipo: "teórico" },
      { nombre: "América siglo XIX", tipo: "teórico" },
      { nombre: "Chile siglo XIX", tipo: "teórico" },
      { nombre: "Geografía física y problemáticas medioambientales", tipo: "teórico" },
      { nombre: "Teoría del aprendizaje en el contexto de la adolescencia y cultura juvenil", tipo: "teórico" },
      { nombre: "Práctica inicial", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 5",
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
    semestre: "Semestre 6",
    ramos: [
      { nombre: "Historia de Estados Unidos y América Latina", tipo: "teórico" },
      { nombre: "Teoría de la historia geográfica de la población", tipo: "teórico" },
      { nombre: "Planificación curricular y evaluación", tipo: "teórico" },
      { nombre: "Didáctica de la historia", tipo: "teórico" },
      { nombre: "Taller de integración 2", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 7",
    ramos: [
      { nombre: "Metodología de la investigación", tipo: "teórico" },
      { nombre: "Historia del tiempo presente", tipo: "teórico" },
      { nombre: "Geografía de Chile y América", tipo: "teórico" },
      { nombre: "Didáctica de las ciencias sociales", tipo: "teórico" },
      { nombre: "Práctica intermedia", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 8",
    ramos: [
      { nombre: "Seminario de historia mundial", tipo: "teórico" },
      { nombre: "Seminario de historia de Chile", tipo: "teórico" },
      { nombre: "Seminario geografía regional de Valparaíso", tipo: "teórico" },
      { nombre: "Didáctica de la formación ciudadana", tipo: "teórico" },
      { nombre: "Métodos de investigación", tipo: "teórico" },
      { nombre: "Taller reflexión práctica 1", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 9",
    ramos: [
      { nombre: "Monográfico historia I", tipo: "teórico" },
      { nombre: "Seminario de grado I", tipo: "teórico" },
      { nombre: "Práctica profesional", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 10",
    ramos: [
      { nombre: "Monográfico historia II", tipo: "teórico" },
      { nombre: "Elaboración de proyectos educativos", tipo: "teórico" },
      { nombre: "Taller reflexión práctica 2", tipo: "práctico" },
      { nombre: "Seminario de grado II", tipo: "teórico" }
    ]
  }
];

const mallaContainer = document.getElementById('malla');

function renderMalla() {
  mallaContainer.innerHTML = '';
  const progreso = JSON.parse(localStorage.getItem('mallaProgreso')) || [];

  malla.forEach((sem) => {
    const col = document.createElement('div');
    col.className = 'semestre';
    const h2 = document.createElement('h2');
    h2.textContent = sem.semestre;
    col.appendChild(h2);

    sem.ramos.forEach((ramo) => {
      const div = document.createElement('div');
      div.textContent = ramo.nombre;
      div.className = 'ramo';
      if (ramo.tipo === 'práctico') div.classList.add('practico');
      if (progreso.includes(ramo.nombre)) div.classList.add('completado');

      div.onclick = () => {
        div.classList.toggle('completado');
      };
      col.appendChild(div);
    });

    mallaContainer.appendChild(col);
  });
}

document.getElementById('guardar').onclick = () => {
  const completados = Array.from(document.querySelectorAll('.ramo.completado'))
    .map(el => el.textContent);
  localStorage.setItem('mallaProgreso', JSON.stringify(completados));
  alert('¡Progreso guardado!');
};

document.getElementById('reiniciar').onclick = () => {
  if (confirm("¿Seguro que deseas reiniciar tu progreso?")) {
    localStorage.removeItem('mallaProgreso');
    renderMalla();
  }
};

renderMalla();
      
