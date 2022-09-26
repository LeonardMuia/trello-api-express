import { useState, useEffect } from "react"
import TopBar from "./components/TopBar"
import List from "./components/List"
import EmptyPage from "./components/EmptyPage"
import './App.css'

function App() {

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
}

export default App
