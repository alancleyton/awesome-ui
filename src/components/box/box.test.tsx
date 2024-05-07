import { createRef } from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen, cleanup } from '@testing-library/react';

import { Box } from '.';

describe('Box', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(
      <Box inlineBlock data-testid="box">
        <p>hello world</p>
      </Box>,
    );

    const box = screen.getByTestId('box');
    expect(box).toBeInTheDocument();
  });

  it('should render with ref', () => {
    const boxRef = createRef<HTMLButtonElement>();
    render(
      <Box inlineBlock data-testid="box" ref={boxRef}>
        <p>hello world</p>
      </Box>,
    );

    expect(boxRef.current).not.toBeNull();
  });

  it('should be accessible', async () => {
    window.HTMLCanvasElement.prototype.getContext = () => null;
    render(
      <Box inlineBlock data-testid="box">
        <p>hello world</p>
      </Box>,
    );

    const box = screen.getByTestId('box');
    expect(await axe(box)).toHaveNoViolations();
  });

  it('should render as element type', () => {
    const { container } = render(
      <Box inlineBlock is="span" data-testid="box">
        <p>hello world</p>
      </Box>,
    );

    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('should render with provided box display', () => {
    render(
      <Box block data-testid="box">
        <p>hello world</p>
      </Box>,
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveClass('a-block');
  });

  it('should render rounded box', () => {
    render(
      <Box rounded="md" data-testid="box">
        <p>hello world</p>
      </Box>,
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveClass('a-rounded-md');
  });

  it('should render with provided spacing', () => {
    render(
      <Box pt={4} pb={4} mt={4} mb={4} data-testid="box">
        <p>hello world</p>
      </Box>,
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveClass('a-pt-4 a-pb-4 a-mt-4 a-mb-4');
  });

  it('should render with provided bg color', () => {
    render(
      <Box bg="yellow" data-testid="box">
        <p>hello world</p>
      </Box>,
    );

    const box = screen.getByTestId('box');
    expect(box).toHaveClass('a-bg-yellow');
  });
});
