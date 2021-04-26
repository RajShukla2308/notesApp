const dbModel = require('../utilities/connection')

var notesDb = {}


notesDb.addNote = (note)=>{
    return dbModel.getNoteCollection().then(model=>{
            return model.create(note).then(saved=>{
                        if (saved.nModified<1) throw new Error("Notes not be modified")
                        else return saved
                    })
                })
}


notesDb.getNotes = ()=>{
    return dbModel.getNoteCollection().then(model=>{
        return model.find().then(notes=>{
            if (notes.length>0) return notes
            else return null
        })
    })
}



notesDb.deleteNote = (id) => {
    return dbModel.getNoteCollection().then(model=>{
        model.deleteOne({_id:id}).then(deleted=>{
            if (deleted.n>0){
                return deleted.n
            }
            else return null
        })
    })
}


notesDb.updateNote = (Id,updateObj)=>{
    console.log(Id);
    console.log(updateObj);
    return dbModel.getNoteCollection().then(model=>{
        return model.updateOne({_id:Id},{$set:{title:updateObj.title,body:updateObj.body}}).then(success=>{
            console.log(success);
            if (success.nModified == 1 || success.ok==1){
                return updateObj
            }
            else{
                return null
            }
        })
    })
}




module.exports = notesDb