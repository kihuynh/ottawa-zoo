export class Animal {

  constructor(name, species, hunger, health) {
    this.name = name;
    this.species = species;
    this.hunger = hunger;
    this.health = health;
    this.tummyLevel = 10;
  }

  setTummyLevel() {
    setInterval( () => {
      this.tummyLevel--;
    }, 10000)
  }

  feedAnimal(amount) {
    while(this.tummyLevel < 10) {
      this.tummyLevel++;
    }
  }
}
