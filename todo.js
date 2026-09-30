import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';


export default function App() {

  // Store current input
  const [task, setTask] = useState('');

  // Store todo list
  const [todos, setTodos] = useState([]);


  // Add new task
  const addTask = () => {

    if(task.trim() !== '') {

      setTodos([...todos, task]);

      setTask('');

    }

  };


  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        My Todo List
      </Text>


      <TextInput

        style={styles.input}

        placeholder="Enter a task"

        value={task}

        onChangeText={setTask}

      />


      <Button

        title="Add Task"

        onPress={addTask}

      />


      <View style={styles.list}>

        {
          todos.map((item,index)=>(

            <Text 
              key={index}
              style={styles.todo}
            >

              {index+1}. {item}

            </Text>

          ))
        }


      </View>


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:'center'
  },


  title:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20
  },


  input:{
    borderWidth:1,
    padding:10,
    marginBottom:10
  },


  list:{
    marginTop:20
  },


  todo:{
    fontSize:18,
    marginVertical:5
  }


});