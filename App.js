//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';

const App = () => {
  return(
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
      <Feather name="sun" size={75} color="yellow" />
      <Text style={styles.temp}>17</Text>
      <Text style={styles.feels}>Feels Like</Text>
      <View style={styles.highlowwrapper}>
        <Text style={styles.highlow}>High: 8</Text>
        <Text style={styles.highlow}>Low: 6</Text>
      </View>
      </View>
      <View style={styles.bodywrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#ccccff',
  },
  container: {
    flex: 1, //means the view should take up the entire screen because it is the only child of the SafeAreaView
    alignItems: 'center', 
    justifyContent: 'center',
    width: '95%', // set width to match parent
    height: '100%', // set height to match parent
    padding: 10,
  },
  temp: {
    fontSize: 30,
    color: 'black',
    marginVertical: 10,
  },
  feels: {
    fontSize: 25,
    color: 'black'
  },
  highlowwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%'
  },
  highlow: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // This is fully transparent white
    padding: 10,
    borderRadius: 10,
  },
  bodywrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingVertical:10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '95%', // set width to match parent
  },
  description: {
    fontSize: 20,
    color: 'black'
  },
  message: {
    fontSize: 15,
    color: 'black'
  }
})
export default App

/*
export default function App() {
  console.log("App executed")
  const message = "Hello world"
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/
