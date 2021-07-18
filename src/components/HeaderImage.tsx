import { Image } from 'react-bootstrap'

const HeaderImage = ({ img, className }: any) => {

  return (
    <div className="header-pic">
      <Image src={img} 
        fluid 
        className={className} 
      >
      </Image>
    </div>
  )
}

export default HeaderImage
