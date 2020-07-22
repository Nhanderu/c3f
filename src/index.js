import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Calculator from './Calculator'
import InformationScreen from './InformationScreen'
import Button from './Button'
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
                  style={styles.infoButton}
                >
                  Info
                </Button>
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
