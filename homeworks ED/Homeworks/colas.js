class Person {
    constructor(nombre,tiempodellegada) {
        this.nombre = nombre;
        this.tiempodellegada= tiempodellegada;
    }
}

class ATMQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
    }

    dequeue() {
        if (this.queue.length === 0) {
            throw new Error("La cola está vacía.");
        }
        return this.queue.shift();
    }

    peek() {
        if (this.queue.length === 0) {
            throw new Error("La cola está vacía.");
        }
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Crear una cola de personas en el ATM
const atmQueue = new ATMQueue();

// Agregar algunas personas de ejemplo a la cola
atmQueue.enqueue(new Person("juan jose", "8:00 AM"));
atmQueue.enqueue(new Person("Alice", "10:00 AM"));
atmQueue.enqueue(new Person("Bob", "10:15 AM"));
atmQueue.enqueue(new Person("Carol", "10:30 AM"));

// Mostrar las personas en la cola
console.log("Personas en la cola del ATM:");
while (!atmQueue.isEmpty()) {
    const person = atmQueue.dequeue();
    console.log(`${person.nombre} (Llegó a las ${person.tiempodellegada})`);
}