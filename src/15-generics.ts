import { Dog } from './09-protected';

// function getValue(value: unknown ) {
//   return value;
// }

// function getValue(value: string | number ) {
//   return value;
// }

function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11, 1, 1]).forEach;
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting;
// Promise<boolean>
// axios.get<string[]>

//Nota: Los genericos son sumamente utiles para ahorrar codigo, solo nos sirven en tiempo de desarrollo y compilacion, ya que javascript no soporta tipos.
// Ejemplos utiles de genericos:

// 2 parametros en un metodo, uno como objeto y el otro como key de propiedad dentro de el:

function prueba<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let profesional = {
  nombre: 'Miguel A A',
  empresa: 'DesarrolloWeb.com',
};

console.log(prueba(profesional, 'empresa')); // Perfecta invocación
// console.log(prueba(profesional, 'propiedadInexistente')); // invocación incorrecta, porque la propiedad no pertenece al objeto

// Clases genéricas
/*
El conjunto de recursos disponibles con genéricos aumenta cuando los usamos con clases. Así podemos tener una clase en la que declaremos el uso de un tipo genérico.

class Generica<T> {
  hazAlgo(x: T, y: T): T {
    return x;
  }
}
Como puedes ver, ese genérico lo puedes usar a lo largo del código de la clase, por ejemplo, el método hazAlgo() recibe dos genéricos y luego devuelve otro genérico.

En el momento de instanciar un objeto de esta clase, podemos indicar el tipo concreto de datos que se aplicará a ese genérico.

let instancia = new Generica<number>();
Ahora, usando los métodos de la clase se podrá inferir el tipo de datos que reciben los métodos con parámetros genéricos o el tipo de datos genérico devuelto.
let variable = instancia.hazAlgo(3, 4);
*/
