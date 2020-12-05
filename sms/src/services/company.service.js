import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/company';

class CompanyDataService {
  
  getCompany() {
    return axios.get(BASE_API_URL);
  }

  addCompany(company) {
    return axios.post(""+BASE_API_URL, company);
  }

  getCompanyById(id){
    return axios.get(BASE_API_URL + '/' + id);
  }

  updateCompany(company) {
    return axios.put(BASE_API_URL + '/' + company.id, company);
  }

  deleteCompany(id) {
    return axios.delete(BASE_API_URL + '/' + id);
}

}

export default new CompanyDataService();