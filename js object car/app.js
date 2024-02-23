function Car(marka, model, year, engine) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.engine = engine;
}
let car1 = new Car("Toyota", "Camry", 2022, "2.5L");
let car2 = new Car("Honda", "Accord", 2021, "2.0L");
let car3 = new Car("Ford", "Mustang", 2023, "5.0L");
console.log(car1);