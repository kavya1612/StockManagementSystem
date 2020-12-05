import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/users';

class UsersDataService {
  
  getAll() {
    return axios.get(BASE_API_URL);
  }

  addUser(users) {
    return axios.post(""+BASE_API_URL, users);
  }

  getUserById(id){
    return axios.get(BASE_API_URL + '/' + id);
  }

  updateUser(users) {
    return axios.put(BASE_API_URL + '/' + users.id, users);
  }

  deleteUser(id) {
    return axios.delete(BASE_API_URL + '/' + id);
}

}

export default new UsersDataService();