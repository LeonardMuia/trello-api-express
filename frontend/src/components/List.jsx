import { useState, useEffect } from "react"
import AddCard from "./AddCard"
import Card from "./Card"

export default(props) => {

    const [card, setCard] = useState([])

    useEffect(() => {

        // RestURL https://api.trello.com/1/boards/${idBoard}/cards?key=${apiKey}&token=${token}

        /*
        * Try making a direct GET request from the RestAPI, passing the name parameter
        * Test in case you're having issues with CORS
        * Pass your API variables directly and replace the fetch url with API's url
        */

        fetch('/cards').then(response => response.json())
        .then(data => {
            setCard(data)
          }
        ).catch(error => {
            console.log(error)
        })

    }, [])

    const cards = card.map((data) => {
      return (
        <Card key={data.id} name={data.name}/>
      )
    })

    const openForm = function (event, id) {
        const form = document.getElementById(`${id}`); 
        if(form) {
            form.style.display = "block";
        }
    }

    return (
 
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="card--top">
                        <h3 className="card--title">{props.name}</h3>
                        <div className="card--btn" onClick={event => openForm(event, props.idList)}>+ Add</div>
                    </div>
                    <div className="card--items">
                        <form style={{display:"none"}} id={props.idList} className="card--form">
                            <AddCard idList={props.idList} />
                        </form>
                        {cards}
                    </div>
                </div>
            </div>     
        </div>   

    )
}