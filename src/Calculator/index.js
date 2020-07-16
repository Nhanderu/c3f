import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import LabeledInput from '../LabeledInput';
import Button from '../Button';

const ASYNC_STORAGE_KEY = 'values';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },

    calculator: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ee6',
    },

    space: {
        flex: 1,
    },

    inputArea: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    dInput: {
        width: 120,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    calculate: {
        width: 120,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    resultArea: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    result: {
        fontSize: 40,
        textAlign: 'center',
    },

    valuesArea: {
        flex: 4,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#222',
    },

    panelsMenu: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    panelButton: {
        height: 30,
        width: 50,
        backgroundColor: 'black',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    panelButtonActive: {
        height: 30,
        width: 50,
        backgroundColor: '#ee6',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    panelsArea: {
        flex: 9,
        alignSelf: 'stretch',
    },

    panel: {
        display: 'none',
    },

    panelActive: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    column: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        marginHorizontal: 25,
    },

})

export default () => {;

    let [values, setValues] = useState({});
    const [result, setResult] = useState('');
    const [dynamicStyles, setDynamicStyles] = useState({
        buttonA: styles.panelButtonActive,
        buttonB: styles.panelButton,
        buttonC: styles.panelButton,
        panelA: styles.panelActive,
        panelB: styles.panel,
        panelC: styles.panel,
    });

    AsyncStorage
        .getItem(ASYNC_STORAGE_KEY)
        .catch(e => console.warn(e))
        .then(raw => {
            if (raw) {
                values = JSON.parse(raw);
                setValues(values);
            }
        });

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
        if (isNaN(newResult)) newResult = 'erro';

        setResult(newResult);
    };

    const updateValues = id => async value => {

        const newValues = values || {};
        newValues[id] = parseInt(value.substr(-4), 10);

        setValues(newValues);

        try {
            await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(newValues));
        } catch (e) {
            console.warn(e);
        }

    };

    const changePanel = id => () => {

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
                    <TextInput style={styles.dInput} onChangeText={updateValues('d')} />
                    <Button style={styles.calculate} onPress={calculate}>Calcular</Button>
                </View>
                <View style={styles.resultArea}>
                    <Text style={styles.result}>{result}</Text>
                </View>
            </View>
            <View style={styles.valuesArea}>
                <View style={styles.panelsMenu}>
                    <Button style={dynamicStyles.buttonA} onPress={changePanel('a')}>a</Button>
                    <Button style={dynamicStyles.buttonB} onPress={changePanel('b')}>b</Button>
                    <Button style={dynamicStyles.buttonC} onPress={changePanel('c')}>c</Button>
                </View>
                <View style={styles.panelsArea}>
                    <View style={dynamicStyles.panelA}>
                        <View style={styles.column}>
                            <LabeledInput value={values['a1']} onChangeText={updateValues('a1')}>Segunda</LabeledInput>
                            <LabeledInput value={values['a2']} onChangeText={updateValues('a2')}>Terça</LabeledInput>
                            <LabeledInput value={values['a3']} onChangeText={updateValues('a3')}>Quarta</LabeledInput>
                            <LabeledInput value={values['a4']} onChangeText={updateValues('a4')}>Quinta</LabeledInput>
                            <LabeledInput value={values['a5']} onChangeText={updateValues('a5')}>Sexta</LabeledInput>
                            <LabeledInput value={values['a6']} onChangeText={updateValues('a6')}>Sábado</LabeledInput>
                            <LabeledInput value={values['a0']} onChangeText={updateValues('a0')}>Domingo</LabeledInput>
                        </View>
                    </View>
                    <View style={dynamicStyles.panelB}>
                        <View style={styles.column}>
                            <LabeledInput small value={values['b1']} onChangeText={updateValues('b1')}>01</LabeledInput>
                            <LabeledInput small value={values['b4']} onChangeText={updateValues('b4')}>04</LabeledInput>
                            <LabeledInput small value={values['b7']} onChangeText={updateValues('b7')}>07</LabeledInput>
                            <LabeledInput small value={values['b10']} onChangeText={updateValues('b10')}>10</LabeledInput>
                            <LabeledInput small value={values['b13']} onChangeText={updateValues('b13')}>13</LabeledInput>
                            <LabeledInput small value={values['b16']} onChangeText={updateValues('b16')}>16</LabeledInput>
                            <LabeledInput small value={values['b19']} onChangeText={updateValues('b19')}>19</LabeledInput>
                            <LabeledInput small value={values['b22']} onChangeText={updateValues('b22')}>22</LabeledInput>
                            <LabeledInput small value={values['b25']} onChangeText={updateValues('b25')}>25</LabeledInput>
                            <LabeledInput small value={values['b28']} onChangeText={updateValues('b28')}>28</LabeledInput>
                            <LabeledInput small value={values['b31']} onChangeText={updateValues('b31')}>31</LabeledInput>
                        </View>
                        <View style={styles.column}>
                            <LabeledInput small value={values['b2']} onChangeText={updateValues('b2')}>02</LabeledInput>
                            <LabeledInput small value={values['b5']} onChangeText={updateValues('b5')}>05</LabeledInput>
                            <LabeledInput small value={values['b8']} onChangeText={updateValues('b8')}>08</LabeledInput>
                            <LabeledInput small value={values['b11']} onChangeText={updateValues('b11')}>11</LabeledInput>
                            <LabeledInput small value={values['b14']} onChangeText={updateValues('b14')}>14</LabeledInput>
                            <LabeledInput small value={values['b17']} onChangeText={updateValues('b17')}>17</LabeledInput>
                            <LabeledInput small value={values['b20']} onChangeText={updateValues('b20')}>20</LabeledInput>
                            <LabeledInput small value={values['b23']} onChangeText={updateValues('b23')}>23</LabeledInput>
                            <LabeledInput small value={values['b26']} onChangeText={updateValues('b26')}>26</LabeledInput>
                            <LabeledInput small value={values['b29']} onChangeText={updateValues('b29')}>29</LabeledInput>
                            <View style={styles.space} />
                        </View>
                        <View style={styles.column}>
                            <LabeledInput small value={values['b3']} onChangeText={updateValues('b3')}>03</LabeledInput>
                            <LabeledInput small value={values['b6']} onChangeText={updateValues('b6')}>06</LabeledInput>
                            <LabeledInput small value={values['b9']} onChangeText={updateValues('b9')}>09</LabeledInput>
                            <LabeledInput small value={values['b12']} onChangeText={updateValues('b12')}>12</LabeledInput>
                            <LabeledInput small value={values['b15']} onChangeText={updateValues('b15')}>15</LabeledInput>
                            <LabeledInput small value={values['b18']} onChangeText={updateValues('b18')}>18</LabeledInput>
                            <LabeledInput small value={values['b21']} onChangeText={updateValues('b21')}>21</LabeledInput>
                            <LabeledInput small value={values['b24']} onChangeText={updateValues('b24')}>24</LabeledInput>
                            <LabeledInput small value={values['b27']} onChangeText={updateValues('b27')}>27</LabeledInput>
                            <LabeledInput small value={values['b30']} onChangeText={updateValues('b30')}>30</LabeledInput>
                            <View style={styles.space} />
                        </View>
                    </View>
                    <View style={dynamicStyles.panelC}>
                        <View style={styles.column}>
                            <LabeledInput value={values['c0']} onChangeText={updateValues('c0')}>Janeiro</LabeledInput>
                            <LabeledInput value={values['c1']} onChangeText={updateValues('c1')}>Fevereiro</LabeledInput>
                            <LabeledInput value={values['c2']} onChangeText={updateValues('c2')}>Março</LabeledInput>
                            <LabeledInput value={values['c3']} onChangeText={updateValues('c3')}>Abril</LabeledInput>
                            <LabeledInput value={values['c4']} onChangeText={updateValues('c4')}>Maio</LabeledInput>
                            <LabeledInput value={values['c5']} onChangeText={updateValues('c5')}>Junho</LabeledInput>
                            <LabeledInput value={values['c6']} onChangeText={updateValues('c6')}>Julho</LabeledInput>
                            <LabeledInput value={values['c7']} onChangeText={updateValues('c7')}>Agosto</LabeledInput>
                            <LabeledInput value={values['c8']} onChangeText={updateValues('c8')}>Setembro</LabeledInput>
                            <LabeledInput value={values['c9']} onChangeText={updateValues('c9')}>Outubro</LabeledInput>
                            <LabeledInput value={values['c10']} onChangeText={updateValues('c10')}>Novembro</LabeledInput>
                            <LabeledInput value={values['c11']} onChangeText={updateValues('c11')}>Dezembro</LabeledInput>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

};
