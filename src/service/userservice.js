import AxiosService from "./axiosservice";

const service = new AxiosService();

let baseurl='http://fundoonotes.incubation.bridgelabz.com/api/';

//spliturl
const url = window.location.href.toString().split('/resetpassword/');
console.log(url[1]);

let urlheader={
    headers:{
        Authorization:url[1]
    }
}


let headers={
    headers:{
      Authorization:localStorage.getItem("token")
    }
  }

class UserService{

    registration(data){
        return service.postMethod(`${baseurl}user/userSignUp`,data);
    }
    signin(data){
        return service.postMethod(`${baseurl}user/login`,data);
    }

    forgot(data){
        return service.postMethod(`${baseurl}user/reset`,data);
    }

    reset(data) {
        return service.postMethod(`${baseurl}user/reset-password`,data,urlheader);
      }

    

    // archiveChange(data){
    //   return service.postMethod(`${baseurl}notes/archiveNotes`,data,headers)
    // }
  
}

export default UserService
