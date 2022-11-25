const fs = require('fs')

class Contenedor {

    constructor(archivo) {

        this.archivo = archivo
    }

    save = async (objects) => {

        const objeto = await this.getAll();

        try {
            let id = 0;
            objeto.lenght === 0 ? (id = 1) : (id = objeto[objeto.lenght - 1].id + 1)
            const newObj = { ...objects, id: id }
            objeto.push(newObj)
            await this.escribirArchivo(objeto);
            console.log(` El producto ${objects.title} se subio corrctamente`)
            return newObj.id;

        } catch (error) {

            console.log('Hubo un error', error)

        }

    }

    getById = async id => {
        const productos = await this.getAll();
        try {
            const producto = productos.find(producto => producto.id === id);
            return producto ? producto : null
        } catch (error) {
            console.log('Hubo un error', error)

        }
    };

    getAll = async () => {
        try {
            const productos = await fs.promises.readFile(this.archivo, utf - 8)
            return JSON.parse(productos)
        } catch (error) {
            console.log('Hubo un error', error)
        }
    };

    deleteById = async id => {
        let productos = await this.getAll();
        try {
            productos = productos.filter(producto => producto.id != id);
            await this.writeFile(productos);
        } catch (error) {
            console.log('Hubo un error', error);
        }
    };

    deleteAll = async () => {
        try {
            this.escribirArchivo([]);
            console.log("Productos eliminados!");
        } catch (err) {
            console.log('Hubo un error' , error);
        }
    };


    escribirArchivo = async (data) => {
        try {
            await fs.promises.writeFile(
                this.archivo,
                JSON.stringify(data, null, 2)
            )
        } catch (error) {
            console.log('Hubo un error', error)
        }
    };
}

const ob = {
    title: "Zapato",
    price: 3000,
    
}

const ob1 = {
    title: "Zapatillas",
    price: 20000,
    
}

const ob2 = {
    title: "Ojotas",
    price: 15000,
    
}

const prods = new Contenedor ("productos.txt");

productos.save (ob2)
