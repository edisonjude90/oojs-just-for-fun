
// Creating Car Object using the constructor notation 

function Car(engineCapacity,engineNumber,chaseNumber,frameNumber){
	
	// adding properties to the Car Object gets fired every time a new object is created
	this.engineCapacity = engineCapacity;
	this.engineNumber = engineNumber;
	this.chaseNumber = chaseNumber;
	this.frameNumber = frameNumber;

}

// adding Static Method to the Car Object

Car.CalculateTroque = function(speed, rpm){
	console.log(Math.round(rpm / speed));
}

// adding Methods to the Car Objects prototype 

Car.prototype.startEngine = function(){
	console.log("engine started !!!!!");
}

Car.prototype.stopEngine = function(){
	console.log("engine stoped !!!!!");
}

Car.prototype.accelerate  = function(){
	console.log("moving !!!!!");
}


// Creating SportsCar Object using the constructor notation 

function SportsCar(engineCapacity,engineNumber,chaseNumber,frameNumber,carType,carColor,carName){
	// Calling Car Construtor to initialize the proterties by passing the object in hand (this)
	Car.call(this,engineCapacity,engineNumber,chaseNumber,frameNumber);
	this.carType = carType;
	this.carColor = carColor;
	this.carName = carName;
}

// Inheriting SportsCar Objects iherits Car.prototype 

SportsCar.prototype = Object.create(Car.prototype);

// Ater Inheriting Car.prototype SprotsCar constructor needs to set to SportsCar as it was overwritten 

SportsCar.prototype.constructor = SportsCar;

// adding Methods to the SportsCar Objects prototype 

SportsCar.prototype.getCarDetail = function(){

	console.log("engineCapacity : ", this.engineCapacity);
	console.log("engineNumber : ", this.engineNumber);
	console.log("chaseNumber : ", this.chaseNumber);
	console.log("frameNumber : ", this.frameNumber);
	console.log("carColor : ", this.carColor);
	console.log("carName : ", this.carName);
	
}

// Finally we are creating a instance Object sportcar1 using the SprotsCar Object 

var sportcar1 = new SportsCar("14000cc","123AAAEEE","3333AAAEE","EEETTT3333","2-Door","Red","Car 1");

// Calling the methods using the newly created instance object sportcar1
// All methods in the Car Object prototype is available to the instance object sprotcar1 as SportsCar had inherited the Car prototype
/* 
   While accessing the methods available in the prototype the compliler would look for 
   methods first in the SportsCar prototype if the methods are not found then it would look higher in the prototype chain 
   in our case it would be Car prototype and the methods will be accessed
*/

sportcar1.getCarDetail();

sportcar1.startEngine();

sportcar1.accelerate();

sportcar1.stopEngine();

// Calling Static Methods does not need an instance of the object 

Car.CalculateTroque(54,3000);




