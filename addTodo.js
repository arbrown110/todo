import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button } from 'react-native';

export default function AddTodo() {

    const changeHandler= () => {
        
    }
    return(
        <View>
            <TextInput 
                placeholder= 'What needs to be done....'
                onChangeText={changeHandler}
            />
        </View>
    )
}