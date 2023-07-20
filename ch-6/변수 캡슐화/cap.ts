interface Owner {
  firstName: string;
  lastName: string;
}

let defaultOwnerData: Owner = { firstName: "마틴", lastName: "파울러" };

export function defaultOwner() {
  return new Person(defaultOwnerData.firstName, defaultOwnerData.lastName);
}
export function setDefaultOwner(arg: Owner) {
  defaultOwnerData = arg;
}

class Person {
  constructor(private _firstName: string, private _lastName: string) {};

  get firstName() {return this._firstName;}
  get lastName() {return this._lastName;}
}
