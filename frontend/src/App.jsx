import TopBar from "./components/TopBar"
import Card from "./components/Card"
import './App.css'

function App() {

  return (
    <>
      <TopBar />
      <div className="container main-content">
        <section className="section cards-section">
              <div className="row">
                  <Card />
              </div>
          </section>
      </div>
    </>
  )
}

export default App
