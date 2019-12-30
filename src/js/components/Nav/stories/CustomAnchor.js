import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grommet, Main, Nav } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const customTheme = deepMerge(grommet, {
  anchor: {
    textDecoration: 'none',
    fontWeight: 500,
    color: {
      dark: 'white',
      light: 'neutral-2',
    },
    hover: {
      textDecoration: 'none',
      fontWeight: 700,
    },
  },
});

const CustomAnchor = () => (
  <Grommet full theme={customTheme}>
    <Box background="dark-1" pad="large" fill>
      <Box direction="row" pad={{ vertical: 'medium' }}>
        <Nav
          width="small"
          margin={{ right: 'large' }}
          items={[
            { label: 'HTML', href: '#' },
            { label: 'JS', href: '#' },
            { label: 'CSS', href: '#' },
            { label: 'REACT', href: '#' },
          ]}
        />
        <Main>Place main content here</Main>
      </Box>
    </Box>
  </Grommet>
);

storiesOf('Nav', module).add('Custom Anchor', () => <CustomAnchor />);