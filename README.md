# Trello API - Tech Assignment 

This is a full stack developer assignment 2022. 

The sprint goals are generally creating a web application that interacts with [Trello's API](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/) to perform actions like;

- **Creating cards and lists.** 
- **Fetching lists from Trello.**

## Tech Stack
This is the tech stack required to achieve the set goals and features.

- **React Frontend** 
- **Node.js / Express.js Backend**
- **Bootstrap CSS**


## UI/UX

The following are images of the **UI**. For details of the UI,checkout this [figma file.](https:://figma.com)

## Express.js server file

```python
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
        "apiKey":"", 
        "token": "", 
        "idBoard": "",
        "idList": "" 
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

```

## Main App Component in React

```python

const [list, setLists] = useState([])

    useEffect(() => {

        fetch("/lists")
        .then(response => response.json())
        .then(data => {
            setLists(data)
          }
        ).catch(error => {
            console.log(error)
        })

    }, [])

    console.log(list)

    const lists = list.map((data) => {
      return (
        <List key={data.id} name={data.name} idList={data.id} />
      )
    })

    return (
      <>
        <TopBar />
        <div className="container main-content">
          <section className="section">
                <div className="row">
                  { list === "undefined" ? <EmptyPage/> : [...lists] }
                </div>
            </section>
        </div>
      </>
    )


```

## Creating a new card

```python

function submitForm() {
        
        const title = document.getElementById(`text-area-${props.idList}`).value

        const createCard = function(title) {
            const createCardURL = `https://api.trello.com/1/cards?idList=${props.idList}&key=be458debc48b5548caf09c1df8b2db24&token=6c2b1c972c3aa9be6bf15d9183a32aac0ef736156c5c17320cde6472095e30fb`;

                axios.post(createCardURL, {
                    name: title
                }).then(function(response){
                    if(response.success) {
                        successAlert("Success. Refresh page to see changes.")
                        hideForm
                    }
                }).catch(error => {
                    errorAlert(error)
                } )
        }

        title ? createCard(title) : errorAlert("Please provide a title for the card.");

    }


```

## Contributing
You can make changes however you like upon making a pull request. Have fun!!