import React, {useState, useEffect} from 'react'

export default function UserAdded (){
  const [userMovies, setUserMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/userAdded')
    .then(res => res.json())
    .then(data => setUserMovies(data))
  }, [])

  if(userMovies.length < 1){
    return <p>Loading...</p>
  }
  return (
    <ul style={{listStyleType: "none"}}>
      {userMovies.map((e, i) => <li key={i}>{e.title}</li>)}
    </ul>
  )
}