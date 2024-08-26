import { createRef } from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen, cleanup } from '@testing-library/react';

import { Input } from '.';

describe('input', () => {
  beforeEach(() => {
    cleanup();

    const { getComputedStyle } = window;
    window.getComputedStyle = element => getComputedStyle(element);
  });

  it('should render correctly', () => {
    render(
      <Input>
        <Input.Field data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    render(
      <Input>
        <label htmlFor="example">example</label>
        <Input.Field
          id="example"
          data-testid="input-field"
          aria-labelledby="temperature low"
        />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(await axe(inputField)).toHaveNoViolations();
  });

  it('should render input field with ref', () => {
    const inputRef = createRef<HTMLInputElement>();

    render(
      <Input>
        <Input.Field data-testid="input-field" ref={inputRef} />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');

    expect(inputRef.current).not.toBeNull();
    expect(inputField).toEqual(inputRef.current);
  });

  it('should render input field with class name', () => {
    render(
      <Input>
        <Input.Field className="custom" data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveClass('a-input-field custom');
  });

  it('should render input field with type', () => {
    render(
      <Input>
        <Input.Field type="text" data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveAttribute('type', 'text');
  });

  it('should render input field with placeholder', () => {
    render(
      <Input>
        <Input.Field placeholder="example" data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveAttribute('placeholder', 'example');
  });

  it('should render disabled input field', () => {
    render(
      <Input>
        <Input.Field disabled data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toBeDisabled();
  });

  it('should render input field with default size=md', () => {
    render(
      <Input>
        <Input.Field data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveClass('a-input-field-md');
  });

  it('should render input field with size=lg', () => {
    render(
      <Input size="lg">
        <Input.Field data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveClass('a-input-field-lg');
  });

  it('should render input field with default variant=secondary', () => {
    render(
      <Input>
        <Input.Field data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveClass('a-input-field-secondary');
  });

  it('should render input field with variant=primary', () => {
    render(
      <Input variant="primary">
        <Input.Field data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveClass('a-input-field-primary');
  });

  it('should render full width input field', () => {
    render(
      <Input isFull>
        <Input.Field data-testid="input-field" />
      </Input>,
    );

    const inputField = screen.getByTestId('input-field');
    expect(inputField).toHaveClass('a-input-field-full');
  });

  it('should render input with group', () => {
    render(
      <Input>
        <Input.Group data-testid="input-group">
          <Input.Field data-testid="input-field" />
        </Input.Group>
      </Input>,
    );

    const inputGroup = screen.getByTestId('input-group');
    const inputField = screen.getByTestId('input-field');
    expect(inputGroup).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it('should render input with element', () => {
    render(
      <Input>
        <Input.Group elementRight data-testid="input-group">
          <Input.RightElement data-testid="element-right">@</Input.RightElement>
          <Input.Field data-testid="input-field" />
        </Input.Group>
      </Input>,
    );

    const inputGroup = screen.getByTestId('input-group');
    const elementRight = screen.getByTestId('element-right');
    const inputField = screen.getByTestId('input-field');
    expect(inputGroup).toBeInTheDocument();
    expect(elementRight).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it('should render input with addon', () => {
    render(
      <Input>
        <Input.Group addonLeft data-testid="input-group">
          <Input.LeftAddon data-testid="addon-left">@</Input.LeftAddon>
          <Input.Field data-testid="input-field" />
        </Input.Group>
      </Input>,
    );

    const inputGroup = screen.getByTestId('input-group');
    const elementRight = screen.getByTestId('addon-left');
    const inputField = screen.getByTestId('input-field');
    expect(inputGroup).toBeInTheDocument();
    expect(elementRight).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });
});
