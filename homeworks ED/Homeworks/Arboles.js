class Person {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
        this.children = [];
    }
}

// Creamos los nodos del árbol
const jairo = new Person("Jairo de Jesus Medina", "12/10/1945");
const rosa = new Person("Rosa Matilde Uribe", "05/10/1950");
const carlos = new Person("Carlos Felipe Medina", "21/09/1969");
const valentina = new Person("Valentina Medina", "02/10/2003");
const cecilia = new Person("Cecilia Medina", "23/08/1970");
const lila = new Person("Lila Medina", "30/05/1971");
const carolina = new Person("Carolina Medina", "27/01/1978");
const jhon = new Person("Jhon Jairo Medina", "27/01/1980");
const juan = new Person("Juan David Medina", "06/12/1989");
const santiago = new Person("Santiago Prieto", "15/09/1999");
const juanPablo = new Person("Juan Pablo Prieto", "02/10/2002");
const samuel = new Person("Samuel Prieto", "02/03/2006");
const camilo = new Person("Camilo Quintero", "02/10/2003");
const diana = new Person("Diana Quintero", "02/10/2003");
const juanManuel = new Person("Juan Manuel Lopez", "04/04/2003");
const nicolas = new Person("Nicolas Lopez", "02/10/2004");
const miguel = new Person("Miguel Medina", "04/10/2000");

// Establecemos las relaciones
jairo.children.push(carlos, cecilia, lila, carolina, jhon, juan);
carlos.children.push(valentina);
cecilia.children.push(santiago, juanPablo, samuel);
lila.children.push(camilo, diana);
carolina.children.push(juanManuel, nicolas);
jhon.children.push(miguel);

// Funciones de recorrido
function preorder(node) {
    console.log(node.name + " (" + node.birthdate + ")");
    node.children.forEach(child => preorder(child));
}

function postorder(node) {
    node.children.forEach(child => postorder(child));
    console.log(node.name + " (" + node.birthdate + ")");
}

function inorder(node) {
    if (node.children.length > 0) {
        inorder(node.children[0]);
    }
    console.log(node.name + " (" + node.birthdate + ")");
    if (node.children.length > 1) {
        inorder(node.children[1]);
    }
}

console.log("Recorrido Pre-orden:");
preorder(jairo);
console.log("\nRecorrido Post-orden:");
postorder(jairo);
console.log("\nRecorrido In-orden:");
inorder(jairo);
