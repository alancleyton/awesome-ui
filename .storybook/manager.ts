import './storybook.css';
import { addons } from '@storybook/addons';
import { sbThemes } from './theme';

addons.setConfig({
  theme: sbThemes.manager
});
