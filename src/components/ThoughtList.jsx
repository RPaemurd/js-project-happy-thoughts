import { useState } from 'react';
import ThoughtCard from './ThoughtCard';

function ThoughtList({thoughts = [] }) {
 
/*       const [thoughts, setThoughts] = useState([]);
 */

    return (
        
            <section className="list container">

                {thoughts.map((thought) => (

                    <ThoughtCard key={thought._id} thought={thought} />
                ))}
            </section>
    );
};

export default ThoughtList;