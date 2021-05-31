import React from 'react';

const SearchBox = (props) => {
    return (
        <input type='search'
            placeholder='Search for a friend'
            className='br2 pa3 bg-light-green ma4 b--light-blue ba2 shadow-4'
            onChange={props.searchChange}
        />
    )
}

export default SearchBox;