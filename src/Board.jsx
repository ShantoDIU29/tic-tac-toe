
import { useState } from 'react'


function Square(){
  const [value,setValue]=useState(null);




function handleClick(){
  setValue('X');
}

  return( <button className="bg-white border border-gray-400 h-12 w-12 m-1 text-lg font-bold" 
  onClick={handleClick}>
        {value}



      </button >
  )
}



export default function Board(){
    return (
      <>
       <div className='flex'>
          <Square ></Square>
          <Square ></Square>
          <Square ></Square>
        </div>

        <div className='flex'>
          <Square ></Square>
          <Square ></Square>
          <Square ></Square>
        </div>

        <div className='flex'>
          <Square ></Square>
          <Square ></Square>
          <Square ></Square>
          
        </div>
      </>
       
    );
}