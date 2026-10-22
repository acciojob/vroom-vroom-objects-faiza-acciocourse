// Complete the js code
const car = {
	constructor(make:string, model:string) {
		this.make = make;
		this.model = model;
	}
	getMakeModel: function(){
		return this.make+" "+this.model;
	}
};

const sportsCar = Object.create(car,topSpeed);
sportsCar.getTopSpeed = function(){
		return this.topSpeed;
	}



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
