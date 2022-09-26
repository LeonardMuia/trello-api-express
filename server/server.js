const express = require("express")
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express()

const {apiKey, token, idBoard, idList} = {
        "apiKey":"be458debc48b5548caf09c1df8b2db24", /* Enter API Key to Trello's API */
        "token": "6c2b1c972c3aa9be6bf15d9183a32aac0ef736156c5c17320cde6472095e30fb", /* Enter your access token to Trello's API */
        "idBoard": "632bb28518f4d100dfd449e2",
        "idList": "632bb28518f4d100dfd449e9" /* The Board ID */
}

const getLists = `https://api.trello.com/1/boards/${idBoard}/lists?key=${apiKey}&token=${token}`
const createCard = `https://api.trello.com/1/cards?idList=${idList}&key=${apiKey}&token=${token}`
const getCards = `https://api.trello.com/1/boards/${idBoard}/cards?key=${apiKey}&token=${token}`



app.get("/v1/lists", async (req, res, next) => {
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
        .catch(error => alert(error))
    
        console.log("RESPONSE", response)

        res.json(response)

})


app.listen(5000, () => { console.log("Server has started on port 5000") })