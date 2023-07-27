import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner' >
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className="banner_buttons">
                <button className='button'>play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>Enjoy on your TV. Save your favourites easily and always have something to watch.Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
