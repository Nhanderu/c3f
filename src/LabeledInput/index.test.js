/* eslint-env jest */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import LabeledInput from '.'

it('renders correctly', () => {
  renderer.create(<LabeledInput />)
})
