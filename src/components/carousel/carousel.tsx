import {
  useState,
  useEffect,
  useCallback,
  Children,
  type ReactNode,
  HTMLAttributes,
} from 'react';

import { CarouselContext } from './carousel-context';
import { CarouselControl } from './carousel-control';
import { CarouselItem } from './carousel-item';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Renders the carousel with active item.
   *
   * @default `0`
   */
  activeIndex?: number;
  /**
   * Delay time to automatically cycling an item.
   *
   * @default `null`
   */
  interval?: number | null;
  /**
   * Change the default button icon for the next control.
   *
   * @default `undefined`
   */
  nextIcon?: ReactNode;
  /**
   * Change the default button icon for the prev control.
   *
   * @default `undefined`
   */
  prevIcon?: ReactNode;
}

const getItemsList = (n: number): number[] => {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
};

const Carousel = ({
  children,
  activeIndex = 0,
  interval = null,
  nextIcon,
  prevIcon,
  ...otherProps
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex);
  const items = Children.count(children);
  const itemsList = getItemsList(items);

  const transitionAnimationStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + items) % items);
  }, [currentIndex, setCurrentIndex, items]);

  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % items);
  }, [currentIndex, setCurrentIndex, items]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (interval) {
      const autoplayTimer = setInterval(() => {
        handleNext();
      }, interval);

      return () => clearInterval(autoplayTimer);
    }
  }, [interval, handleNext]);

  return (
    <CarouselContext.Provider value={{ currentIndex, activeIndex, interval }}>
      <div className="a-carousel a-relative" role="carousel" {...otherProps}>
        <div className="a-carousel-wrapper a-overflow-hidden">
          <div
            className="a-carousel-inner a-flex a-transition-transform a-duration-500"
            style={transitionAnimationStyle}
          >
            {children}
          </div>
        </div>
        <CarouselControl control="prev" onClick={handlePrev} icon={prevIcon} />
        <CarouselControl control="next" onClick={handleNext} icon={nextIcon} />
        <div className="carousel-dots a-absolute a-bottom-0 a-left-1/2 -a-translate-x-1/2 a-flex a-justify-center a-p-6">
          {itemsList.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot a-mx-1 a-w-3 a-h-3 a-rounded-full ${
                index === currentIndex ? 'a-bg-gray-800' : 'a-bg-gray-400'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Item = CarouselItem;
export default Carousel;
