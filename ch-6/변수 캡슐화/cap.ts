interface Owner {
    firstName: string;
    lastName: string;
}

let defaultOwnerData: Owner = {firstName: '마틴', lastName: '파울러'};
export function defaultOwner() {
    return defaultOwnerData;
}
export function setDefaultOwner(arg: Owner) {
    defaultOwnerData = arg;
}