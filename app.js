//objeto literal

const dog = {
  //key:value (propiedad y valor que tiene esa propiedad)
  raza: 'quiltro',
  peso: 15,
  nombre: 'Suave Lomito',
  color: 'negro',
  
}
/*
Para acceder en consola a cosas que queremos saber se puede con
Dot dotation:
dog.nombre
Respuesta :"Suave Lomito"
o con corchetes:
dog['peso']
Respuesta : 15*/

//objeto constructor
//con mayuscula cuando es constructor
class Persona {
  constructor (name, lastName){
    //espejo, hace referencia a el mismo (this)
    this.name = name;
    this.lastName = lastName;
    //los comportamientos de los objetos son los MÉTODOS. ej el método en code 
  }
  greeting(){  // `` : esto se llama template string
    console.log(`Hola a todas, mi nombre es ${this.name} ${this.lastName}`);
    //esto de arriba es lo mismo que: console.log('hola mi nombre es' + this.name + lastname);
  }
}



let miranda = new Person ('Miranda', 'naranja');
/*
miranda.__proto___; (vemos al padre de lla instancia (class person) para saber de donde nació este de donde heredo todas las propiedades que tiene)
miranda.__proto___.proto__; (Padre del objeto constructor Person)(sirve para ver ) */


//Para agregarle una propiedad a miranda que no esta en el objeto constructor se pone:_

miranda.age = 28;

//hasOwnProperty() verificar si mi objeto tiene la propiedad que yo quiero consultar, y devuelve tru o false se hace asi:
// miranda.hasOwnProperty('age'); y saldrá: true si es que la tiene. 
// miranda.hasOwnProperty('sexo'); y saldra: false (no la tiene).

//miranda.hasOwnProperty('ǵreeting') saldra false porque es un método, y este es de padre ... en cambio si hago:
//miranda.__proto___.hasOwnProperty('greeting'); saldra true

//una nueva instancia (o sea nueva persona)

let fabian = new Person ('fabian', 'bravo');

//para saber si tiene el mismo padre pongo:
// miranda.__proto__===fabian.__proto__   y saldra true porque tienen el mismo papito

// fabian.greeting(); y saldra sus cositas

// ahora queremos agregarle un método a fabián y tmb se le agregara a miranda, porque agrego metodo al prototipo, pero indicandoselo a la instancia del objeto:

fabian.__proto__.goodbye = function(){
  return 'Chaito pescadito'
}

//para verlo :
fabian.goodbye(); // dira Chaito pescadito 


// este va heredar las propiedades del objeto person 
class Coach extens Person {
  constructor(name, lastName){
    super(name, lastName);// (super es una keyword para indicar que los argumentos qye tome son los mismos del objetos Person). Para saber que esta heredando necesita la palabra extend y super
    this.track = 'Front End'; //para que se diferencia de valor persona va a tener esto distinto
  }
}

let majo = new Person ('Majo', 'Salazar'); 
//va a ser un objeto basado en persona

let ale = new Coah ('Alejandra', 'Neira'); // pero esta dirá ahora su nombre, lastname, y además propiedad track que dice Front End. 