const express = require('express')
const routing = express.Router()

const create = require('../model/dbsetup')

const Note = require('../model/notes')
const notesService = require('../service/notesService')

//for setting up the database
routing.get("/setupdb",(req,res,next)=>{
    create.setupdb().then(data=>{
        res.send({message:data})
    }).catch((err)=>{        
        next(err)
    })
})


//Insert
routing.post('/addNote',(req,res,next)=>{
    const note = new Note(req.body)
    notesService.addNote(note).then(msg=>{
        res.json({"message":" "})
    }).catch(err=>next(err))
})

routing.get('/getNotes',(req,res,next)=>{
    notesService.getNotes().then(notes=>{
        res.json(notes)
    }).catch(err=>next(err))
})

routing.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id
    notesService.deleteNote(id).then(deletedId=>{
        res.json({"message":"Successfully deleted the record."})
    }).catch(err=>next(err))
})

routing.put('/update/:noteId',(req,res,next)=>{
    const noteId = req.params.noteId
    const updateObj = req.body
    notesService.updateNote(noteId,updateObj).then(data=>{
        res.json({"message":`Note is Successfully updated for ${noteId}.`})
    }).catch(err=>next(err))
})

module.exports = routing

