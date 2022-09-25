const express = require("express")
const app = express()

const {apiKey, token, idBoard, idList} = {
        "apiKey":"be458debc48b5548caf09c1df8b2db24", /* Enter API Key to Trello's API */
        "token": "6c2b1c972c3aa9be6bf15d9183a32aac0ef736156c5c17320cde6472095e30fb", /* Enter your access token to Trello's API */
        "idBoard": "632bb28518f4d100dfd449e2",
        "idList": "632bb28518f4d100dfd449e9" /* The Board ID */
}

const getLists = `https://api.trello.com/1/boards/${idBoard}/lists?key=${$apiKey}&token=${token}`

const createCardURL = `https://api.trello.com/1/cards?idList=${idList}&key=${apiKey}&token=${token}`

const getCards = `https://api.trello.com/1/boards/${idBoard}/cards?key=${apiKey}&token=${token}`



app.get("/api", (req, res) => {

    res.json({"num": [1,2,3]})
   
})


app.listen(5000, () => { console.log("Server has started on port 5000") })
