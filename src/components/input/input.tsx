import { memo } from 'react';

import { InputControl } from './input-control';
import { InputGroup } from './input-group';

export default {
  Control: memo(InputControl),
  Group: memo(InputGroup),
};
