const Menu = ({ videos, selectedVideo, handleVideoChange }) => {
  return (
    <div className="video-menu">
      <h2>Video Menu</h2>
      <form>
        {videos.map((video) => (
          <label key={video}>
            <input
              type="radio"
              value={video}
              checked={selectedVideo === video}
              onChange={() => handleVideoChange(video)}
            />
            {video}
          </label>
        ))}
      </form>
    </div>
  )
}
export default Menu
