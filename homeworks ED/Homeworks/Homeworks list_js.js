
class Tarea {
    constructor(titulo, descripcion, siguienteTarea) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.siguienteTarea = siguienteTarea;
    }
}

// Definir una lista de tareas (TODOs)
var listaTareas = [];

// Crear tareas y vincularlas entre sí
var tarea1 = new Tarea("Tarea 1", "crear listas", 2);
var tarea2 = new Tarea("Tarea 2", "estudiar las listas ", 3);
var tarea3 = new Tarea("Tarea 3", "presentar las listas ", 4);
var tarea4 = new Tarea("Tarea 4", "ganar la presentacion", null);

// Agregar tareas a la lista
listaTareas.push(tarea1);
listaTareas.push(tarea2);
listaTareas.push(tarea3);
listaTareas.push(tarea4);

// Función para imprimir todas las tareas
function imprimirTodasLasTareas() {
    listaTareas.forEach(function(tarea, indice) {
        console.log("Tarea " + (indice + 1) + ":");
        console.log("  Título: " + tarea.titulo);
        console.log("  Descripción: " + tarea.descripcion);
        if (tarea.siguienteTarea !== null) {
            console.log("  Puntos a la siguiente tarea: " + tarea.siguienteTarea);
        } else {
            console.log("  No hay siguiente tarea.");
        }
        console.log("");
    });
}

// Imprimir todas las tareas
imprimirTodasLasTareas();
