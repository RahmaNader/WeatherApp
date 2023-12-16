import React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
//import CurrentWeather from './src/components/CurrentWeather';
import { StatusBar } from 'expo-status-bar';
import City from './src/screens/City';
const App = () => {
  console.log("App executed")
  return(
    <SafeAreaView style={styles.wrapper}>
      <StatusBar style="auto" />
      <City />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#ccccff',
    width: '100%', 
    height: '100%', 
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
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


a good approach is to split the code into components and screens and then import them into App.js.
screens are fully functional on their own and can be used as a standalone screen in the app,
but components are not fully functional on their own and need to be imported into a screen to be used.

*/
