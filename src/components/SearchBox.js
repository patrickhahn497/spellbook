import React from 'react';
import './SearchBox.css';




const SearchBox = ({searchfield, searchChange, searchClick, onEnter}) => {
  return (
    <div className='pa2'>
      <form>
        <input 
          className='pa3 ba b--green bg-lightest-blue'
          type='search' 
          placeholder='search spells'
          id="input1"
          onChange={searchChange}
          onKeyPress={onEnter}
        />
        <button type='button' className='searchbutton' onClick={searchClick}>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;


// <button type='button' onClick={searchClick}>Submit</button>