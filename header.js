import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
           <Text style={style.title}> My list of Todos</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        Height: 70,
        paddingTop: 28,
        backgroundColor: 'green'

    }
});