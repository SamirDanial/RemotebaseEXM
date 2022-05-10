import React from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'
import { useSelector } from 'react-redux'

const title = 'Favorite Movie Directory'

function App() {
  const filteredMovies = useSelector((state) => state.movie.filteredMovies);
  const textInFilteredText = useSelector(
    (state) => state.movie.textInFilteredText
  );

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform />
        </div>
        <div className='layout-column w-30'>
          <Search />
          <Movieslist /> 
          {(filteredMovies.length === 0 && textInFilteredText) &&  <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>}
        </div>
      </div> 
    </div>
  )
}

export default App;
