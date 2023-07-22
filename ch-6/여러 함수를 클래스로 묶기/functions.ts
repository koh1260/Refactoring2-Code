export class Reading {
  constructor(
    private _customer: string,
    private _quantity: number,
    private _month: number,
    private _year: number
  ) {}

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshord(this.year));
  }
}

const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

export const acquirRading = () => {
  return reading;
};

export const taxThreshord = (year: number) => {
  // 임의의 계산 함수
  if (year > 2020) {
    return 1;
  } else if (year > 2015) {
    return 0.8;
  } else {
    return 0.5;
  }
};

export const baseRate = (month: number, year: number) => {
  return 0.25;
};
