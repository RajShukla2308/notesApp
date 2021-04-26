const collection = require('../utilities/connection')


const noteDb = [

{
    noteId:1,
    title:"Test Note I",
    body:"Test Body I"
}
]
exports.setupdb = ()=>{
    return collection.getNoteCollection().then(note=>{
        return note.deleteMany().then(()=>{
            return note.insertMany(noteDb).then((data)=>{
                            if(data){
                                return "Insertion Successfull"
                            }
                            else{
                                throw new Error("intersion failed")
                            }
                        })
                    })
                })
}


