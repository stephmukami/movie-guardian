'use client'
import React from 'react';
import { useState } from 'react';

type Props = {}

function WatchList({}: Props) {
const [cards, setCards] = useState<string[]>([]);

const[newCardText,setNewCardText] = useState<string>("");

const addCard = ():void=>{
  if(newCardText.trim()==="") return;
  setCards([...cards,newCardText]);
  setNewCardText("");
};

const updateCard = (index:number,newText:string):void =>{
 const updatedCards = [...cards];
 updatedCards[index] = newText;
 setCards(updatedCards)
}

//delete via client ama server side
const deleteCard = (index:number):void =>{
  setCards(cards.filter((_,i)=> i !== index));
};

  return (

    <div className='parent-div bg-brand-black p-4 h-screen  '>
        <h2 className='text-white text-4xl ml-6 mb-6'> Update your WatchList</h2>


        <div className="p-4">
          <div className="mb-4 border border-red flex justify-center">
            <textarea
             name="entry-input" 
             id="" 
             value={newCardText}
             onChange={(e)=>setNewCardText(e.target.value)}
             placeholder='Enter text here'
             className="border  p-2 md:w-1/2 w-full rounded-md"
             
              >

            </textarea>

         

          </div>
          <button onClick={addCard} className="bg-brand-grey hover:bg-brand-red mb-6 text-white p-2 rounded mt-2">
              Add Card
            </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card,index)=>(
              <div
              key = {index}
              className="border rounded p-4 bg-brand-grey text-white relative"
              >
                <textarea
                value={card}
                onChange={(e)=>updateCard(index,e.target.value)}
                className="w-full bg-transparent borde-none outline-none" 
                >
                </textarea>
                <button
                onClick={()=>deleteCard(index)}
                className="absolute top-2 right-2 bg-brand-red text-white p-1 rounded"
                >
                  X
                </button>
              </div>
            ))}

          </div>

        </div>

     
    </div>
  )
}

export default WatchList