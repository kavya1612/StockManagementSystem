import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/authentication';

class AuthenticationDataService {
  
    registerUser(registeruser) {
        return axios.post(""+BASE_API_URL + '/' + 'register', registeruser);
    }

    logTheUserIn(loginuser){
        return axios.post(BASE_API_URL + '/' + 'login',loginuser);
    }
    
  
}

export default new AuthenticationDataService();