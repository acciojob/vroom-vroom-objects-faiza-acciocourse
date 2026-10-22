// Complete the js code
function Car(make, model) {
	getMakeModel() {
		returns make+" "+model;
	}
}

function SportsCar(make, model, topSpeed) extends Car{
	getTopSpeed() {
		return topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
