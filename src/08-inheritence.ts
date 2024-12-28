export class Animal {
  constructor(protected _name: string) {}

  protected move() {
    console.log(`${this._name} is moving along!`);
  }

  public greeting() {
    return `Hello, I'm ${this._name}`;
  }
}

export class Dog extends Animal {

  // Si quieres agregar una propiedad a una clase hija debes tener en cuenta que tienes que pasarle los atributos del padre a la clase padre, asi:

  constructor(_name: string, private _owner: string){ // Solo le pasamos la propiedad al super, la nueva propiedad se settea como siempre: this._owner = owner; o private _owner: string;
    super(_name);
  }

  woof(times: number): void {
    for (let index = 0; index <= times; index++) {
      console.log(`${this._name} woof`);
    }

    this.move()
  }

  // Tambien se pueden sobre escribir los metodos del padre:

  move() {
    console.log('moving as a dog');
    // Entonces si queremos volver a llamar el metodo del padre seria asi:
    super.move
  }
}

// const fifi = new Animal('fifi');
// console.log(fifi.greeting());

const fofo = new Dog('fofo', 'Jhorman');
console.log(fofo.greeting());
fofo.woof(2);
