import ReactPlayer from 'react-player'
import { Card } from 'react-bootstrap'

const VideoPlayer = ({ url, height, width, loop, playing }: any) => {
  return (
    <Card className='video-player'>
      <ReactPlayer
        className="react-player"
        url={url}
        style={{ margin: 'auto', textAlign: 'center' }}
        height={height}
        width={width}
        controls
        loop={loop}
        playing={playing}
      />
    </Card>
  )
}

export default VideoPlayer
