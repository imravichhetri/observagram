import React, {useEffect} from 'react'

import './styles.scss';

const ImageGrid = ({userImages}) => {
  useEffect(() => {
    function intersection() {
      const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });
    
        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        console.error('IntersectionObserver is not supported');
      }
    }
    document.addEventListener("DOMContentLoaded",intersection );
    return () => {
      document.removeEventListener('DOMContentLoaded',intersection)
    }
  }, [])
  return (
    <ul className="image-grid">
      {
        userImages.map((imageObj)=>{
          return (
            <li>
              <img class="lazy" src={imageObj.image_url} alt="" loading="lazy"/>
            </li>
          )
        })
      }
    </ul>
  )
}


export default ImageGrid;
