export interface Reading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

export const acquirRading = () => {
  const reading: Reading = {
    customer: "ivan",
    quantity: 10,
    month: 5,
    year: 2017,
  };

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

export const enrichReading = (original: Reading) => {
    const result = Object.assign({}, original);
    return result;
}