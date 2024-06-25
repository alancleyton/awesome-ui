import { memo } from 'react';

import { InputRoot } from './input-root';
import { InputField } from './input-field';
import { InputGroup } from './input-group';

export default {
  Root: memo(InputRoot),
  Field: memo(InputField),
  Group: memo(InputGroup),
};
