import Navbar from "./Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import ListMovies from "./ListMovies"
import AddMovie from "./AddMovie"
import EditMovie from "./EditMovie"

function App() {


  return (
    <div className="App">
      <Navbar />

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListMovies/>}></Route>
      <Route path='/addmovie' element={<AddMovie/>}></Route>
      <Route path="/editmovie/" element={<EditMovie />} exact></Route>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
