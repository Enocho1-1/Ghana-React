import "./video.css"
import videoBg from "../assests/video-1.mp4"

export const Video = () => {
  return (
        <div className="videoBack">
            <video src={videoBg} autoPlay loop muted />
        </div>

  )
}
