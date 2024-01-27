
const myModel = require('../model/model')
const axios = require('axios')

const apiKey = "3f1018624489463eaea885a9a21c4e1c"

const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`


// axios.get(apiUrl)
// .then((connect)=>{
//     console.log(connect);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

//CREATE USER 



// axios.get(apiUrl)
//         .then((connect)=>{
//             console.log(connect.data)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
exports.createUser = async (req, res)=>{

    try{

        const location = await axios.get(apiUrl)
        .then((connect)=>{
            return connect.data
        })
        .catch((err)=>{
            return err
        })
        const createOne = {
            name:req.body.name,
            age: req.body.age,
            sex: req.body.sex
        }
        const{ip, country_name, city, longitude, latitude} = location
    const newUser = await new myModel(createOne)
    
    newUser.location = {ip, country_name, city, longitude, latitude}

    await newUser.save()

    if(newUser){
        res.status(201).json({
            message: `User created suscessfully`,
            data: newUser
        }) 
    }

}
catch(err){
    res.status(500).json({
        message: `Error reading file`,
        Error: err.message
    })
}
}
exports.home = (req, res)=>{
    res.send(`This is my locaion API`)
}