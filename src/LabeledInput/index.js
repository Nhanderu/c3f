import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default ({ style, children, onChangeText }) => {
    console.log(style.input.width)
    return (
        <View style={style.row}>
        <Text style={style.label}>{children}</Text>
        <TextInput style={style.input} onChangeText={onChangeText} />
        </View>
    );
}
