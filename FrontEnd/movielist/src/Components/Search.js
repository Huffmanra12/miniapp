import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function Search () {
  const {title} = useParams();
  const [movie, setMovie] = useState([])
  console.log(title)
  useEffect(() => {
    fetch(`http://localhost:8080/movies/search/${title}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [title])

  if (movie.length < 1){
    <p>Loading...</p>
  }
  return (
    <ul style={{listStyleType: "none"}}>
      {movie.map((e, i) => <li key = {i}>{e.title}</li>)}
    </ul>
  )
}