import NavBar from "./components/NavBar.jsx"
import Footer from "./components/footer.jsx"
import Card from "./components/Card.jsx"

function App() {

  return (
    <>
      <NavBar name = "Mohammad Woafi"/>
      <div className="cards">
      < Card title="card 1" description="Description of Card 1" />    
      < Card title="card 2" description="Description of Card 2" />    
      < Card title="card 3" description="Description of Card 3" />    
      < Card title="card 4" description="Description of Card 4" />    
      </div>
      <Footer/>
    </>
  )
}

export default App
