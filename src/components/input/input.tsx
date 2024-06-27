import { memo } from 'react';

import { InputRoot } from './input-root';
import { InputField } from './input-field';
import { InputGroup } from './input-group';
import { InputRightAddon, InputLeftAddon } from './input-addon';
import { InputRightElement, InputLeftElement } from './input-element';

export default {
  Root: memo(InputRoot),
  Field: memo(InputField),
  Group: memo(InputGroup),
  RightAddon: memo(InputRightAddon),
  LeftAddon: memo(InputLeftAddon),
  RightElement: memo(InputRightElement),
  LeftElement: memo(InputLeftElement),
};
