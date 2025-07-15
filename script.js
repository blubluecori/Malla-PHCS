const ramosPorSemestre = {
  1: [
    { nombre: "Introducción a la historia", tipo: "teorico" },
    { nombre: "Mundo antiguo", tipo: "teorico" },
    { nombre: "Historia y filosofía de la educación en chile y latam", tipo: "teorico" },
    { nombre: "Autorregulación", tipo: "teorico" },
    { nombre: "Introducción a la geografía", tipo: "teorico" }
  ],
  2: [
    { nombre: "Mundo medieval", tipo: "teorico" },
    { nombre: "Sociedades indígenas de américa y chile", tipo: "teorico" },
    { nombre: "Pensamiento político y estado", tipo: "teorico" },
    { nombre: "Políticas públicas y sistema educativo chileno", tipo: "teorico" },
    { nombre: "Lenguaje y comunicación", tipo: "teorico" }
  ],
  3: [
    { nombre: "Mundo moderno XVI-XVIII", tipo: "teorico" },
    { nombre: "América colonial XVI-XVIII", tipo: "teorico" },
    { nombre: "Chile colonial XVII-XVIII", tipo: "teorico" },
    { nombre: "Teoría del pensamiento económico", tipo: "teorico" },
    { nombre: "Gestión en el aula", tipo: "teorico" },
    { nombre: "Ética y educación", tipo: "teorico" }
  ],
  4: [
    { nombre: "Mundo contemporaneo XVIII-XIX", tipo: "teorico" },
    { nombre: "América siglo XIX", tipo: "teorico" },
    { nombre: "Chile siglo XIX", tipo: "teorico" },
    { nombre: "Geografía física y problemáticas medioambientales", tipo: "teorico" },
    { nombre: "Teoría del aprendizaje en la adolescencia y cultura juvenil", tipo: "teorico" },
    { nombre: "Práctica inicial", tipo: "practico", prerequisitos: ["Historia y filosofía de la educación en chile y latam", "Políticas públicas y sistema educativo chileno"] }
  ],
  5: [
    { nombre: "Mundo contemporáneo XX", tipo: "teorico" },
    { nombre: "América siglo XX", tipo: "teorico" },
    { nombre: "Chile siglo XX", tipo: "teorico" },
    { nombre: "Ciudadanía, democracia y derechos humanos", tipo: "teorico" },
    { nombre: "Gestión curricular para el aprendizaje", tipo: "teorico" },
    { nombre: "Métodos de evaluación educativa", tipo: "teorico" },
    { nombre: "Taller de integración 1", tipo: "practico" }
  ],
  6: [
    { nombre: "Historia de estados unidos y américa latina", tipo: "teorico" },
    { nombre: "Teoría de la historia geográfica de la población", tipo: "teorico" },
    { nombre: "Planificación curricular y evaluación para historia y CCSS", tipo: "teorico" },
    { nombre: "Didáctica de la historia", tipo: "teorico" },
    { nombre: "Taller de integración 2", tipo: "practico", prerequisitos: ["Taller de integración 1"] }
  ],
  7: [
    { nombre: "Metodología de la investigación en CCSS", tipo: "teorico" },
    { nombre: "Historia del tiempo presente", tipo: "teorico" },
    { nombre: "Geografía de chile y américa", tipo: "teorico" },
    { nombre: "Didáctica de las ciencias sociales", tipo: "teorico" },
    { nombre: "Practica", tipo: "practico", prerequisitos: ["Práctica inicial"] }
  ],
  8: [
    { nombre: "Seminario de historia mundial", tipo: "teorico" },
    { nombre: "Seminario de historia de chile", tipo: "teorico" },
    { nombre: "Seminario de geografía regional de Valparaíso", tipo: "teorico" },
    { nombre: "Didáctica de la formación ciudadana", tipo: "teorico" },
    { nombre: "Métodos de investigación", tipo: "teorico" },
    { nombre: "Taller de reflexión sobre la práctica 1", tipo: "teorico", prerequisitos: ["Práctica inicial", "Practica"] }
  ],
  9: [
    { nombre: "Monográfico historia Y", tipo: "teorico" },
    { nombre: "Seminario de grado I", tipo: "teorico" },
    { nombre: "Practica profesional", tipo: "practico", prerequisitos: ["Práctica inicial", "Practica", "Taller de reflexión sobre la práctica 1"] }
  ],
  10: [
    { nombre: "Monográfico historia II", tipo: "teorico" },
    { nombre: "Elaboración de proyectos en formación ciudadana", tipo: "teorico" },
    { nombre: "Taller de reflexión sobre la práctica 2", tipo: "teorico", prerequisitos: ["Taller de reflexión sobre la práctica 1", "Practica profesional"] },
    { nombre: "Seminario de grado II", tipo: "teorico" }
  ]
};

const contenedor = document.querySelector('.malla');
const desc = document.getElementById('descripcion');

window.onload = () => {
  Object.entries(ramosPorSemestre).forEach(([semestre, ramos]) => {
    const box = document.createElement('div');
    box.classList.add('semestre');
    box.innerHTML = `<h2>Semestre ${semestre}</h2>`;
    ramos.forEach(ramo => {
      const div = document.createElement('div');
      div.classList.add('ramo');
      if (ramo.tipo === 'practico') div.classList.add('practico');
      div.textContent = ramo.nombre;
      div.onclick = () => {
        div.classList.toggle('completado');
        desc.textContent = `📘 ${ramo.nombre} | Tipo: ${ramo.tipo.toUpperCase()}` + 
          (ramo.prerequisitos ? ` | Prerrequisitos: ${ramo.prerequisitos.join(', ')}` : '');
      };
      box.appendChild(div);
    });
    contenedor.appendChild(box);
  });

  const guardado = JSON.parse(localStorage.getItem('progresoMalla'));
  if (guardado) {
    document.querySelectorAll('.ramo').forEach((el, i) => {
      if (guardado[i]) el.classList.add('completado');
    });
  }
};

function guardarProgreso() {
  const estado = [];
  document.querySelectorAll('.ramo').forEach(el => {
    estado.push(el.classList.contains('completado'));
  });
  localStorage.setItem('progresoMalla', JSON.stringify(estado));
  alert('¡Progreso guardado con éxito!');
}

function reiniciarProgreso() {
  localStorage.removeItem('progresoMalla');
  document.querySelectorAll('.ramo').forEach(el => el.classList.remove('completado'));
  alert('Progreso reiniciado');
                                                      }
