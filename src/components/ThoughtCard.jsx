function ThoughtCard({thought}) {

  return (
<div className="mx-4 md:mx-auto my-8 bg-gray-100 border-1 border-solid p-4 shadow-lg max-w-md relative">      {/* This creates the black shadow effect */}
      <div className="absolute top-2 left-2 w-full h-full bg-black -z-10"></div>        
      {/* Thought text */}
      <p className="text-base leading-relaxed mb-4 text-gray-800">{thought.message}
            
      </p>

      {/* Footer with hearts and timestamp */}
      <div className="flex items-center justify-between">
        {/* Hearts section */}
        <button className="flex items-center gap-2 hover:scale-110 transition-transform">
          <img src="./heart.png" alt="heart emoji"className="w-4" />
          <span className="text-sm font-semibold text-gray-700">x </span>
        </button>

        {/* Timestamp */}
        <span className="text-sm text-gray-400"></span>
      </div>
    </div>
  );
};

export default ThoughtCard;
