/* eslint-env jest */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import InformationScreen from '.'

it('renders correctly', () => {
  renderer.create(<InformationScreen />)
})
