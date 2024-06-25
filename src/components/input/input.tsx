import { memo } from 'react';

import { InputRoot } from './input-root';
import { InputField } from './input-field';
import { InputGroup } from './input-group';
import { InputLeftAddon, InputRightAddon } from './input-addon';

export default {
  Root: memo(InputRoot),
  Field: memo(InputField),
  Group: memo(InputGroup),
  RightAddon: memo(InputRightAddon),
  LeftAddon: memo(InputLeftAddon),
};
