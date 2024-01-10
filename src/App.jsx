import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList", puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  function handleClick(puppyId) {
    console.log("puppy id", puppyId);
    setFeatPupId(puppyId);
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);


  return (
    <div className="App">
      {}
      <div className="puppyList">
      <h1>Puppy List</h1>
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}
</div>
      {featPupId && (
        <div className="featuredPupInfo">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default App