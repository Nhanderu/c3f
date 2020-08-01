/* eslint-env jest */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Calculator from '.'

it('renders correctly', () => {
  renderer.create(<Calculator skipStorage />)
})
