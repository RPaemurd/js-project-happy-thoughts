import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'
import About from './components/About';

function App() {
  const [thoughts, setThoughts] = useState([]);

  const addThought = (message) => {
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
      <Routes>
        
        <Route path="/" element={
          <>
            <ThoughtForm addThought={addThought} />
            <ThoughtList thoughts={thoughts} />
            
            <footer className="mt-10 text-center text-sm text-gray-500">
              created by Rebecca Sighed &nbsp;|&nbsp;
              <Link
                to='/about'
                className="text-[#ff7a63ff] underline hover:text-red-700"
              >
                About this app
              </Link>
            </footer>
          </>
        } />

        {/* About-sidan: Visar bara About-komponenten */}
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
};

export default App