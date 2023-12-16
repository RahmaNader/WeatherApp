//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Icon from '../components/IconText'
import { WeatherType } from '../utilities/WeatherType';
const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highlowwrapper, highlow, bodywrapper, description, message } = styles
  return(
    <SafeAreaView style={wrapper}>
    <View style={container}>
      <Icon iconName="sun" iconColor="yellow" iconSize={150} bodyText="" textStyle={temp} />
      <Text style={temp}>17</Text>
      <Text style={feels}>Feels Like: 20</Text>
      <View style={highlowwrapper}>
        <Text style={highlow}>High: 25</Text>
        <Text style={highlow}>Low: 18</Text>
      </View>
      </View>
      <View style={bodywrapper}>
        <Text style={description}>Its sunny</Text>
        <Text style={message}>{WeatherType['Thunderstorm'].message}</Text>
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
  },
  temp: {
    fontSize: 50,
    color: 'rgb(102, 0, 102)',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  feels: {
    fontSize: 25,
    color: 'black'
  },
  highlowwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  highlow: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
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
    color: 'rgb(102, 0, 102)',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 15,
    color: 'black'
  }
})
export default CurrentWeather
