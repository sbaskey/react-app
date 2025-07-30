
// import photo11 from '../Slide/photo11.jpg'
function Slide({ src}) {
  return (
    <div className="slide-image">
      <img src={src} alt={'slide'} className="slide-image1" />
    </div>
  );
}

export default Slide;