import type { Meta, StoryObj } from '@storybook/react';

import { Carousel, type CarouselProps } from '.';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta<CarouselProps>;

type Story = StoryObj<CarouselProps>;

const CarouselTemplate: Story = {
  render: ({ interval, activeIndex, prevIcon, nextIcon }) => {
    return (
      <Carousel
        interval={interval}
        activeIndex={activeIndex}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
      >
        <Carousel.Item index={0}>
          <div className="a-flex a-flex-col a-items-center a-justify-center a-w-full a-h-20 a-bg-gray-30">
            <h2 className="a-text-gray-90">First slide</h2>
            <p className="a-text-gray-90">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item index={1}>
          <div className="a-flex a-flex-col a-items-center a-justify-center a-w-full a-h-20 a-bg-gray-30">
            <h2 className="a-text-gray-90">Second slide</h2>
            <p className="a-text-gray-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item index={2}>
          <div className="a-flex a-flex-col a-items-center a-justify-center a-w-full a-h-20 a-bg-gray-30">
            <h2 className="a-text-gray-90">Third slide</h2>
            <p className="a-text-gray-90">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  },
};

export const DefaultCarousel: Story = {
  ...CarouselTemplate,
};

export const ControledCarousel: Story = {
  ...CarouselTemplate,
  args: {
    activeIndex: 1,
  },
};

export const WithInterval: Story = {
  ...CarouselTemplate,
  args: {
    interval: 3000,
  },
};

export const WithCustomIcons: Story = {
  ...CarouselTemplate,
  args: {
    prevIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    nextIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48pxpx"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};
