// =====================================================
// REACT NATIVE PRACTICAL EXAM MASTER TEMPLATE
// =====================================================


// =======================
// 1. IMPORTS
// =======================

// React is required for every React Native app
// useState -> store changing data
// useEffect -> run code when app loads/updates

import React, {useState, useEffect} from 'react';


// Import required React Native components

import {
  View,        // Container (like a box)
  Text,        // Display text
  TextInput,   // User input field
  Button,      // Click button
  Pressable,   // Custom clickable component
  StyleSheet   // Styling
} from 'react-native';





// =====================================================
// 2. MAIN COMPONENT
// =====================================================

export default function App(){



// =====================================================
// 3. useState
// =====================================================


// USE WHEN:
// You need to store data that changes on screen


// Example:
// Counter value

const [count, setCount] = useState(0);


// Example:
// TextInput value

const [text, setText] = useState('');


// Example:
// Todo list / array data

const [items, setItems] = useState([]);






// =====================================================
// 4. FUNCTIONS
// =====================================================


// USE WHEN:
// Button press should perform an action



// Example: Increase counter

const increase = () => {

  setCount(count + 1);

};





// Example: Add item to list

const addItem = () => {


  // Check empty input

  if(text !== ''){


    // Add new value to existing array

    setItems([...items, text]);


    // Clear input box

    setText('');

  }


};





// =====================================================
// 5. useEffect
// =====================================================


// USE WHEN:
// Need to run code when component loads


useEffect(()=>{


  console.log("Application Started");



},[]);


// [] means:
// Run only one time when app opens





// =====================================================
// 6. RETURN UI DESIGN
// =====================================================


return (

<View style={styles.container}>


{/* 
TEXT DISPLAY
Use for headings, labels, messages
*/}

<Text style={styles.title}>

React Native App

</Text>





{/* 
TEXT INPUT

Use for:
- Login username
- Search
- Todo input
- Forms

*/}


<TextInput


style={styles.input}


placeholder="Enter something"


// Display current state value

value={text}


// Update state when user types

onChangeText={setText}


/>






{/*

BUTTON

Use when user clicks something

*/}


<Button


title="Add"


onPress={addItem}


/>






{/*

COUNTER EXAMPLE

Remove if not needed

*/}


<Text>

Count: {count}

</Text>


<Button

title="Increase"

onPress={increase}

/>







{/*

DISPLAY ARRAY DATA

Use for:
- Todo list
- Notes list
- Products

map() converts array items into Text components

*/}



{

items.map((item,index)=>(


<Text key={index}>


{index+1}. {item}


</Text>


))


}







{/*

CUSTOM CLICKABLE TEXT

Use Pressable for custom buttons

*/}


<Pressable


onPress={()=>alert("Clicked")}


>


<Text>

Click Me

</Text>


</Pressable>






</View>

);


}





// =====================================================
// 7. STYLING
// =====================================================


const styles = StyleSheet.create({



// Main screen style

container:{


  // Take full screen

  flex:1,


  // Vertical alignment

  justifyContent:'center',


  // Horizontal alignment

  alignItems:'center',


  // Space inside screen

  padding:20


},




// Heading style

title:{


fontSize:25,


fontWeight:'bold',


marginBottom:20


},




// Input box style

input:{


borderWidth:1,


width:'100%',


padding:10,


marginBottom:10


}



});