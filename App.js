
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy food', key: '1' },
    {text: 'gas car', key: '2' },
    {text: 'get ready for the week', key: '3' }
  ]);


  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>

       {/* todo form */}
        <View style={styles.list}>
          <FlatList 
          
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
});
