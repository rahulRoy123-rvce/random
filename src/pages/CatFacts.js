import React, { useState } from 'react';

const CatFacts = [
  "Fun Fact 1: Octopuses have three hearts.",
  "Fun Fact 2: The Eiffel Tower can be 15 cm taller during the summer.",
  "Fun Fact 3: Bananas are berries, but strawberries aren't..",
  "Fun Fact 4: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
  "Fun Fact 5: A day on Venus is longer than a year on Venus."
];

function CatFactsApp() {
  const [factNumber, setFactNumber] = useState(null);

  const randomFact = () => {
    if (factNumber !== null) {
      return CatFacts[factNumber];
    }
    return "Click 'Show Fact' to get a random cat fact!";
  };

  const generateRandomFact = () => {
    const newFactNumber = Math.floor(Math.random() * CatFacts.length);
    setFactNumber(newFactNumber);
  };

  return (
    <div>
        <div>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          
          <code className="font-mono font-bold">Generate  a random fun fact!</code>
        </p>
      
      </div>
      <button className='text-2xl font-bold group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={generateRandomFact}>Show Fact
      </button>
      
      <p className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' id="cat-fact">{randomFact()}</p>
    </div>
  );
}

export default CatFactsApp;
