import React from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        < SearchIcon className='search-icon' size="1.3rem" />
        <input onChange={(event) => handleSearchNote(event.target.value)}type="text" placeholder="type to search..." />
    </div>
  )
}

export default Search