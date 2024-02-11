// Definición de la clase Persona
class Persona {
  // Constructor que recibe nombre, edad y género
  constructor(nombre, edad, genero) {
    // Asigna los valores recibidos a los atributos correspondientes
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  // Método que imprime un saludo personalizado
  saludar() {
    // Construye el saludo utilizando los atributos de la persona
    let saludo = `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}.`;
    // Imprime el saludo en la consola
    console.log(saludo);
  }
}

// Ejemplo de uso:
// Crea una nueva instancia de la clase Persona con valores específicos
let persona1 = new Persona("Juan", 30, "masculino");
// Llama al método saludar() para imprimir el saludo personalizado
persona1.saludar(); // Salida: Hola, soy Juan, tengo 30 años y soy masculino.