interface Owner {
    firstName: string;
    lastName: string;
}

let defaultOwnerData: Owner = {firstName: '마틴', lastName: '파울러'};

// 참조를 반환하므로, defaultOwner().firstName 등으로 변경 가능
export function defaultOwner() {
    return defaultOwnerData;
}
export function setDefaultOwner(arg: Owner) {
    defaultOwnerData = arg;
}