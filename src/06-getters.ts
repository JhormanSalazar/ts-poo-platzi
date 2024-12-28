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

  // Un ejemplo de implementacion de un get es para obtener el resultado de una funcion sin tener que ejecutarla, por ejemplo: "Es año viciesto: si"; y no: "const isLeap = isLeapYear();"; asi acortamos mucho codigo y es mas natural, ya que se guarda como propiedad
  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;

    if (this._year % 100 === 0) return false;

    return this._year % 4 === 0;
  }
}

const myDate1 = new MyDate(2000, 7, 10);
console.log('2000', myDate1.isLeapYear);

const myDate2 = new MyDate(2001, 7, 10);
console.log('2001', myDate2.isLeapYear);


const myDate3 = new MyDate(2025, 7, 10);
console.log('2025', myDate3.isLeapYear);
