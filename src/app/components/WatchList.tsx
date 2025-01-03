'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

type Props = {}

function WatchList({}: Props) {
  const { data: session } = useSession();

  const [cards, setCards] = useState<string[]>([]);
  const [newCardText, setNewCardText] = useState<string>('');
  const [editedText, setEditedText] = useState<{ [key: number]: string }>({});

  const addCard = async (): Promise<void> => {
    if (newCardText.trim() === '') return;

    try {
      const response = await axios.post('/api/addCard', { text: newCardText, userEmail: session?.user?.email });
      const savedMovie = response.data.savedCard;
      setCards([...cards, savedMovie.movies]); // Ensure `newCard.text` is correct from server response
      setNewCardText('');
    } catch (error) {
      console.error('Failed to add Card', error);
    }
  };

  const updateCard = async (index: number): Promise<void> => {
    const newText = editedText[index];
    if (!newText || newText.trim() === cards[index]) return;

    try {
      await axios.put('/api/updateCard', { id: `card-${index}`, text: newText });
      const updatedCards = [...cards];
      updatedCards[index] = newText;
      setCards(updatedCards);
      setEditedText((prev) => {
        const newEditedText = { ...prev };
        delete newEditedText[index];
        return newEditedText;
      });
    } catch (error) {
      console.error('Failed to update card', error);
    }
  };

  const deleteCard = async (index: number): Promise<void> => {
    try {
      await axios.delete('/api/deleteCard', { data: { id: `card-${index}` } });
      setCards(cards.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Failed to delete card', error);
    }
  };

  return (
    <div className='parent-div bg-brand-black p-4 h-screen'>
      <h2 className='text-white text-4xl ml-6 mb-6'>Update your WatchList</h2>

      <div className='p-4'>
        <div className='mb-4 border border-red flex justify-center'>
          <textarea
            name='entry-input'
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
            placeholder='Enter text here'
            className='border p-2 md:w-1/2 w-full rounded-md'
          />
        </div>
        <button onClick={addCard} className='bg-brand-grey hover:bg-brand-red mb-6 text-white p-2 rounded mt-2'>
          Add Card
        </button>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cards.map((card, index) => (
            <div key={index} className='border rounded p-4 bg-brand-grey text-white relative'>
              <textarea
                value={editedText[index] ?? card}
                onChange={(e) => setEditedText({ ...editedText, [index]: e.target.value })}
                className='w-full bg-transparent border-none outline-none'
              />
              <button
                onClick={() => deleteCard(index)}
                className='absolute top-2 right-2 bg-brand-red text-white p-1 rounded'
              >
                X
              </button>
              <button
                onClick={() => updateCard(index)}
                className='bg-white text-black hover:bg-brand-red hover:text-white p-2 rounded mt-2'
              >
                Update Card
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
