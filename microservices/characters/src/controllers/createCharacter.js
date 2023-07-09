const axios = require("axios");
const {response} = require('../utils')

module.exports = async(req, res) => {    
    const character = req.body
    const newCharacter = await axios.post('http://database:8004/Character', character) 
    response(res, newCharacter.status, newCharacter.data)
}