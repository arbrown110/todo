
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
  setTodos( (prevTodos) => {
    return [
      {text: text, key: Math.random().toString() },
      ...prevTodos
    ]
  })
}

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>

       <AddTodo />
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
