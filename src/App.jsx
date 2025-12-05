import { useState } from 'react'
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

function App() {
  const [ thoughts, setThoughts ] = useState([]);

   const addThought = (message) => { //Skapar ett objekt, det som API:t senare skall göra 

      const newToughtObject = {
        _id: Date.now(),
        message: message,
        hearts: 0,
        createdAt: new Date().toISOString()
      }; 

      setThoughts([newToughtObject, ...thoughts]);
    }; 

  return (

    <div>
      <ThoughtForm addThought={addThought} /> 
      <ThoughtList thoughts={thoughts} />
    </div>
  );
};

export default App
