import React from 'react'
import './Main.css'
import inkVid from '../../assets/video-2.mp4'

function Main() {
  return (
    <div className="main">
      <div className='overlay'>
      </div>
        <video className='bg-video' src={ inkVid } autoPlay muted />
    </div>
  )
}
export default Main