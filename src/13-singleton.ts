export class MyService { // Singleton es muy usado para garantizar que solo existe una instancia de un objeto en toda la aplicacion, volviendo privado nuestro constructor y creando uno nuevo que pueda crear una instancia siempre y cuando no haya una ya creada.
  private constructor(private _name: string){}

  static instance: MyService | null = null;

  // Constructor singleton:
  static create(name: string): MyService{
    if(MyService.instance === null){ // Si no existe una instancia, se crea.
      console.log(`Creating instance with name: ${name}`);
      MyService.instance = new MyService(name);
    }
    return MyService.instance; // Despues de crear la instancia se retorna. Si ya existía una instancia, tambien se retorna.
  }


  getName():string  {
    return this._name
  }
}

// Usamos singleton:

const newService = MyService.create('Soy la primera instancia'); // Se guarda la primera
const newService2 = MyService.create('Soy la segunda instancia'); // Se le asigna el retorno de la primera incancia
const newService3 = MyService.create('Soy la tercera instancia'); // Se le asigna el retorno de la primera incancia

console.log(newService, newService2, newService3);
console.log('Las 3 instancias son iguales gracias al singleton?: ', newService === newService2 && newService === newService3);
