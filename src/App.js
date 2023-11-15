import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Video from './components/Video'

function App() {
  const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4']
  const [selectedVideo, setSelectedVideo] = useState('video1.mp4')
  const handleVideoChange = (video) => {
    setSelectedVideo(video)
  }
  return (
    <div className="wrapper">
      <h1>React Video Player</h1>
      <div className="container">
        <Video selectedVideo={selectedVideo} />
        <Menu
          selectedVideo={selectedVideo}
          handleVideoChange={handleVideoChange}
          videos={videos}
        />
      </div>
    </div>
  )
}

export default App
