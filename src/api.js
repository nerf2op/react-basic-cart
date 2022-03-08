import axios from "axios";

class API {
    baseUrl = 'https://fakestoreapi.com';
    
    get(reqObj) {
        const { baseUrl, endpoint } = reqObj;
        return new Promise((resolve, reject) => {
            axios(`${baseUrl || this.baseUrl}/${endpoint}`).then((res) => {
                resolve(res.data);
            }).catch(err => reject(err));
        });
    }
}

export default API;