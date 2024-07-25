import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import defaultAvatar from '../assets/defaultAvatar.png';
import twinkleAvatar from '../assets/twinkleAvatar.png';
import { Link } from 'react-scroll';

// Liste der Bilder für die Slideshow
const images = [
  { src: defaultAvatar, alt: 'defaultAvatar' },
  { src: twinkleAvatar, alt: 'twinkleAvatar' }
];

// Komponente für die Slideshow
function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Effekt, um die Slideshow automatisch zu wechseln
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='flex justify-center items-center'>
      {images.map((image, index) => (
        <div key={index} className={index === currentIndex ? 'opacity-100' : 'opacity-0 transition-opacity duration-1000'}>
          {index === currentIndex && (
            <img src={image.src} alt={image.alt} className='w-full h-full object-cover' />
          )}
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div name='home' className='h-screen w-full bg-[#17191A]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <div className='p-4 bg-[#17191A] border-2 border-[#727070] rounded-lg flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4 text-[#17191A] bg-[#525151] border-2 border-[#727070] rounded-md'>
              <div>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#E5E5E5]'>
                  Samet Cesc, Web-Entwickler
                </h2>
                <p className='text-[#E5E5E5] py-4 max-w-md'>
                  Herzlich Willkommen auf meiner Webseite!
                </p>
                <Link to='about' smooth duration={500} className='text-[#E5E5E5] w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer border-2 hover:bg-[#0099CC] hover:border-[#0099CC]'>
                  Über mich
                  <span>
                    <HiArrowNarrowRight size={25} className='ml-3' />
                  </span>
                </Link>
              </div>
              <Slideshow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
