import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { Menu } from '.';

describe('Menu', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render menu trigger button', () => {
    render(
      <Menu label="Choose">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    expect(button).toBeInTheDocument();
  });

  it('should render menu trigger button with default variant=primary', () => {
    render(
      <Menu label="Choose">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    expect(button).toHaveClass('a-btn-primary ');
  });

  it('should render menu trigger button with provided variant=danger', () => {
    render(
      <Menu label="Choose" variant="danger">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    expect(button).toHaveClass('a-btn-danger ');
  });

  it('should render menu trigger button with default size=md', () => {
    render(
      <Menu label="Choose">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    expect(button).toHaveClass('a-btn-md ');
  });

  it('should render menu trigger button with provided size=lg', () => {
    render(
      <Menu label="Choose" size="lg">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    expect(button).toHaveClass('a-btn-lg ');
  });

  it('should render menu with sections', () => {
    render(
      <Menu label="Choose">
        <Menu.Section title="profile" data-testid="profileSection">
          <Menu.Item id="profile">Profile</Menu.Item>
          <Menu.Item id="dashboard">Dashboard</Menu.Item>
        </Menu.Section>
        <Menu.Section title="actions">
          <Menu.Item id="update">Update</Menu.Item>
          <Menu.Item id="logout">Logout</Menu.Item>
        </Menu.Section>
      </Menu>,
    );

    expect(screen.queryByRole('presentation', { name: /profile/i }));
    expect(screen.queryByRole('presentation', { name: /actions/i }));
  });

  it('should render menu with separator', () => {
    render(
      <Menu label="Choose">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Separator data-testid="separator" />
        <Menu.Item id="logout">Logout</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    fireEvent.click(button);

    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('should render menu with disabled items', () => {
    render(
      <Menu label="Choose" disabledKeys={['account']}>
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    fireEvent.click(button);

    const account = screen.getByRole('menuitem', { name: /account/i });

    expect(account).toHaveAttribute('aria-disabled', 'true');
  });

  it('should open menu when trigger button is clicked', () => {
    render(
      <Menu label="Choose">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    fireEvent.click(button);

    const menu = screen.getByRole('menu');
    const profile = screen.getByRole('menuitem', { name: /profile/i });
    const dashboard = screen.getByRole('menuitem', { name: /dashboard/i });
    const account = screen.getByRole('menuitem', { name: /account/i });

    expect(menu).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(dashboard).toBeInTheDocument();
    expect(account).toBeInTheDocument();
  });

  it('should close menu when menu item is clicked', () => {
    render(
      <Menu label="Choose">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    fireEvent.click(button);

    const profile = screen.getByRole('menuitem', { name: /profile/i });
    fireEvent.click(profile);

    const menu = screen.queryByRole('menu');
    const dashboard = screen.queryByRole('menuitem', { name: /dashboard/i });
    const account = screen.queryByRole('menuitem', { name: /account/i });

    expect(menu).not.toBeInTheDocument();
    expect(dashboard).not.toBeInTheDocument();
    expect(account).not.toBeInTheDocument();
  });

  it('should close menu when button trigger is clicked', () => {
    render(
      <Menu label="Choose">
        <Menu.Item id="profile">Profile</Menu.Item>
        <Menu.Item id="dashboard">Dashboard</Menu.Item>
        <Menu.Item id="account">Account</Menu.Item>
      </Menu>,
    );

    const button = screen.getByRole('button', { name: /choose/i });
    fireEvent.click(button);

    const menu = screen.queryByRole('menu');
    const profile = screen.queryByRole('menuitem', { name: /profile/i });
    const dashboard = screen.queryByRole('menuitem', { name: /dashboard/i });
    const account = screen.queryByRole('menuitem', { name: /account/i });

    fireEvent.click(button);

    expect(menu).not.toBeInTheDocument();
    expect(profile).not.toBeInTheDocument();
    expect(dashboard).not.toBeInTheDocument();
    expect(account).not.toBeInTheDocument();
  });
});
