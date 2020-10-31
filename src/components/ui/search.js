import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const myOnChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='search character..'
          value={text}
          onChange={(e) => myOnChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
