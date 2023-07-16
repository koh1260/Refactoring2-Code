export interface Invoice {
  customer: string;
	performances: Performances[];
}

export interface Performances {
	playID: string;
	audience: number;
}

export const invoices: Invoice = 
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hemlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  };
