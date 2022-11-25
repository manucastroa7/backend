class Usuario {
    constructor(nombre, apellido, libros, mascotas) {

        this.nombre = nombre

        this.apellido = apellido

        this.libros = [libros]

        this.mascotas = [mascotas]

    }

    getFullName() {

        console.log(`Nombre y Apellido: ${this.nombre} ${this.apellido} `)

    }

    addMascota(mascota) {

        this.mascotas.push(mascota);

    }

    countMascotas() {

        console.log(`${this.nombre} tiene ${this.mascotas.length} mascotas`)

    }

    addBook(nombre, autor) {

        this.libros.push({ nombre: nombre, autor: autor });

    }

    getBookNames() {

        const nombreLibros = [];

        this.libros.forEach((libro) => {

            nombreLibros.push(libro.nombre)

        });

        console.log(nombreLibros);

    }
}


const usuario1 = new Usuario('Manuela', 'Castro', { nombre: 'Los Arboles Mueren de Pie', autor: 'Alejandro Casona' }, 'Diana');

usuario1.getFullName();

usuario1.addMascota('Popi');

usuario1.addMascota('Kun');

usuario1.countMascotas();

usuario1.addBook('La Vuelta al Mundo en 80 dias’, ‘Julio Verne');

usuario1.addBook('El Señor de los anillos’, ‘Rowling');

usuario1.getBookNames();

console.log(usuario1)