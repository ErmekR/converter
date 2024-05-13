import axios from "axios";
import { TConvertCurrency } from "../types";
import { makeAutoObservable, runInAction } from "mobx";
import { token } from "./helper";

class ConverterStore {
  data: TConvertCurrency[] | null = null
  state = "pending"

  constructor() {
      makeAutoObservable(this)
  }

  async fetchData() {
      this.data = null
      this.state = "pending"
      try {
          const response = await axios.get('https://data.fx.kg/api/v1/central', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const result = prepareData(response.data)
          runInAction(() => {
              this.data = result
              this.state = "done"
          })
      } catch (e) {
          runInAction(() => {
              this.state = "error"
          })
      }
  }
}

function prepareData(data: any) {
  return [
    { name: 'KGS', price: 1 },
    { name: 'RUB', price: data.rub },
    { name: 'USD', price: data.usd },
    { name: 'EUR', price: data.eur },
    { name: 'KZT', price: data.kzt },
  ];
}

export default ConverterStore;
