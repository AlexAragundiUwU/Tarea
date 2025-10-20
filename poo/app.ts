import { Empleado } from "./empleado.js";
import{ Persona } from "./persona.js";
import { PersonaServicio } from "./personaservicio.js";
import { Estudiante } from "./estudiante.js";
import { Profesor } from "./profesor.js";
const persona = new Persona("Alex", "Aragundi", "1316065661", "Soltero");
persona.cambiarEstadoCivil("soltero");
const empleado = new Empleado("Alex", "Aragundi", "1316065661", "Soltero", 2016, 4656);
empleado.despacho(7777);
const estudiante = new Estudiante("Alex", "Aragundi", "1316065661", "Soltero","tercero","tres");
estudiante.nuevaMatricula("cuatro")
const personaservicio = new PersonaServicio("Alex", "Aragundi", "1316065661", "Soltero", 2016, 4656,"cuatro");
personaservicio.trasladoSeccion("seis")
const profesor = new Profesor("Alex", "Aragundi", "1316065661", "Soltero", 2016, 4656,"fisica");
profesor.cambioCurso("ensamblaje");
console.log(persona);
console.log(empleado);
console.log(estudiante);
console.log(personaservicio);
console.log(profesor);
