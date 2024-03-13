class Book {
    constructor(name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class Stack {
    constructor() {
        this.books = [];
    }

    push(book) {
        this.books.push(book);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.books.pop();
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.books.length === 0;
    }

    size() {
        return this.books.length;
    }
}

// Creamos algunos libros de ejemplo
let book1 = new Book("The Great Gatsby", "9780743273565", "F. Scott Fitzgerald", "Scribner");
let book2 = new Book("To Kill a Mockingbird", "9780061120084", "Harper Lee", "Harper Perennial");
let book3 = new Book("1984", "9780451524935", "George Orwell", "Signet Classic");

// Creamos una pila de libros y los agregamos
let stack = new Stack();
stack.push(book1);
stack.push(book2);
stack.push(book3);

// Ejemplo de cómo podemos acceder al libro en la cima de la pila
console.log("Libro en la cima de la pila:");
console.log(stack.books[stack.size() - 1]);
