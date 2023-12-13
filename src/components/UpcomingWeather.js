import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
const UpcomingWeather = () => {
    return(
        <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
            <Text>Upcoming Weather</Text>
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
export default UpcomingWeather

/*

there are differebt types of lists in react native
FlatList: for long lists of data that all have the same format, like a list of emails
SectionList: for long lists of data that are grouped into sections, like a list of emails grouped by date
VirtualizedList: for long lists of data that have different formats, like a list of emails and a list of images

*/