import { useState } from 'react'
import ThoughtForm from './components/ThoughtForm'
import ThoughtCard from './components/ThoughtCard'
import ThoughtList from './components/ThoughtList'


function App() {
  /* const [count, setCount] = useState(0) */

  const thoughtslist = [

      {
        _id: "1",
        message: "Hej detta är test 1"
      },
      {
        _id: "2",
        message: "Hej detta är test 2"
      },
      {
        _id: "3",
        message: "Hej detta är test 3"
      }

    ];

  return (

    <div>
      <ThoughtForm />
      <ThoughtList thoughts={thoughtslist} />
    </div>
  );
};

export default App
