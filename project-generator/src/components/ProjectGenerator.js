import React, { useState } from 'react';
import SlotWidget from './SlotWidget';

const generator = (options, setOption) => {
    // Given options, returns an option at random.
    const random = Math.floor(Math.random() * options.length);
    let option = options[random];
    setOption(option);
}

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const ideas = [
    'idea 1',
    'idea 2',
    'idea 3',
    'idea 4',
    'idea 5',
    'idea 6',
]

const languages = [
    'language 1',
    'language 2',
    'language 3',
    'language 4',
    'language 5',
    'language 6',
]

const constraints = [
    'constraint 1',
    'constraint 2',
    'constraint 3',
    'constraint 4',
    'constraint 5',
    'constraint 6',
]

export default function ProjectGenerator () {

    const [canSelect, setCanSelect] = useState(false);

    return (
        <>
            <div className='flex flex-col justify-center my-[15rem]'>
                <div className="flex gap-4 justify-center py-4">
                    <SlotWidget key={0} type={"ideas"} items={shuffle(ideas)} canSelect={canSelect} speed={1200}/>
                    <SlotWidget key={1} type={"languages"} items={shuffle(languages)} canSelect={canSelect} speed={-1000}/>
                    <SlotWidget key={2} type={"constraints"} items={shuffle(constraints)} canSelect={canSelect} speed={1100}/>
                </div>
                <div id="slot-top" className="absolute bg-red-500 mx-auto w-1/2 h-[25rem] top-[8rem] left-[46vh]"></div>
                <div id="slot-bottom" className="absolute bg-red-500 mx-auto w-1/2 h-[25rem] top-[44rem] left-[46vh]"></div>
                {!canSelect && <button onClick={()=>setCanSelect(!canSelect)} className="absolute font-bold text-3xl top-[20rem] left-[44vw] bg-gray-400 p-2 hover:brightness-125 duration-300 ease-in-out">Get a Project!</button>}
            </div>
        </>
    )
}
