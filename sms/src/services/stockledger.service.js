import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/stockledger';

class StockLedgerDataService {
  
  getAllStocks() {
    return axios.get(BASE_API_URL);
  }

  addStock(stockledger) {
    return axios.post(""+BASE_API_URL, stockledger);
  }

  getStockById(id){
    return axios.get(BASE_API_URL + '/' + id);
  }

  updateStock(stockledger) {
    return axios.put(BASE_API_URL + '/' + stockledger.id, stockledger);
  }

  sellStock(id) {
    return axios.delete(BASE_API_URL + '/' + id);
}

}

export default new StockLedgerDataService();