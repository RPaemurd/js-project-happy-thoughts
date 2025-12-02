import React from "react";

export const ThoughtForm = () => {
  return (
<div className="mx-4 md:mx-auto my-8 bg-gray-100 border-1 border-solid p-4 shadow-lg max-w-md relative">      {/* This creates the black shadow effect */}
      <div className="absolute top-2 left-2 w-full h-full bg-black -z-10"></div>
      
      <form>
        <label htmlFor="happy-thought" className="block text-gray-800 font-semibold mb-2">
          What's making you happy right now?
        </label>
        <textarea
          id="happy-thought"
          rows="2"
          className="w-full p-2 border focus:outline-none focus:ring-1"
          placeholder="React is making me happy!"
        />
        <button
          type="submit"
          className="mt-3 bg-red-200 text-black-700 font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-red-300 hover:text-white transition-colors"
        >
          <img src="./public/heart.png" alt="heart emoji"class="w-4" />
          Send Happy Thought
          <img src="./public/heart.png" alt="heart emoji" class="w-4" />
        </button>
      </form>
    </div>
  );
};
