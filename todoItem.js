import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler })  {
    return(
       <TouchableOpacity onPress={() => pressHandler()}>
           <Text style={styles.item}>
               {item.text}
           </Text>
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