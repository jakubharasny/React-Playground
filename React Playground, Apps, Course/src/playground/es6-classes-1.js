class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name ;
    this.age = age ;
  }
  getGretting() {
    return `Hi. T am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name,age,major ){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name,age, location ){
    super(name,age);
    this.location = location;
  }
  hasLocation(){
    return !!this.location;
  }
  getGretting() {
    let grettings = super.getGretting();

    if (this.hasLocation()) {
      grettings += ` I'm visiting from ${this.location}.`;
    }
    return grettings;
  }
}



const me = new Traveler ('Jake',33, 'Mars');
console.log(me.getGretting());

const somebody = new Traveler();
console.log(somebody.getGretting());
