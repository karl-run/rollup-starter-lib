import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HowLongTillLunch from '../src/main';

storiesOf('HowLongTillLunch', module)
  .add('with basic props', () => <HowLongTillLunch hours={1} minutes={15} />)
  .add('with different props', () => <HowLongTillLunch hours={100} minutes={30} />);
