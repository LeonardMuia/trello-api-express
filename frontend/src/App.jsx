import { useState, useEffect } from "react"
import TopBar from "./components/TopBar"
import List from "./components/List"
import EmptyPage from "./components/EmptyPage"
import './App.css'

function App() {

    const [list, setLists] = useState([])

    // Fetching list https://api.trello.com/1/boards/${idBoard}/lists?key=${apiKey}&token=${token}

    /*
    * Try using the request directly via the link with the credentials
    * Test in case you're having issues with CORS
    * Pass your API variables directly and replace the fetch url with API's url
    */

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
}

export default App
