'use client'
// components/WatchList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface WatchListCard {
  id: string;
  name: string;
  movieTitles: string[];
}

function WatchList() {
  const { data: session } = useSession();
  const [cards, setCards] = useState<WatchListCard[]>([]);
  const [newCardName, setNewCardName] = useState('');
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     if (!session?.user?.email) return;
      
  //     try {
  //       const response = await axios.get('/api/watchlist', {
  //         params: { userEmail: session.user.email },
  //       });
  //       setCards(response.data.watchlists);
  //     } catch (error) {
  //       console.error('Failed to fetch watchlists', error);
  //     }
  //   };

  //   fetchCards();
  // }, [session]);

  const addCard = async () => {
    if (!newCardName.trim() || !session?.user?.email) return;

    try {
      const response = await axios.post('/api/watchlist', {
        name: newCardName,
        userEmail: session.user.email,
      });
      setCards([...cards, response.data.watchlist]);
      setNewCardName('');
    } catch (error) {
      console.error('Failed to add watchlist', error);
    }
  };

  const addMovieToCard = async (cardId: string) => {
    if (!newMovieTitle.trim()) return;

    try {
      const response = await axios.put(`/api/watchlist/${cardId}/movies`, {
        movieTitle: newMovieTitle,
      });
      
      setCards(cards.map(card => 
        card.id === cardId 
          ? { ...card, movieTitles: [...card.movieTitles, newMovieTitle] }
          : card
      ));
      setNewMovieTitle('');
      setSelectedCard(null);
    } catch (error) {
      console.error('Failed to add movie', error);
    }
  };

  const deleteCard = async (id: string) => {
    try {
      await axios.delete(`/api/watchlist/${id}`);
      setCards(cards.filter(card => card.id !== id));
    } catch (error) {
      console.error('Failed to delete watchlist', error);
    }
  };

  const removeMovieFromCard = async (cardId: string, movieTitle: string) => {
    try {
      await axios.delete(`/api/watchlist/${cardId}/movies`, {
        data: { movieTitle }
      });
      
      setCards(cards.map(card => 
        card.id === cardId 
          ? { ...card, movieTitles: card.movieTitles.filter(title => title !== movieTitle) }
          : card
      ));
    } catch (error) {
      console.error('Failed to remove movie', error);
    }
  };

  return (
    <div className="parent-div bg-brand-black p-4 min-h-screen">
      <h2 className="text-white text-4xl ml-6 mb-6">My Watchlists</h2>

      <div className="p-4">
        <div className="mb-4 flex gap-4">
          <input
            type="text"
            value={newCardName}
            onChange={(e) => setNewCardName(e.target.value)}
            placeholder="Enter watchlist name"
            className="border p-2 rounded-md flex-grow"
          />
          <button 
            onClick={addCard}
            className="bg-brand-grey hover:bg-brand-red text-white p-2 rounded"
          >
            Create Watchlist
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="border rounded p-4 bg-brand-grey text-white relative">
              <button
                onClick={() => deleteCard(card.id)}
                className="absolute top-2 right-2 bg-brand-red text-white p-1 rounded"
              >
                X
              </button>
              
              <h3 className="text-xl font-bold mb-2">{card.name}</h3>
              
              <ul className="mb-4">
                {card.movieTitles.map((movie, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    {movie}
                    <button
                      onClick={() => removeMovieFromCard(card.id, movie)}
                      className="text-xs bg-brand-red px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {selectedCard === card.id ? (
                <div className="mt-2">
                  <input
                    type="text"
                    value={newMovieTitle}
                    onChange={(e) => setNewMovieTitle(e.target.value)}
                    placeholder="Enter movie title"
                    className="w-full p-2 rounded text-black mb-2"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => addMovieToCard(card.id)}
                      className="bg-white text-black hover:bg-brand-red hover:text-white p-2 rounded"
                    >
                      Add Movie
                    </button>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="bg-brand-grey text-white hover:bg-brand-red p-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedCard(card.id)}
                  className="bg-white text-black hover:bg-brand-red hover:text-white p-2 rounded"
                >
                  Add Movie
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
