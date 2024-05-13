import { makeAutoObservable, runInAction } from "mobx";
import { TCurrency } from "../types";
import axios from "axios";

const token = 'Squs5cHMVJbAhQac6JehrUdDLJyRuxxqhVIcZ5Zc3ea5d351';

class CurrencyStore {
    data: TCurrency[] | null = null
    state = "pending"

    constructor() {
        makeAutoObservable(this)
    }

    async fetchData() {
        this.data = null
        this.state = "pending"
        try {
            const response = await axios.get('https://data.fx.kg/api/v1/best', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
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
    { name: 'Рубль', sell: data.sell_rub, buy: data.buy_rub },
    { name: 'Доллар', sell: data.sell_usd, buy: data.buy_usd },
    { name: 'Евро', sell: data.sell_eur, buy: data.buy_eur },
    { name: 'Тенге', sell: data.sell_kzt, buy: data.buy_kzt },
  ];
}
export default CurrencyStore;
