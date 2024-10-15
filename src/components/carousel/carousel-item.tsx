import { type HTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';
import { useCarousel } from './carousel-context';

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Slide item index.
   *
   * @default `null`
   */
  index?: number | null;
}

export const CarouselItem = ({
  children,
  index = null,
  className,
  ...otherProps
}: CarouselItemProps) => {
  const { currentIndex } = useCarousel();

  return (
    <div
      className={cn(
        'a-carousel-item a-flex-shrink-0 a-w-full',
        currentIndex === index ? 'item-active' : '',
        className,
      )}
      role="carouselitem"
      {...otherProps}
    >
      {children}
    </div>
  );
};
