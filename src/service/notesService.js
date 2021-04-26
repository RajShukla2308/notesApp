const { runInThisContext } = require('vm')
const Notes = require('../model/notes')
const db = require('../model/notesModel')
const validator = require('../utilities/validator')


const notesService ={}


notesService.addNote = (note)=>{
           return db.addNote(note).then(data=>{
            if(!data) throw new Error(`add for ${note} is failed!`)
            else return data
           })
}

notesService.updateNote = (noteId, updateObj)=>{
            return db.updateNote(noteId,updateObj).then(data=>{
                if(!data) throw new Error(`update for ${noteId} is failed!`)
                else return data
           })    
}

notesService.getNotes = ()=>{
    return db.getNotes().then(notes=>{
        if(notes == null){
            return []  
        }else return notes
    })
}

notesService.deleteNote=(id)=>{
    return db.deleteNote(id).then(data=>{
        if(data <= 0 ){
            let err = new Error("Note Could not be deleted")
            err.status = 500
            throw err
        }
        else return data
    })
}


module.exports = notesService