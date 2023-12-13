import React from 'react';
import { StyleSheet, View,SafeAreaView } from 'react-native';
//import CurrentWeather from './src/components/CurrentWeather';
import { StatusBar } from 'expo-status-bar';
import UpcomingWeather from './src/components/UpcomingWeather';
const App = () => {
  console.log("App executed")
  return(
    <SafeAreaView style={styles.wrapper}>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <UpcomingWeather />
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
    width: '100%', // set width to match parent
    height: '100%', // set height to match parent
  },
  container: {
    flex: 1, //means the view should take up the entire screen because it is the only child of the SafeAreaView
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 10,
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

*/
