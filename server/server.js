const express = require("express")
const cors = require('cors')
const axios = require("axios");
const { json, response } = require("express");

const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express()
const corsOptions = {
    origin: 'http://localhost:5000',
}

const {apiKey, token, idBoard, idList} = {
        "apiKey":"", /* Enter API Key to Trello's API */
        "token": "", /* Enter your access token to Trello's API */
        "idBoard": "",
        "idList": "" /* The Board ID */
}

const getLists = `https://api.trello.com/1/boards/${idBoard}/lists?key=${apiKey}&token=${token}`
const createCard = `https://api.trello.com/1/cards?idList=${idList}&key=${apiKey}&token=${token}`
const getCards = `https://api.trello.com/1/boards/${idBoard}/cards?key=${apiKey}&token=${token}`



app.get("/v1/lists", cors(corsOptions), async (req, res, next) => {
    const options = {
        "method" : "GET"
    }
    const response = await fetch(getLists, options)
        .then(res => res.json())
        .catch(error => alert(error))
    
        console.log("RESPONSE", response)

        res.json(response)

})

app.get("/v1/cards", async (req, res, next) => {
    const options = {
        "method" : "GET"
    }
    const response = await fetch(getCards, options)
        .then(res => res.json())
        .catch(error => console.log(error))

        res.json(response)

})

app.post("/status", async(req, res, next) => {
    const options = {
        "method" : "POST"
    }
    
    const response = await axios.post(createCard, {name: title})
            .then(res => {[{"success":res.json()}]})
            .catch(error => {
                console.log(error)
            } )

    res.json(response)

})


app.listen(5000, () => { console.log("Server has started on port 5000") })