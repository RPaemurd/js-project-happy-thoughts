import { useState } from 'react'
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'


function App() {
  /* const [count, setCount] = useState(0) */
  const [thoughts, setThoughts] = useState([

    ]);

      const addThought = (message) => { //Skapar ett objekt, det som API:t senare skall göra

      const newToughtObject = {
        _id: Date.now(),
        message: message,
        hearts: 0,
        createdAt: new Date().toISOString()
      };

      setThoughts([newToughtObject, ...thoughts]);
      }; /* Ta alla gamla tankar (...thoughts) och lägg den nya FÖRST */

  return (

    <div>
      <ThoughtForm addThought={addThought} />
      <ThoughtList thoughts={thoughts} />
    </div>
  );
};

export default App
