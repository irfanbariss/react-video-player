const Video = ({ selectedVideo }) => {
  const videoPath = `/videos/${selectedVideo}`

  return (
    <div className="video-container">
      <h2>Video Player</h2>
      <video
        width="600"
        controls
        src={videoPath}
        style={{ borderRadius: '1rem' }}
      />
    </div>
  )
}
export default Video
