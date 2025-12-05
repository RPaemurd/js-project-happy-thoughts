import { useState } from 'react';
import ThoughtCard from './ThoughtCard';

function ThoughtList({thoughts = [] }) {
 
/*       const [thoughts, setThoughts] = useState([]);
 */

    return (
        
            <section className="list container mx-auto                    {/* 1. This centers the whole container */}
    max-w-md
    m-0                   {/* 2. This makes it the same width as your form */}
    flex 
    flex-col                       {/* Adds space between cards */}
     
    min-[900px]:flex-wrap 
    min-[900px]:justify-center 
    ">

                {thoughts.map((thought) => (

                    <ThoughtCard key={thought._id} thought={thought} />
                ))}
            </section>
    );
};

export default ThoughtList;