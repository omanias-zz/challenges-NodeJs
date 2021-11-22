class Usuario {
  constructor(nombre, apellido, mascotas, libros ) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.mascotas=[mascotas];
      this.libros=[libros];
  }

  getFullName(){
      return (`${this.nombre} ${this.apellido}`)
  }

  addMascota(raza){
      return this.mascotas.push(raza)
  }

  countMascotas(){
      return this.mascotas.length
  }

  addBook(){
      return
  }

  getBookNames(){
      return
  }
}

const usuario= new Usuario('Matias','Lopez','canario');
usuario.addMascota('pitbull')

console.log(usuario)


