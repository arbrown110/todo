import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo() {
    const [text, setText] = useState('');

    const changeHandler= (val) => {
        setText(val);
    }
    return(
        <View>
            <TextInput 
                style={StyleSheet.input}
                placeholder= 'What needs to be done....'
                onChangeText={changeHandler}
            />
            <Button onPress={() => console.log(text)} title= 'add task'  color= 'blue'/>   
        </View>
    )
}


const styles= StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})