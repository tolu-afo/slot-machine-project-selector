import React, {useState} from 'react';

export default function SlotCell ({text, type}) {
    return (
    <div id={`SlotCell-${type}`} className='SlotCell flex flex-col justify-center border-t-2 min-w-[8.5rem] h-[8.5rem] text-center text-5xl'>
        {text}
    </div>
    )
}