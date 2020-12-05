import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/stocks';

class StocksDataService {
  
  getAllStocks() {
    return axios.get(BASE_API_URL);
  }

  addStock(stocks) {
    return axios.post(""+BASE_API_URL, stocks);
  }

  getStockById(id){
    return axios.get(BASE_API_URL + '/' + id);
  }

  updateStock(stocks) {
    return axios.put(BASE_API_URL + '/' + stocks.id, stocks);
  }

  deleteStock(id) {
    return axios.delete(BASE_API_URL + '/' + id);
}

}

export default new StocksDataService();