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
  }
  