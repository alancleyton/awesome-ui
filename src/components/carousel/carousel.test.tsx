import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup, waitFor } from '@testing-library/react';

import { Carousel } from '.';

describe('Carousel', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(
      <Carousel>
        <Carousel.Item>item 1</Carousel.Item>
        <Carousel.Item>item 2</Carousel.Item>
        <Carousel.Item>item 3</Carousel.Item>
      </Carousel>,
    );

    const carousel = screen.getByRole('carousel');
    const carouselItems = screen.getAllByRole('carouselitem');
    expect(carouselItems[0]).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
  });

  it('should render carousel with active item', () => {
    render(
      <Carousel activeIndex={1}>
        <Carousel.Item index={0}>item 1</Carousel.Item>
        <Carousel.Item index={1}>item 2</Carousel.Item>
        <Carousel.Item index={2}>item 3</Carousel.Item>
      </Carousel>,
    );

    const carouselItems = screen.getAllByRole('carouselitem');
    expect(carouselItems[1]).toHaveClass('item-active');
  });

  it('should handle carousel with interval timer', async () => {
    render(
      <Carousel interval={500}>
        <Carousel.Item index={0}>item 1</Carousel.Item>
        <Carousel.Item index={1}>item 2</Carousel.Item>
        <Carousel.Item index={2}>item 3</Carousel.Item>
      </Carousel>,
    );

    await waitFor(() => {
      const carouselItems = screen.getAllByRole('carouselitem');
      expect(carouselItems[1]).toHaveClass('item-active');
    });
  });

  it('should render with custom prev control button icon', () => {
    render(
      <Carousel
        activeIndex={1}
        prevIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="none"
            data-testid="prevIcon"
          >
            <path
              d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        <Carousel.Item index={0}>item 1</Carousel.Item>
        <Carousel.Item index={1}>item 2</Carousel.Item>
        <Carousel.Item index={2}>item 3</Carousel.Item>
      </Carousel>,
    );

    const prevIcon = screen.getByTestId('prevIcon');
    expect(prevIcon).toBeInTheDocument();
  });

  it('should render with custom next control button icon', () => {
    render(
      <Carousel
        activeIndex={1}
        nextIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48pxpx"
            viewBox="0 0 24 24"
            fill="none"
            data-testid="nextIcon"
          >
            <path
              d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        <Carousel.Item index={0}>item 1</Carousel.Item>
        <Carousel.Item index={1}>item 2</Carousel.Item>
        <Carousel.Item index={2}>item 3</Carousel.Item>
      </Carousel>,
    );

    const nextIcon = screen.getByTestId('nextIcon');
    expect(nextIcon).toBeInTheDocument();
  });
});
