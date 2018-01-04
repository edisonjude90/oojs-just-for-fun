function Car(engineCapacity,engineNumber,chaseNumber,frameNumber){
	
	this.engineCapacity = engineCapacity;
	this.engineNumber = engineNumber;
	this.chaseNumber = chaseNumber;
	this.frameNumber = frameNumber;

}

Car.CalculateTroque = function(speed, rpm){
	return Math.round(rpm / speed);
}

Car.prototype.startEngine = function(){
	console.log("engine started !!!!!");
}

Car.prototype.stopEngine = function(){
	console.log("engine stoped !!!!!");
}

Car.prototype.accelerate  = function(){
	console.log("moving !!!!!");
}

function SportsCar(engineCapacity,engineNumber,chaseNumber,frameNumber,carType,carColor,carName){
	Car.call(this,engineCapacity,engineNumber,chaseNumber,frameNumber);
	this.carType = carType;
	this.carColor = carColor;
	this.carName = carName;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getCarDetail = function(){

	console.log("engineCapacity : ", this.engineCapacity);
	console.log("engineNumber : ", this.engineNumber);
	console.log("chaseNumber : ", this.chaseNumber);
	console.log("frameNumber : ", this.frameNumber);
	console.log("carColor : ", this.carColor);
	console.log("carName : ", this.carName);
	
}

var sportcar1 = new SportsCar("14000cc","123AAAEEE","3333AAAEE","EEETTT3333","2-Door","Red","Car 1");


