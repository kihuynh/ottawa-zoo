export class Animal {

  constructor(species) {
    this.species = species;
    this.tummyLevel = 10;
  }

  setTummyLevel() {
    setInterval( () => {
      this.tummyLevel--;
    }, 10000)
  }

  feedAnimal() {
    this.tummyLevel = 10;
  }
}
