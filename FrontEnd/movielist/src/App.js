import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Search from './Components/Search.js'
import UserAdded from './Components/UserAdded.js'





function App() {
  const [title, setTitle] = useState('')
  const [addTitle, setAddTitle] = useState('')
  const [refreshCount, setRefreshCount] = useState(0)

  const Navigate = useNavigate();

  const handleAdd = (movie) => {
    console.log(movie)
    fetch(`http://localhost:8080/movies/add`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "title": movie
      })
    })
    .then(res => res.json())
    const refreshes = refreshCount + 1;
    setTimeout(() => {
      setRefreshCount(refreshes);
    }, 200);
    setAddTitle('')
  }

  return (
    <div className="App">
      <h1>
        <p>Movies</p>
        <button onClick={() => Navigate('/')}>Home</button>
        <button onClick={() => Navigate('/userAdded')}>User Added Movies</button>
      </h1>
      <div className="search">
        <h3>Search Movie</h3>
      <input value = {title} onChange={(e) => setTitle(e.target.value)} placeholder="Search Movie"/>
      <button onClick={() => Navigate(`/movie/search/${title}`)}>Search</button>
      </div>
      <div className="addMovie">
        <h3>Add Movie</h3>
        <input value = {addTitle} onChange={(e) => setAddTitle(e.target.value)}placeholder="Movie Title" />
        <button onClick={() => handleAdd(addTitle)}>Add</button>
      </div>
      <Routes>
        <Route path='/' element={<Home refreshCount={refreshCount}/>} />
        <Route path='/movie/search/:title' element={<Search/>} />
        <Route path='/userAdded' element={<UserAdded />}/>
      </Routes>
    </div>
  );
}

export default App;
