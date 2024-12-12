
// method overwritting
/* class Employee {
    constructor(name){
        this.name = name;
    }
    login(time){
        console.log(`${this.name} logged in at ${time}`);
    }
    logout(time){
        console.log(`${this.name} logged out at ${time}`);
    }
    requestLeave(leave){
        console.log(`${this.name} request for ${leave} leaves`);
    }

}

class Programmer extends Employee{
    requestLeave(leave){
        console.log(`${this.name} request for ${leave} leaves and got ${leave + 1} leaves (one Extra Leave from Company as Bonus)`);
    }
}

const zahid = new Employee('Zahid');
zahid.login('8 AM');
zahid.logout('5 PM');
zahid.requestLeave(3)


const fahad = new Programmer('Fahad');
fahad.login('9 AM');
fahad.logout('7 PM');
fahad.requestLeave(3)
 */



// method overwrite by super keyword

/* class Employee {
    requestLeave(leave) {
      console.log(`Employee request for ${leave} leaves`);
    }
  }
  
  class Programmer extends Employee {
    requestLeave() {
      super.requestLeave(4);
    }
  }
  
  const zahid = new Employee();
  zahid.requestLeave(3);
  
  const fahad = new Programmer();
  fahad.requestLeave(); */






//   another example
class Animal{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    behaviour(){
        console.log(`Every ${this.name} has minimum weight ${this.weight} kg`);
    }

}
const creature = new Animal('Animal', 1)
creature.behaviour();


// rabbit class
class Rabbit extends Animal{
    constructor(name, weight, runSpeed){
        super(name,weight);
        this.runSpeed = runSpeed;
    }
    behaviour(){
        console.log(`Every ${this.name} has minimum weight ${this.weight} kg and run-speed ${this.runSpeed} kmph`);
    }
}
const rabbit = new Rabbit('Rabbit', 5, 23);
rabbit.behaviour();



// fish class
class Fish extends Animal{
    constructor(name, weight, swimSpeed, shelter){
        super(name,weight);
        this.swimSpeed = swimSpeed;
        this.shelter = shelter;
    }
    behaviour(){
        console.log(`Every ${this.name} has minimum weight ${this.weight} kg and swim-speed ${this.swimSpeed} kmph and shelter among ${this.shelter}`);
    }
}
const fish = new Fish('Fish', 2, 15, 'Coral');
fish.behaviour();



// lion class
class Lion extends Animal{
    constructor(name, weight, sprintSpeed, shelter, hunting){
        super(name,weight);
        this.shelter = shelter;
        this.hunting = hunting;
        this.sprintSpeed = sprintSpeed;

        
    }
    behaviour(){
        console.log(`Every ${this.name} has minimum weight ${this.weight} kg and sprint-speed ${this.sprintSpeed} kmph and shelter among ${this.shelter} and they hunting ${this.hunting}`);
    }
}
const lion = new Lion('Lion', 345, 50, 'Cave', 'Wild Beast');
lion.behaviour();

