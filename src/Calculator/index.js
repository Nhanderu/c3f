import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import LabeledInput from '../LabeledInput';
import Button from '../Button';

import styles from './styles';

const ASYNC_STORAGE_KEY = 'values';

export default () => {
  const [values, setValues] = useState({});
  const [result, setResult] = useState('');
  const [dynamicStyles, setDynamicStyles] = useState({
    buttonA: styles.panelButtonActive,
    buttonB: styles.panelButton,
    buttonC: styles.panelButton,
    panelA: styles.panelActive,
    panelB: styles.panel,
    panelC: styles.panel,
  });

  useEffect(() => {
    AsyncStorage.getItem(ASYNC_STORAGE_KEY)
      .catch((e) => console.warn(e))
      .then((raw) => raw && setValues(JSON.parse(raw)));
  }, []);

  const calculate = () => {
    const now = new Date();
    const day = now.getDay();
    const date = now.getDate();
    const month = now.getMonth();

    const a = values[`a${day}`];
    const b = values[`b${date}`];
    const c = values[`c${month}`];
    const d = values.d;

    let newResult = a + b + c + d;
    if (isNaN(newResult)) {
      newResult = 'erro';
    }

    setResult(newResult);
  };

  const updateValues = (id) => async (value) => {
    const newValues = values;
    newValues[id] = parseInt(value, 10);

    setValues(newValues);

    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(newValues));
    } catch (e) {
      console.warn(e);
    }
  };

  const changePanel = (id) => () => {
    const newDynamicStyles = {
      panelA: styles.panel,
      panelB: styles.panel,
      panelC: styles.panel,
      buttonA: styles.panelButton,
      buttonB: styles.panelButton,
      buttonC: styles.panelButton,
    };

    id = id.toUpperCase();
    newDynamicStyles[`panel${id}`] = styles.panelActive;
    newDynamicStyles[`button${id}`] = styles.panelButtonActive;

    setDynamicStyles(newDynamicStyles);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.space} />
        <View style={styles.inputArea}>
          <TextInput
            style={styles.dInput}
            onChangeText={updateValues('d')}
            keyboardType="number-pad"
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
      <View style={styles.valuesArea}>
        <View style={styles.panelsMenu}>
          <Button style={dynamicStyles.buttonA} onPress={changePanel('a')}>
            a
          </Button>
          <Button style={dynamicStyles.buttonB} onPress={changePanel('b')}>
            b
          </Button>
          <Button style={dynamicStyles.buttonC} onPress={changePanel('c')}>
            c
          </Button>
        </View>
        <View style={styles.panelsArea}>
          <View style={dynamicStyles.panelA}>
            <View style={styles.column}>
              <LabeledInput
                defaultValue={values.a1}
                onChangeText={updateValues('a1')}>
                Segunda
              </LabeledInput>
              <LabeledInput
                defaultValue={values.a2}
                onChangeText={updateValues('a2')}>
                Terça
              </LabeledInput>
              <LabeledInput
                defaultValue={values.a3}
                onChangeText={updateValues('a3')}>
                Quarta
              </LabeledInput>
              <LabeledInput
                defaultValue={values.a4}
                onChangeText={updateValues('a4')}>
                Quinta
              </LabeledInput>
              <LabeledInput
                defaultValue={values.a5}
                onChangeText={updateValues('a5')}>
                Sexta
              </LabeledInput>
              <LabeledInput
                defaultValue={values.a6}
                onChangeText={updateValues('a6')}>
                Sábado
              </LabeledInput>
              <LabeledInput
                defaultValue={values.a0}
                onChangeText={updateValues('a0')}>
                Domingo
              </LabeledInput>
            </View>
          </View>
          <View style={dynamicStyles.panelB}>
            <View style={styles.column}>
              <LabeledInput
                small
                defaultValue={values.b1}
                onChangeText={updateValues('b1')}>
                01
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b4}
                onChangeText={updateValues('b4')}>
                04
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b7}
                onChangeText={updateValues('b7')}>
                07
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b10}
                onChangeText={updateValues('b10')}>
                10
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b13}
                onChangeText={updateValues('b13')}>
                13
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b16}
                onChangeText={updateValues('b16')}>
                16
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b19}
                onChangeText={updateValues('b19')}>
                19
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b22}
                onChangeText={updateValues('b22')}>
                22
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b25}
                onChangeText={updateValues('b25')}>
                25
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b28}
                onChangeText={updateValues('b28')}>
                28
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b31}
                onChangeText={updateValues('b31')}>
                31
              </LabeledInput>
            </View>
            <View style={styles.column}>
              <LabeledInput
                small
                defaultValue={values.b2}
                onChangeText={updateValues('b2')}>
                02
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b5}
                onChangeText={updateValues('b5')}>
                05
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b8}
                onChangeText={updateValues('b8')}>
                08
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b11}
                onChangeText={updateValues('b11')}>
                11
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b14}
                onChangeText={updateValues('b14')}>
                14
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b17}
                onChangeText={updateValues('b17')}>
                17
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b20}
                onChangeText={updateValues('b20')}>
                20
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b23}
                onChangeText={updateValues('b23')}>
                23
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b26}
                onChangeText={updateValues('b26')}>
                26
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b29}
                onChangeText={updateValues('b29')}>
                29
              </LabeledInput>
              <View style={styles.space} />
            </View>
            <View style={styles.column}>
              <LabeledInput
                small
                defaultValue={values.b3}
                onChangeText={updateValues('b3')}>
                03
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b6}
                onChangeText={updateValues('b6')}>
                06
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b9}
                onChangeText={updateValues('b9')}>
                09
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b12}
                onChangeText={updateValues('b12')}>
                12
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b15}
                onChangeText={updateValues('b15')}>
                15
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b18}
                onChangeText={updateValues('b18')}>
                18
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b21}
                onChangeText={updateValues('b21')}>
                21
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b24}
                onChangeText={updateValues('b24')}>
                24
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b27}
                onChangeText={updateValues('b27')}>
                27
              </LabeledInput>
              <LabeledInput
                small
                defaultValue={values.b30}
                onChangeText={updateValues('b30')}>
                30
              </LabeledInput>
              <View style={styles.space} />
            </View>
          </View>
          <View style={dynamicStyles.panelC}>
            <View style={styles.column}>
              <LabeledInput
                defaultValue={values.c0}
                onChangeText={updateValues('c0')}>
                Janeiro
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c1}
                onChangeText={updateValues('c1')}>
                Fevereiro
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c2}
                onChangeText={updateValues('c2')}>
                Março
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c3}
                onChangeText={updateValues('c3')}>
                Abril
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c4}
                onChangeText={updateValues('c4')}>
                Maio
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c5}
                onChangeText={updateValues('c5')}>
                Junho
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c6}
                onChangeText={updateValues('c6')}>
                Julho
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c7}
                onChangeText={updateValues('c7')}>
                Agosto
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c8}
                onChangeText={updateValues('c8')}>
                Setembro
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c9}
                onChangeText={updateValues('c9')}>
                Outubro
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c10}
                onChangeText={updateValues('c10')}>
                Novembro
              </LabeledInput>
              <LabeledInput
                defaultValue={values.c11}
                onChangeText={updateValues('c11')}>
                Dezembro
              </LabeledInput>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
