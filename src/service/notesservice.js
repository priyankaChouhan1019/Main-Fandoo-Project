
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
//spliturl
  getNote(){
    return service.getMethod(`${baseUrl}notes/getNotesList?access_token=`+headerConfig.headers.Authorization);
}

  // getNote(){
  //   return service.getMethod(`${baseUrl}notes/getNotesList`,headerConfig)
  
  // }

  changeColor(data){
      return service.postMethod(`${baseUrl}notes/changesColorNotes`,data,headerConfig)
    }

    archiveChange(data){
      return service.postMethod(`${baseUrl}notes/archiveNotes`,data,headerConfig)
    }

    deleteNote(data){
      return service.postMethod(`${baseUrl}notes/trashNotes`,data,headerConfig)
    }

    getArchiveNotes(){
      return service.getMethod(`${baseUrl}notes/getArchiveNotesList`,headerConfig)
    }

    gettrashNotes(){
      return service.getMethod(`${baseUrl}notes/getTrashNotesList`,headerConfig)
    }

    UpdatedDialogNote(data){
      return service.postMethod(`${baseUrl}notes/updateNotes`,data,headerConfig)
    }
    
}


export default NoteService