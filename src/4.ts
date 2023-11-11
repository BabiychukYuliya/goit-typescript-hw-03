class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: Key;
  public tenants: Person[];
  constructor(door: boolean = false, key: Key) {
    this.door = door;
    this.key = key;
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
  constructor(door: boolean = false, key: Key) {
    super(door, key);
  }
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

// export {};
