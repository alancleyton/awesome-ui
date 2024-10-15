import { type ReactNode } from 'react';

import { cn } from '@awesome-ui/utils/cn';

interface CarouselControlProps {
  control: 'next' | 'prev';
  icon?: ReactNode;
  onClick: () => void;
}

const ControlDefaultIcon = ({
  control,
}: Pick<CarouselControlProps, 'control'>) => {
  if (control === 'prev') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="a-carousel-control-prev-icon a-h-8 a-w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M15 6L9 12L15 18"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="a-carousel-control-next-icon a-h-8 a-w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M9 6L15 12L9 18"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CarouselControl = ({
  control,
  icon,
  onClick,
}: CarouselControlProps) => {
  return (
    <button
      type="button"
      className={cn(
        `a-carousel-control-${control}`,
        control === 'prev' ? 'a-left-0' : 'a-right-0',
        'a-absolute a-top-1/2 -a-translate-y-1/2 a-bg-transparent a-rounded-circle a-outline-none a-p-6',
      )}
      onClick={onClick}
    >
      {icon ? icon : <ControlDefaultIcon control={control} />}
    </button>
  );
};
