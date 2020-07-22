import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '.';

it('renders correctly', () => {
    renderer.create(<Button />);
});
