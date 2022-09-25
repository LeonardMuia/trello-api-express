import { useState, useEffect } from "react"
import TopBar from "./components/TopBar"
import Card from "./components/Card"
import EmptyPage from "./components/EmptyPage"
import './App.css'

function App() {

  const [lists, setLists] = useState({})


  useEffect(() => {

      const boardsUrl = "https://api.trello.com/1/boards/632bb28518f4d100dfd449e2/lists?key=be458debc48b5548caf09c1df8b2db24&token=6c2b1c972c3aa9be6bf15d9183a32aac0ef736156c5c17320cde6472095e30fb";

      fetch(boardsUrl).then(response => response.json())
      .then(data => {
          setLists(data)
        }
      ).catch(error => {
        console.log(error)
      })

  }, [])

  return (
    <>
      <TopBar />
      <div className="container main-content">
        <section className="section cards-section">
              <div className="row">
                  <EmptyPage />
              </div>
          </section>
      </div>
    </>
  )
}

export default App
