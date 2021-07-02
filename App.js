
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './header';
import TodoItem from './todoItem';
import AddTodo from './addTodo';


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy food', key: '1' },
    {text: 'gas car', key: '2' },
    {text: 'get ready for the week', key: '3' }
  ]);


const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  });
}

const submitHandler = (text) => {

  if(text.length > 5){

    setTodos( (prevTodos) => {
      return [
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  } else{
    Alert.alert('HOLDUP!!', 'Todo must be atlest 5 characters long', [ {text: 'mmkay', onPress:() => console.log('alert close')}
    ])
  }
}

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log('leave me')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>

        <AddTodo submitHandler= {submitHandler}/>
          <View style={styles.list}>
            <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },


});
