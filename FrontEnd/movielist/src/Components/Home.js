import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

export default function Home ({refreshCount}){
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/home')
    .then(res => res.json())
    .then(data =>setMovies(data))
  }, [refreshCount])

  if(movies.length < 1){
    return <p>Loading...</p>
  }else{

  return (
  <ul style={{listStyleType: "none"}}>{movies.map((e, i) => <li key={i}>{e.title}</li>)}</ul>
    )
  }
}