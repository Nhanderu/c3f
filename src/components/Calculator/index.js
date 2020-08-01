import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Swiper from 'react-native-swiper'

import LabeledInput from '../LabeledInput'
import Button from '../../helpers/Button'
import styles from './styles'

const STORAGE_KEY = 'values'

export default ({ skipStorage }) => {
  const [values, setValues] = useState({})
  const [result, setResult] = useState('')
  const [dynamicStyles, setDynamicStyles] = useState({})

  const swiper = useRef(null)

  useEffect(() => {
    if (!skipStorage) {
      AsyncStorage.getItem(STORAGE_KEY)
        .catch(console.warn)
        .then(raw => raw && setValues(JSON.parse(raw)))
    }
  }, [skipStorage])

  const invalidateFields = fields => {
    const newDynamicStyles = {}
    for (const field of fields) newDynamicStyles[field] = styles.errorInput

    setDynamicStyles(newDynamicStyles)
  }

  const calculate = () => {
    setDynamicStyles({})

    const now = new Date()
    const day = now.getDay()
    const date = now.getDate()
    const month = now.getMonth()

    let field
    let firstErrorPanel
    const invalidFields = []
    let error = false

    field = `a${day}`
    const a = values[field]
    if (!a) {
      error = true
      firstErrorPanel = firstErrorPanel || 1
      invalidFields.push(field)
    }

    field = `b${date}`
    const b = values[field]
    if (!b) {
      error = true
      firstErrorPanel = firstErrorPanel || 2
      invalidFields.push(field)
    }

    field = `c${month}`
    const c = values[field]
    if (!c) {
      error = true
      firstErrorPanel = firstErrorPanel || 3
      invalidFields.push(field)
    }

    field = 'd'
    const d = values[field]
    if (!d) {
      error = true
      invalidFields.push(field)
    }

    if (error) {
      if (firstErrorPanel) swiper.current.scrollTo(firstErrorPanel)
      invalidateFields(invalidFields)
      return
    }

    setResult(a + b + c + d)
  }

  const updateValues = id => async value => {
    const newValues = values
    newValues[id] = parseInt(value, 10)
    setValues(newValues)

    if (!skipStorage) {
      const json = JSON.stringify({ ...newValues, d: undefined })
      await AsyncStorage.setItem(STORAGE_KEY, json).catch(console.warn)
    }
  }

  return (
    <View style={styles.container} emulateUnlessSupported={false}>
      <View style={styles.calculator}>
        <View style={styles.inputArea}>
          <TextInput
            style={[styles.dInput, dynamicStyles.d]}
            onChangeText={updateValues('d')}
            keyboardType='number-pad'
            maxLength={4}
          />
          <Button style={styles.calculate} onPress={calculate}>
            Calcular
          </Button>
        </View>
        <View style={styles.resultArea}>
          <Text style={styles.result}>{result}</Text>
        </View>
      </View>
      <Swiper
        ref={swiper}
        containerStyle={styles.valuesArea}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.activePaginationDot}
      >
        <View style={styles.panel}>
          <View style={styles.column}>
            <LabeledInput
              style={dynamicStyles.a1}
              defaultValue={values.a1}
              onChangeText={updateValues('a1')}
            >
              Segunda
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.a2}
              defaultValue={values.a2}
              onChangeText={updateValues('a2')}
            >
              Terça
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.a3}
              defaultValue={values.a3}
              onChangeText={updateValues('a3')}
            >
              Quarta
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.a4}
              defaultValue={values.a4}
              onChangeText={updateValues('a4')}
            >
              Quinta
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.a5}
              defaultValue={values.a5}
              onChangeText={updateValues('a5')}
            >
              Sexta
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.a6}
              defaultValue={values.a6}
              onChangeText={updateValues('a6')}
            >
              Sábado
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.a0}
              defaultValue={values.a0}
              onChangeText={updateValues('a0')}
            >
              Domingo
            </LabeledInput>
          </View>
        </View>
        <View style={styles.panel}>
          <View style={styles.column}>
            <LabeledInput
              small
              style={dynamicStyles.b1}
              defaultValue={values.b1}
              onChangeText={updateValues('b1')}
            >
              01
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b4}
              defaultValue={values.b4}
              onChangeText={updateValues('b4')}
            >
              04
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b7}
              defaultValue={values.b7}
              onChangeText={updateValues('b7')}
            >
              07
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b10}
              defaultValue={values.b10}
              onChangeText={updateValues('b10')}
            >
              10
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b13}
              defaultValue={values.b13}
              onChangeText={updateValues('b13')}
            >
              13
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b16}
              defaultValue={values.b16}
              onChangeText={updateValues('b16')}
            >
              16
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b19}
              defaultValue={values.b19}
              onChangeText={updateValues('b19')}
            >
              19
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b22}
              defaultValue={values.b22}
              onChangeText={updateValues('b22')}
            >
              22
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b25}
              defaultValue={values.b25}
              onChangeText={updateValues('b25')}
            >
              25
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b28}
              defaultValue={values.b28}
              onChangeText={updateValues('b28')}
            >
              28
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b31}
              defaultValue={values.b31}
              onChangeText={updateValues('b31')}
            >
              31
            </LabeledInput>
          </View>
          <View style={styles.column}>
            <LabeledInput
              small
              style={dynamicStyles.b2}
              defaultValue={values.b2}
              onChangeText={updateValues('b2')}
            >
              02
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b5}
              defaultValue={values.b5}
              onChangeText={updateValues('b5')}
            >
              05
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b8}
              defaultValue={values.b8}
              onChangeText={updateValues('b8')}
            >
              08
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b11}
              defaultValue={values.b11}
              onChangeText={updateValues('b11')}
            >
              11
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b14}
              defaultValue={values.b14}
              onChangeText={updateValues('b14')}
            >
              14
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b17}
              defaultValue={values.b17}
              onChangeText={updateValues('b17')}
            >
              17
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b20}
              defaultValue={values.b20}
              onChangeText={updateValues('b20')}
            >
              20
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b23}
              defaultValue={values.b23}
              onChangeText={updateValues('b23')}
            >
              23
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b26}
              defaultValue={values.b26}
              onChangeText={updateValues('b26')}
            >
              26
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b29}
              defaultValue={values.b29}
              onChangeText={updateValues('b29')}
            >
              29
            </LabeledInput>
            <View style={styles.space} />
          </View>
          <View style={styles.column}>
            <LabeledInput
              small
              style={dynamicStyles.b3}
              defaultValue={values.b3}
              onChangeText={updateValues('b3')}
            >
              03
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b6}
              defaultValue={values.b6}
              onChangeText={updateValues('b6')}
            >
              06
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b9}
              defaultValue={values.b9}
              onChangeText={updateValues('b9')}
            >
              09
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b12}
              defaultValue={values.b12}
              onChangeText={updateValues('b12')}
            >
              12
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b15}
              defaultValue={values.b15}
              onChangeText={updateValues('b15')}
            >
              15
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b18}
              defaultValue={values.b18}
              onChangeText={updateValues('b18')}
            >
              18
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b21}
              defaultValue={values.b21}
              onChangeText={updateValues('b21')}
            >
              21
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b24}
              defaultValue={values.b24}
              onChangeText={updateValues('b24')}
            >
              24
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b27}
              defaultValue={values.b27}
              onChangeText={updateValues('b27')}
            >
              27
            </LabeledInput>
            <LabeledInput
              small
              style={dynamicStyles.b30}
              defaultValue={values.b30}
              onChangeText={updateValues('b30')}
            >
              30
            </LabeledInput>
            <View style={styles.space} />
          </View>
        </View>
        <View style={styles.panel}>
          <View style={styles.column}>
            <LabeledInput
              style={dynamicStyles.c0}
              defaultValue={values.c0}
              onChangeText={updateValues('c0')}
            >
              Janeiro
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c1}
              defaultValue={values.c1}
              onChangeText={updateValues('c1')}
            >
              Fevereiro
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c2}
              defaultValue={values.c2}
              onChangeText={updateValues('c2')}
            >
              Março
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c3}
              defaultValue={values.c3}
              onChangeText={updateValues('c3')}
            >
              Abril
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c4}
              defaultValue={values.c4}
              onChangeText={updateValues('c4')}
            >
              Maio
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c5}
              defaultValue={values.c5}
              onChangeText={updateValues('c5')}
            >
              Junho
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c6}
              defaultValue={values.c6}
              onChangeText={updateValues('c6')}
            >
              Julho
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c7}
              defaultValue={values.c7}
              onChangeText={updateValues('c7')}
            >
              Agosto
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c8}
              defaultValue={values.c8}
              onChangeText={updateValues('c8')}
            >
              Setembro
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c9}
              defaultValue={values.c9}
              onChangeText={updateValues('c9')}
            >
              Outubro
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c10}
              defaultValue={values.c10}
              onChangeText={updateValues('c10')}
            >
              Novembro
            </LabeledInput>
            <LabeledInput
              style={dynamicStyles.c11}
              defaultValue={values.c11}
              onChangeText={updateValues('c11')}
            >
              Dezembro
            </LabeledInput>
          </View>
        </View>
      </Swiper>
    </View>
  )
}
