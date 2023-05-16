import cornerBottom from '../assets/icons/corner-bottom-2px.svg';
import cornerTop from '../assets/icons/corner-top-2px.svg';

const Frame = () => {
  return (
  <div>
      <img src={cornerTop} className='frameTopCorner' alt="Top frame corner" />
      <img src={cornerBottom} className='frameBottomCorner' alt="Bottom frame corner" />
  </div>
  )
}

export default Frame;