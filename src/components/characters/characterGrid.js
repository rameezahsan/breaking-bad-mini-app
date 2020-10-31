import React from 'react';
import CharacterItem from './CharacterItem';
import SpinnerGif from '../ui/spinner';

const characterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <SpinnerGif />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default characterGrid;
