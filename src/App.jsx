import { useState, useEffect } from 'react'
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'
import useFetchThoughts from './hooks/useFetchThoughts'


function App() {
  const { thoughts, setThoughts } = useFetchThoughts();
       setThoughts([newToughtObject, ...thoughts]);
  return (

    <div>
      <ThoughtForm addThought={addThought} />
      <ThoughtList thoughts={thoughts} />
    </div>
  );
};

export default App
