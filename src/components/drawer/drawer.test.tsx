import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { Drawer } from '.';

describe('Drawer', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(
      <Drawer.Root open={false} onClose={() => {}} data-testid="drawer">
        drawer
      </Drawer.Root>,
    );

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toBeInTheDocument();
  });

  it('should render with class name', () => {
    render(
      <Drawer.Root
        className="custom"
        open={false}
        onClose={() => {}}
        data-testid="drawer"
      >
        drawer
      </Drawer.Root>,
    );

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveClass('custom');
  });

  it('should render the open Drawer', () => {
    render(
      <Drawer.Root open={true} onClose={() => {}} data-testid="drawer">
        drawer
      </Drawer.Root>,
    );

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveClass('a-drawer-open');
  });

  it('should render the close Drawer', () => {
    render(
      <Drawer.Root open={false} onClose={() => {}} data-testid="drawer">
        drawer
      </Drawer.Root>,
    );

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveClass('a-drawer-close');
  });

  it('should open drawer content with open=true', () => {
    render(
      <Drawer.Root open={true} onClose={() => {}}>
        <Drawer.Content data-testid="drawer-content">
          <div>drawer content</div>
        </Drawer.Content>
      </Drawer.Root>,
    );

    const drawerContent = screen.getByTestId('drawer-content');
    expect(drawerContent).toHaveClass('a-drawer-content-open');
  });

  it('should not open drawer content with open=false', () => {
    render(
      <Drawer.Root open={false} onClose={() => {}}>
        <Drawer.Content data-testid="drawer-content">
          <div>drawer content</div>
        </Drawer.Content>
      </Drawer.Root>,
    );

    const drawerContent = screen.getByTestId('drawer-content');
    expect(drawerContent).toHaveClass('a-drawer-content-close');
  });

  it('should render drawer with provided placement', () => {
    render(
      <Drawer.Root
        open={false}
        placement="bottom"
        onClose={() => {}}
        data-testid="drawer"
      >
        drawer
      </Drawer.Root>,
    );

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveClass('a-drawer-bottom');
  });

  it('should render drawer with provided size', () => {
    render(
      <Drawer.Root
        open={false}
        size="full"
        onClose={() => {}}
        data-testid="drawer"
      >
        drawer
      </Drawer.Root>,
    );

    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveClass('a-drawer-full');
  });
});
