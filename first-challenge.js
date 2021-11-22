class Usuario {
  constructor(nombre, apellido, mascotas = [], libros = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas;
    this.libros = libros;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(pet) {
    return this.mascotas.push(pet);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(book, author) {
    return this.libros.push({ book: book, author: author });
  }

  getBookNames() {
    return this.libros.map((a) => a);
  }
}

const usuario = new Usuario("Omar", "Manias", ["perro"], []);

usuario.addMascota("canario");
usuario.addBook("Martin Fierro", "Jose Hernandez");

console.log(usuario);
