const { strict } = require('assert')
const {Schema} = require('mongoose')
const Mongoose = require('mongoose')
Mongoose.Promise = global.Promise

Mongoose.set('useCreateIndex',true)

const url = 'mongodb://localhost:27017/Notes_DB'

const noteSchema = Schema({
    noteId:Number,
    title:String,
    body:String,
},{collection:"Notes"})


var collection = {}

collection.getNoteCollection = ()=>{
    return Mongoose.connect(url,{useNewUrlParser:true},{ useUnifiedTopology: true }).then(database=>{
        return database.model('Notes',noteSchema)
    }).catch(error=>{
        let err = new Error("Could not connect to the database")
        err.status = 500
        throw err
    })
}

module.exports = collection

