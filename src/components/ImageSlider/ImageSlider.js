import React, { useEffect, useState } from 'react'
import '../ImageSlider/Imageslider.css'
import imageUrls from '../../constants/imageUrls'

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, imageUrls.length]);

    return (
        <div className="image-slider">
            {/* <img src={imageUrls[0]} /> */}
            {imageUrls.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={index === currentIndex ? 'active' : ''}
                />
            ))}
        </div>
    );
}

export default ImageSlider