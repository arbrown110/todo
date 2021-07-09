import React from 'react';
import {StyleSheet, Text, View } from 'react-native';



export default  function Sandbox() {
    return( 
        
        <View style={styles.container}>
             <Text style={styles.boxOne}>one</Text>
             <Text style={styles.boxTwo}>two</Text>
             <Text style={styles.boxThree}>three</Text>
             <Text style={styles.boxFour}>four</Text>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        paddingTop: 50,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'green',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'blue',
        padding: 30,
    },
    boxThree: {
        backgroundColor: 'violet',
        padding: 20,
    },
    boxFour: {
        backgroundColor: 'gold',
        padding: 40,
    },        
    
});


// using flex will take of space aka the size . making one bigger than the other