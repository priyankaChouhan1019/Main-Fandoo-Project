
import AxiosService from '../service/axiosservice'

const service = new AxiosService();
let baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';


let headerConfig={
  headers:{
    Authorization:localStorage.getItem('token')
  }
}

class NoteService {
  addNote(data){
      return service.postMethod(`${baseUrl}notes/addNotes`,data,headerConfig)
      
  }

  getNote(){
    return service.getMethod(`${baseUrl}notes/getNotesList`,headerConfig)
  
  }

  changeColor(data){
      return service.postMethod(`${baseUrl}notes/changesColorNotes`,data,headerConfig)
    }

    archiveChange(data){
      return service.postMethod(`${baseUrl}notes/archiveNotes`,data,headerConfig)
    }

    deleteNote(data){
      return service.postMethod(`${baseUrl}notes/trashNotes`,data,headerConfig)
    }
  

}


export default NoteService