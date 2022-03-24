// Туристические путевки. Сформировать набор предложений клиенту по выбору туристической путевки различного типа
//  (отдых, экскурсии, лечение, шопинг, круиз и т.д.) для оптимального выбора. Учитывать возможность выбора транспорта, 
//  питания и числа дней. Реализовать выбор и сортировку путевок.

class Tours{
    constructor(){
        this.tours = [];
    }

    addTour(tour){
        this.tours.push(tour);
    }

    printAllToursInfo(){
        console.log(tours);
    }

    printToursInfoByCountry(country){
        console.log(this.tours.filter(tour => tour.country === country));
    }

    printToursInfoByTransport(transport){
        console.log(this.tours.filter(tour => tour.transport === transport));
    }

    printToursWithFoodIncluded(){
        console.log(this.tours.filter(tour => tour.food === true));
    }

    printToursWithFoodNotIncluded(){
        console.log(this.tours.filter(tour => tour.food === false));
    }

    printToursInfoByPriceRange(minPrice, maxPrice){
        console.log(this.tours.filter(tour => tour.price >= minPrice && tour.price <= maxPrice));
    }

    printToursInfoByDuration(minDuration, maxDuration){
        console.log(this.tours.filter(tour => tour.duration >= minDuration && tour.duration <= maxDuration));
    }

    sortToursByPrice(){
        this.tours.sort((a, b) => a.price > b.price ? 1 : -1);
    }


}

class Tour{
    constructor(country, destination, duration, transport, price, food){
        this.country = country;
        this.destination = destination;
        this.duration = duration;
        this.transport = transport;
        this.price = price;
        this.food = food;
    }

    printTourInfo(){
        console.log(`${this.country} ${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.food}`)
    }

    applyDiscount(discount){
        return (this.price / 100) * (100 - discount);
    }
}

class CulturalTour extends Tour{
    constructor(country, destination, duration, transport, price, food) {
        super(country, destination, duration, transport, price, food)
    }
}

class TreatmentTour extends Tour{
    constructor(country, destination, duration, transport, price, food, disease, age, procedures){
        super(country, destination, duration, transport, price, food)
        this.disease = disease;
        this.age = age;
        this.procedures = procedures;
    }

    printTourInfo(){
        console.log(`${this.country} ${this.destination} ${this.duration} ${this.transfer} ${this.price} ${this.food} ${this.disease} ${this.age} ${this.procedures}`)
    }
}

class ActiveTour extends Tour{
    constructor(country, destination, duration, transport, price, food) {
    super(country, destination, duration, transport, price, food)
    }
}

class RecreationalTour extends Tour{
    constructor(country, destination, duration, transport, price, food) {
    super(country, destination, duration, transport, price, food)
    }
}

class BeachTour extends RecreationalTour{
    constructor(country, destination, duration, transport, price, food, visa, hotel){
        super(country, destination, duration, transport, price, food)
        this.visa = visa;
        this.hotel = hotel;
    }

    printTourInfo(){
        console.log(`${this.country} ${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.food} ${this.visa} ${this.hotel}`)
    }
}

class SpaTour extends RecreationalTour{
    constructor(country, destination, duration, transport, price, food, spaCenter){
        super(country, destination, duration, transport, price, food)
        this.spaCenter = spaCenter;
    }

    printTourInfo(){
        console.log(`${this.country} ${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.food} ${this.spaCenter}`)
    }
}

class SportTour extends ActiveTour{
    constructor(country, destination, duration, transport, price, food, sportType){
        super(country, destination, duration, transport, price, food)
        this.sportType = sportType;
    }

    printTourInfo(){
        console.log(`${this.country} ${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.food} ${this.sportType}`)
    }
}

class HuntingTour extends ActiveTour{
    constructor(country, destination, duration, transport, price, food, huntingType){
        super(country, destination, duration, transport, price, food)
        this.huntingType = huntingType;
    }

    printTourInfo(){
        console.log(`${this.country} ${this.destination} ${this.duration} ${this.transport} ${this.price} ${this.food} ${this.huntingType}`)
    }
}

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.tickets = [];
    }

    addTicket(ticket){
        this.tickets.push(ticket);
    }

    printTickets(){
        console.log(this.tickets);
    }

    getGeneralPrice() {
        return this.tickets.map(obj => obj.price)
            .reduce((a, b) => a + b);
    }

    applyGeneralDiscount(discount){
        return (this.getGeneralPrice() / 100 ) * (100 - discount);
    }

}

let tours = new Tours();
tours.addTour(new HuntingTour('Belarus', 'Vitebsk', 2, 'Car', 100, true, 'Shooting'));
tours.addTour(new SportTour('Belarus', 'Minsk', 1, 'Car', 10, false, 'Football'));
tours.addTour(new SportTour('Russia', 'Moskow', 1, 'Train', 50, true, 'Football'));
tours.printAllToursInfo();
//tours.sortToursByPrice();
//tours.printAllToursInfo();
//tours.printToursInfoByCountry('Russia');
//tours.printToursInfoByTransport('Train');
//tours.printToursInfoByPriceRange(20, 80);
//tours.printToursInfoByDuration(1, 1);
//tours.printToursWithFoodNotIncluded();

let anna = new Person();
anna.addTicket(new SpaTour('France', 'Paris', 5, 'Car', 100, true, 'Riviera SPA Club'));
anna.addTicket(new BeachTour('Capo Verde', 'Boa Vista', 12, 'Plane', 2500, true, true, 'RIU Funana'));
// anna.printTickets();
// console.log(anna.getGeneralPrice());
// console.log(anna.applyGeneralDiscount(20));
