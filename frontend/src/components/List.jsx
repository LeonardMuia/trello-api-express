import { useState, useEffect } from "react"
import AddCard from "./AddCard"
import Card from "./Card"

export default(props) => {

    const [card, setCard] = useState([])

    useEffect(() => {

        const cardsUrl = `https://api.trello.com/1/lists/${props.idList}/cards?key=be458debc48b5548caf09c1df8b2db24&token=6c2b1c972c3aa9be6bf15d9183a32aac0ef736156c5c17320cde6472095e30fb`;

        fetch(cardsUrl).then(response => response.json())
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
                            <AddCard />
                        </form>
                        {cards}
                    </div>
                </div>
            </div>     
        </div>   

    )
}