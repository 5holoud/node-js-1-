const fs=require("fs")
const addperson=(id , fname , lname , age , city)=>{
    const allData= loadInfo()
    const dublicationdata =allData.filter((obj) =>{
    return obj.id ===id

    })
    if (dublicationdata.length == 0 && allData.length<10){
    //console.log(dublicationdata)
    allData.push({
        id : id,
        fname : fname,
        lname : lname,
        age : age,
        city : city
        
    })// covert from json to object
    saveallData(allData)// convert to json => stored
}
else if(dublicationdata) {
    console.log("ERROR: Duplicate ID found or Maximum limit of 10 people reached.")
    
}

}

const  loadInfo=()=>{
    try{
    const dataJSON = fs.readFileSync("file2.Json").toString()
    return JSON.parse(dataJSON)}
    catch{
        return []
    }
}// read and convert
const saveallData=(allData)=>{
    const saveallDataJson= JSON.stringify(allData)
    fs.writeFileSync("file2.Json",saveallDataJson)
}//  convert from object to json and stored it
//DELETED DATA:
const deleteddata = (id)=>{
    const allData= loadInfo()
    const datatokeep=allData.filter((obj)=>{
        return obj.id !== id
    })
    saveallData(datatokeep)
}
//To read data:
const readdata=(id)=>{
    const allData= loadInfo()
    const itemneeded = allData.find((obj)=>{
        return obj.id === id
    })
    if( itemneeded){
        console.log(itemneeded)
    }
    else{
        console.log("ID NEEDED NOT FOUND")
    }
    
}
const listAllPeople = () => {
    const allData =  loadInfo();
    if (allData.length === 0) {
        console.log("No data available.");
    } else {
        console.log("All People:");
        allData.forEach((person) => console.log(person));
    }
}
const deleteAllPeople = () => {
    saveAllData([]);
    console.log("All people deleted successfully!");
};

module.exports={
    addperson,
    deleteddata,
    readdata,
    listAllPeople,
    deleteAllPeople
}