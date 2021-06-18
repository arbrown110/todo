import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button } from 'react-native';

export default function AddTodo() {
    const [text, setText] = useState('');

    const changeHandler= (val) => {
        setText(val);
    }
    return(
        <View>
            <TextInput 
                placeholder= 'What needs to be done....'
                onChangeText={(val) => changeHandler(val)}
            />
        </View>
    )
}
