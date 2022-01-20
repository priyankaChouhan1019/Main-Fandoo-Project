
import AxiosService from '../service/axiosservice'


let baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';
const service = new AxiosService();

let headerConfig={
  headers:{
    Authorization:localStorage.getItem('token')
  }
}

class NoteService {
  addNote(data){
      return service.postMethod(`${baseUrl}notes/addNotes`,data, headerConfig);
  }

  getNote(){
    return service.postMethod(`${baseUrl}notes/getNotesList`,{},headerConfig);
  }

}


export default NoteService