import React, { useState } from 'react'
import { movieAction } from '../store/movie'
import { useDispatch } from 'react-redux';

function Movieform() {
  const dispach = useDispatch();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');

  const submit = (e) => {
    e.preventDefault();
    dispach(movieAction.addMovie({name: name, rating: rating, duration: duration}))
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ submit }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
