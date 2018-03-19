import { Animal } from './../src/zoo.js'

describe('Animals', function() {
  let newAnimal = new Animal("elephant");

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  it('should have a species type and a tummy level of 10 when it is created', function() {
    expect(newAnimal.species).toEqual("elephant");
    expect(newAnimal.tummyLevel).toEqual(10);
  });

  it('should have a tummy level of 9 after 10 seconds', function() {
    jasmine.clock().tick(10001);
    newAnimal.setTummyLevel();
    expect(newAnimal.tummyLevel).toEqual(9);
  });
});
