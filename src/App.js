import Note from "./components/Note"
import Footer from "./components/Footer"
import Header from "./components/Header"
import notes from "./notes"



function App() {
  return (
    <div>
      <Header className="header"/>
      {notes.map((noteItem)=> <Note key={noteItem.key} title={noteItem.title} content={noteItem.content}/>)}
      <Footer />
    </div>
  )
}

export default App
