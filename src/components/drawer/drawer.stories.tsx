import { useState } from 'react';
import type { Meta } from '@storybook/react';

import { Button } from '@awesome-ui/components/button';
import { Drawer, DrawerProps } from '.';

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as Meta<DrawerProps>;

export const DrawerTop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open top drawer</Button>
      <Drawer placement="top" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export const DrawerLeft = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open left drawer</Button>
      <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export const DrawerRight = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open right drawer</Button>
      <Drawer
        placement="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export const DrawerBottom = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open bottom drawer</Button>
      <Drawer
        placement="bottom"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export const DrawerSM = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open bottom drawer</Button>
      <Drawer size="sm" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export const DrawerMD = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open bottom drawer</Button>
      <Drawer size="md" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};

export const DrawerLG = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open bottom drawer</Button>
      <Drawer size="lg" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};
export const DrawerFull = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (param: boolean) => {
    setIsOpen(param);
  };

  return (
    <div>
      <Button onPress={() => toggleDrawer(true)}>open full drawer</Button>
      <Drawer size="full" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Drawer.Content>
          <div className="a-bg-white a-h-full">
            <p>drawer content</p>
          </div>
        </Drawer.Content>
      </Drawer>
    </div>
  );
};
