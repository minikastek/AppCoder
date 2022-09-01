import { useState } from 'react';
import { FlatList, Button,TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [ToDo, setToDo] = useState()

  const [ToDos, setToDos] = useState([{key: 'nico'}, {key: 'Luis'}, {key: 'Alberto'}])


  const addNewTodo = () => {
    setToDos(ToDo, ...ToDos)
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput  
          placeholder='New Task' 
          style={styles.input}
          onChange={newTodo => setToDo(newTodo)}
        />
        <Button title='add' style={styles.buttonAdd} onPress={() => addNewTodo} color='#adc178'/> 
      </View>

      <View>
      <FlatList
        data={ToDos}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  inputContainer:{
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  input: {
    borderBottomColor: '#BCEBCB',
    borderBottomWidth: 1,
    height: 45,
    width: '75%'
  },

  buttonAdd: {
    marginTop: '10%'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#8f069c'
  },

});
