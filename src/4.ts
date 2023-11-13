class Key {
  private signature: number = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public tenants: Person[];
  constructor(door: boolean = false, public key: Key) {
    this.door = door;
    this.tenants = [];
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}
const key = new Key();

const house = new MyHouse(false, key);

const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
