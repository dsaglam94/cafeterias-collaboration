import { useState, useEffect } from 'react';

const Carousel = ({ imagesData }: any) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const imageUrls: string[] = [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < imageUrls.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  imagesData.map((image: any) => {
    if (image.id === '1' || image.id === '5' || image.id === '9') {
      //grab image url from the data
      const imageUrl: string = image.attributes.image.data[0].attributes.url;
      imageUrls.push(imageUrl);
    }
  });

  return (
    <section className='overflow-hidden relative'>
      <article
        className='whitespace-nowrap duration-1000 ease-out'
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {imageUrls.map((imageUrl: string, index: number) => {
          return (
            <div key={index} className='inline-block'>
              <img
                src={imageUrl}
                className='w-screen h-screen object-cover mix-blend-overla'
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Carousel;
