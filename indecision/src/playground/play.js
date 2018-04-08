const add = (a, b) => {
  return a+ b;
};
console.log(add(55,1,1001));

const user = {
  name: "Andrew",
  cities:['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return city;
    });
    return cityMessages;
  }
};
console.log(user.printPlacesLived());


const multiplier = {
  numbers:[1,2,3,4,5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((num) => this.multiplyBy * num);
  }
};
console.log(multiplier.multiply());
