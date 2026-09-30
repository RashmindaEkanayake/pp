/*
====================================================
REACT NATIVE PRACTICAL EXAM QUICK TEMPLATE
Mobile App Development - 2

Topics Covered:
1. Basic App Structure
2. About Us Screen
3. Counter App
4. Text Input
5. Button Events
6. Todo App
7. Custom Component Concept
8. Styling
9. Flexbox Layout
10. useEffect

====================================================
*/


// ================= IMPORT SECTION =================

// Import React
import React, {useState, useEffect} from 'react';


// Import React Native Components
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  Pressable
} from 'react-native';




// ===================================================
// MAIN APP FUNCTION
// ===================================================


export default function App(){



// ===================================================
// useState EXAMPLES
// ===================================================


// Example 1:
// Store counter value

const [count,setCount] = useState(0);



// Example 2:
// Store TextInput value

const [name,setName] = useState('');



// Example 3:
// Store Todo List

const [task,setTask] = useState('');

const [todos,setTodos] = useState([]);






// ===================================================
// useEffect EXAMPLE
// ===================================================


// Runs after component loads

useEffect(()=>{

  console.log("Application Started");


},[]);








// ===================================================
// BUTTON FUNCTIONS
// ===================================================


// Counter Increase Function

const increase = ()=>{

  setCount(count + 1);

};




// Button Alert Function

const buttonClick = ()=>{

  Alert.alert("Button Pressed");

};




// Add Todo Function

const addTask = ()=>{


  if(task!=""){


    // Add new task into array

    setTodos([...todos,task]);


    // Clear input box

    setTask('');


  }


};








// ===================================================
// USER INTERFACE
// ===================================================


return(


<View style={styles.container}>


{/* ============================
ABOUT US SCREEN EXAMPLE

Use this for profile questions

============================ */}


<Text style={styles.title}>

Student Profile

</Text>


<Text>

Name: John

</Text>


<Text>

Address: Colombo

</Text>


<Text>

Course: IT

</Text>


<Text>

Email: john@gmail.com

</Text>






{/* ============================
COUNTER APP EXAMPLE

Question:
Create Counter Application

============================ */}



<Text style={styles.title}>

Counter: {count}

</Text>



<Button

title="Increase"

onPress={increase}

/>







{/* ============================
TEXT INPUT EXAMPLE

Question:
Display entered text

============================ */}



<TextInput


style={styles.input}


placeholder="Enter Your Name"


value={name}


onChangeText={setName}


/>



<Text>

You typed: {name}

</Text>







{/* ============================
BUTTON EVENT EXAMPLE

============================ */}



<Button

title="Click Me"

onPress={buttonClick}

/>







{/* ============================
TODO APP EXAMPLE

Question:
Create Todo List

============================ */}



<Text style={styles.title}>

Todo List

</Text>




<TextInput


style={styles.input}


placeholder="Enter Task"


value={task}


onChangeText={setTask}


/>



<Button

title="Add Task"

onPress={addTask}

/>





{/* Display Todo Items */}

{

todos.map((item,index)=>(


<Text key={index}>

{index+1}. {item}

</Text>


))


}






{/* ============================
CUSTOM COMPONENT EXAMPLE

Normally create separate file

CustomButton.js

============================ */}


<CustomButton

title="Submit"

/>





</View>


);


}









// ===================================================
// CUSTOM COMPONENT
// ===================================================


// Reusable Button Component


function CustomButton({title}){


return(


<Pressable>


<Text>

{title}

</Text>


</Pressable>


);


}









// ===================================================
// STYLING SECTION
// ===================================================



const styles = StyleSheet.create({



// Main container

container:{


flex:1,


padding:20,


justifyContent:'center',


alignItems:'center'


},





// Title style

title:{


fontSize:25,


fontWeight:'bold',


margin:10


},






// Input box style

input:{


borderWidth:1,


width:'80%',


padding:10,


margin:10


}




});