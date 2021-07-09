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
        paddingTop: 50,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'green',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'blue',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'violet',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'gold',
        padding: 10,
    },        
    
});


