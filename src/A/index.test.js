/* eslint-env jest */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import A from '.'

it('renders correctly', () => {
  renderer.create(<A />)
})
