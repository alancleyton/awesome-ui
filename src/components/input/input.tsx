import { memo } from 'react';

import { InputRoot } from './input-root';
import { InputControl } from './input-control';
import { InputGroup } from './input-group';

export default {
  Root: memo(InputRoot),
  Control: memo(InputControl),
  Group: memo(InputGroup),
};
