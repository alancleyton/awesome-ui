import { createContext, useContext } from 'react';

import type { CarouselProps } from '.';

interface CarouselContextProps
  extends Pick<CarouselProps, 'activeIndex' | 'interval'> {
  currentIndex: number;
}

export const CarouselContext = createContext<CarouselContextProps>({
  currentIndex: 0,
  activeIndex: 0,
  interval: null,
});

export const useCarousel = () => useContext(CarouselContext);
