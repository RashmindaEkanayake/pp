// IMPORTS
import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  StyleSheet
} from 'react-native';


// MAIN APP
export default function App(){


  // STATE VARIABLES

  const [text, setText] = useState('');

  const [count, setCount] = useState(0);

  const [items, setItems] = useState([]);



  // FUNCTION

  const addItem = () => {

    if(text !== ''){

      setItems([...items, text]);

      setText('');

    }

  };



  // USE EFFECT

  useEffect(()=>{

    console.log("App Loaded");


    return ()=>{

      console.log("App Closed");

    };


  },[]);




  // UI

  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        React Native App
      </Text>



      {/* TEXT INPUT */}

      <TextInput

        style={styles.input}

        placeholder="Enter Text"

        value={text}

        onChangeText={setText}

      />



      {/* BUTTON */}

      <Button

        title="Add"

        onPress={addItem}

      />



      {/* COUNTER */}

      <Text>
        Count: {count}
      </Text>


      <Button

        title="Increase"

        onPress={()=>setCount(count+1)}

      />



      {/* LIST DISPLAY */}

      {

        items.map((item,index)=>(

          <Text key={index}>

            {index+1}. {item}

          </Text>

        ))

      }



      {/* CUSTOM BUTTON */}

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





// STYLES

const styles = StyleSheet.create({


  container:{

    flex:1,

    justifyContent:'center',

    alignItems:'center',

    padding:20

  },


  title:{

    fontSize:25,

    fontWeight:'bold',

    marginBottom:20

  },


  input:{

    borderWidth:1,

    width:'100%',

    padding:10,

    marginBottom:10

  }


});