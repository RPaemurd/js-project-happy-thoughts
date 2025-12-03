import { useState, useEffect } from 'react';
import { fetchThoughts } from '../api/thoughts'

function FetchThoughts() { 
  const [thoughts, setThoughts] = useState([]);

      /* const addThought = (message) => { //Skapar ett objekt, det som API:t senare skall göra

      const newToughtObject = {
        _id: Date.now(),
        message: message,
        hearts: 0,
        createdAt: new Date().toISOString()
      }; */

      useEffect (() => {
        fetchThoughts()
        .then((data) => {
            const mapped = setThoughts.map((t) => ({
                id: t._id,
                message: t.message,
                hearts: t.hearts,
                createdAt: t.createdAt,
            }));
        });
      });
      return {
            thoughts,
            setThoughts
        };
}

export default FetchThoughts