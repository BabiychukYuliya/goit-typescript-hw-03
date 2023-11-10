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
  public getKey() {
    return this.key;
  }
}

abstract class House {
  constructor(public tenants: string[]) {}
  public door: boolean;
  public key: Key;
  public comeIn(tenant: string) {
    if (this.door === true) {
      this.tenants.push(tenant);
    }
  }
  public abstract OpenDoor(key: Key): void;
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
