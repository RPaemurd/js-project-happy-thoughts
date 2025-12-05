import { useState } from 'react';
import ThoughtCard from './ThoughtCard';

function ThoughtList({thoughts = [] }) {
 
/*       const [thoughts, setThoughts] = useState([]);
 */
    return (
        
            <section className="mx-auto max-w-md m-0 flex flex-col min-[900px]:flex-wrap min-[900px]:justify-center">

                {thoughts.map((thought) => (
                    <ThoughtCard key={thought._id} thought={thought} />
                ))}
            </section>
    );
};

export default ThoughtList;