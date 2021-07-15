import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {  MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler })  {
    return(
       <TouchableOpacity onPress={() => pressHandler(item.key)}>
           <view style={styles.item}>
            <MaterialIcons name='delete'/>
           <Text >
               {item.text}
           </Text>
           </view>
       </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 18,
        marginTop: 18,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 10
    }
})