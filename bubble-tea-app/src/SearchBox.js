import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba b--lightest-blue '
            type='search' 
            placeholder='search drinks'
            onChange={searchChange}
            /> 
        </div>
    );
}

export default SearchBox

// {...} is using destructuring that allows us to grab object properties