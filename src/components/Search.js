import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { movieAction } from '../store/movie'

function Search() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.searchMovie(searchText))
    if (searchText.length > 0) {
      dispatch(movieAction.setTextInFilteredText(true))
    } else {
      dispatch(movieAction.setTextInFilteredText(false))
    }
  }, [searchText, dispatch])

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className='w-75 py-2'
        data-testid='search'
      />
    </section>
  )
}

export default Search
