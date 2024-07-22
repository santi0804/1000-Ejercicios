
//

class Persona{                       //Sintaisis de clases
    constructor(nombre, edad) {      //COnstructor y parametros.
        this.nombre = nombre;        //propiedades
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola mi nombre es: ${this.nombre} y tengo ${this.edad} años`)
    }                                // Estos son los metodos
}


const persona1 = new Persona('Mariana', 25);   //Esta es la istancia
persona1.saludar();


