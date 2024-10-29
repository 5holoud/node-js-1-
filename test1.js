/*
Using terminal, create a code with Node.js: -
1- The user enters the data of 10 people (id,first name,last name, age and city)
2- The user can view the data of all people or view the data of a specific person
3- The user can delete all people or delete a specific person
*/ 
const fs = require("fs")
const yargs=require("yargs")
const file2=require("./file2")
const { type } = require("os")
yargs.command({
    command:"add",
    describe:"add an item",
    builder:{
        id:{
            describe:"this is the id desc in add commander",
            demandOption:true,
            type:"number"
        },
        fname:{
            describe:"this is the first name desc in add commander",
            demandOption:true,
            type:"string"

        },
        lname:{
            describe:"this is the last name desc in add commander",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"this is the age desc in add commander",
            demandOption:true,
            type:"number"
        },
        city:{
            describe:"this is the city desc in add commander",
            demandOption:true,
            type:"string"
        }
        

    },
    handler:(x) => {
        file2.addperson(x.id , x.fname , x.lname , x.age , x.city)
        
    }
    
})


yargs.command({
    command:"delete",
    describe:"delete an item",
    builder: {
        id: {
            describe: "ID of the person to delete",
            demandOption: true,
            type: "number"
        }
    },
    handler:(x) => {
        file2.deleteddata(x.id)
        
    }
    
})
yargs.command({
    command: "deleteAll",
    describe: "Delete all people",
    handler() {
        file2.deleteAllPeople();
    }
})
yargs.command({
    command:"read",
    describe:"to read an item",
    builder: {
        id: {
            describe: "ID of the person to read",
            demandOption: true,
            type: "number"
        }
    },
    handler:(x)=>{
        file2.readdata(x.id)

    }
})
yargs.command({
    command: "list",
    describe: "List all people",
    handler() {
        file2.listAllPeople();
    }
})

yargs.parse()// handel only