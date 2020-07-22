import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Calculator from './Calculator'
import InformationScreen from './InformationScreen'
import resources from './resources'
import styles from './styles'

const { Navigator, Screen } = createStackNavigator()

export default () => {
  return (
    <>
      <StatusBar backgroundColor={resources.colors.yellow} barStyle='dark-content' />
      <NavigationContainer>
        <Navigator>
          <Screen
            name={resources.pages.calculator}
            component={Calculator}
            options={({ navigation }) => ({
              title: 'Calculadora',
              headerStyle: styles.header,
              headerTintColor: resources.colors.black,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate(resources.pages.informationScreen)}
                  color={resources.colors.black}
                  title="Info"
                />
              )
            })}
          />
          <Screen
            name={resources.pages.informationScreen}
            component={InformationScreen}
            options={{
              title: 'Informações',
              headerStyle: styles.header,
              headerTintColor: resources.colors.black
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  )
}
