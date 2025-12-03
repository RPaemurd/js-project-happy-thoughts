import { useState, useEffect } from 'react';
import ThoughtCard from './ThoughtCard';

function ThoughtList({thoughts}) {

    return (
        
            <section className="list container">

                {thoughts.map((thought) => (

                    <ThoughtCard key={thought._id} thought={thought} />
                ))}
            </section>
    );
};

export default ThoughtList;