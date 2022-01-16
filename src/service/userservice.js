import AxiosService from "./axiosservice";

const service = new AxiosService();

let baseurl='http://fundoonotes.incubation.bridgelabz.com/api/';

class UserService{

    registration(data){
        return service.postMethod(`${baseurl}user/userSignUp`,data);
    }
    signin(data){
        return service.postMethod(`${baseurl}user/login`,data);
    }

    email(data){
        return service.postMethod(`${baseurl}user/login`,data);
    }

}

export default UserService
