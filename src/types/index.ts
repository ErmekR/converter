export type TCurrency = {
  name: string;
  sell: number;
  buy: number;
};

export type TConvertCurrency = {
  name?: string | undefined,
  price: number,
};