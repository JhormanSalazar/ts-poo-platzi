export class MyDate {
  constructor(
    // Este es un constructor abreviado, si especificamos el modificador de acceso typescript sabra que hay que hacer, es basicamente lo mismo que: this.year = year; y en caso de no ser pasado el año se asigna 1993.
    private _year: number = 1993,
    private _month: number = 7,
    private _day: number = 9 // Vamos a llamar con _ a las varaibles privadas
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this._year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this._year += amount;
    }
  }

  // Para hacer un get es asi.

  get day() {
    // Al llamarlo se comporta como una propiedad, es decir, sin (); asi: myDate.day;
    // Se puede implementar aun mas codigo...
    return this._day;
  }

  get month() {
    // Al llamarlo se comporta como una propiedad, es decir, sin (); asi: myDate.day;
    // Se puede implementar aun mas codigo...
    return this._month;
  }

  get year() {
    // Al llamarlo se comporta como una propiedad, es decir, sin (); asi: myDate.day;
    // Se puede implementar aun mas codigo...
    return this._year;
  }

  // Un ejemplo de implementacion de un get es para obtener el resultado de una funcion sin tener que ejecutarla, por ejemplo: "Es año viciesto: si"; y no: "const isLeap = isLeapYear();"; asi acortamos mucho codigo y es mas natural, ya que se guarda como propiedad
  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;

    if (this._year % 100 === 0) return false;

    return this._year % 4 === 0;
  }

  // Los setters se crean con la palabra "set" y pueden tener el mismo nombre que el "get" de la propiedad en cuestion, por ejemplo set month y get month, no habria problema.

  set day(newDay: number) {
    if(newDay >= 1 && newDay <= 30) this._day = newDay;
  }

  set month(newMonth: number){
    if(newMonth >= 1 && newMonth <= 12) {
      this._month = newMonth;
    }
    else {
      throw new Error('Month out of range')
    }
  }

  set year(newYear: number){
    this._year = newYear;
  }
}

const myDate1 = new MyDate(2000, 7, 10);
console.log('2000', myDate1.isLeapYear);
