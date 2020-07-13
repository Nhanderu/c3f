import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import LabeledInput from '../LabeledInput';
import Button from '../Button';

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

    const calculate = () => {

        const now = new Date();
        const day = now.getDay();
        const date = now.getDate();
        const month = now.getMonth();

        const a = values[`a-${day}`];
        const b = values[`b-${date}`];
        const c = values[`c-${month}`];
        const d = values.d;

        let newResult = a + b + c + d;
        if (isNaN(newResult)) newResult = 'erro';

        setResult(newResult);
    }

    const updateValues = id => value => {

        let newValues = values;
        newValues[id] = parseInt(value.substr(-4), 10);

        setValues(newValues);
    }

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
    }

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
                            <LabeledInput onChangeText={updateValues('a-1')}>Segunda</LabeledInput>
                            <LabeledInput onChangeText={updateValues('a-2')}>Terça</LabeledInput>
                            <LabeledInput onChangeText={updateValues('a-3')}>Quarta</LabeledInput>
                            <LabeledInput onChangeText={updateValues('a-4')}>Quinta</LabeledInput>
                            <LabeledInput onChangeText={updateValues('a-5')}>Sexta</LabeledInput>
                            <LabeledInput onChangeText={updateValues('a-6')}>Sábado</LabeledInput>
                            <LabeledInput onChangeText={updateValues('a-0')}>Domingo</LabeledInput>
                        </View>
                    </View>
                    <View id='panel-b' style={dynamicStyles.panelB}>
                        <View style={styles.column}>
                            <LabeledInput small onChangeText={updateValues('b-1')}>01</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-4')}>04</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-7')}>07</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-10')}>10</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-13')}>13</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-16')}>16</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-19')}>19</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-22')}>22</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-25')}>25</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-28')}>28</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-31')}>31</LabeledInput>
                        </View>
                        <View style={styles.column}>
                            <LabeledInput small onChangeText={updateValues('b-2')}>02</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-5')}>05</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-8')}>08</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-11')}>11</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-14')}>14</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-17')}>17</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-20')}>20</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-23')}>23</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-26')}>26</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-29')}>29</LabeledInput>
                            <View style={styles.space} />
                        </View>
                        <View style={styles.column}>
                            <LabeledInput small onChangeText={updateValues('b-3')}>03</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-6')}>06</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-9')}>09</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-12')}>12</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-15')}>15</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-18')}>18</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-21')}>21</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-24')}>24</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-27')}>27</LabeledInput>
                            <LabeledInput small onChangeText={updateValues('b-30')}>30</LabeledInput>
                            <View style={styles.space} />
                        </View>
                    </View>
                    <View style={dynamicStyles.panelC}>
                        <View style={styles.column}>
                            <LabeledInput onChangeText={updateValues('c-0')}>Janeiro</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-1')}>Fevereiro</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-2')}>Março</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-3')}>Abril</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-4')}>Maio</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-5')}>Junho</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-6')}>Julho</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-7')}>Agosto</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-8')}>Setembro</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-9')}>Outubro</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-10')}>Novembro</LabeledInput>
                            <LabeledInput onChangeText={updateValues('c-11')}>Dezembro</LabeledInput>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

};
