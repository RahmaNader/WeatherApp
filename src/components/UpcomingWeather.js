import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native';
import {Feather} from '@expo/vector-icons';

const Item = (props) => {
    const {dt_txt, min,max, condition} = props
    return(
        <View style={styles.itemcolumn}>
            <View style={styles.itemrow}>
                <Feather name="sun" size={25} color="red" />
                <Text>{dt_txt}</Text>
            </View>
            <Text>min: {min}</Text>
            <Text>max: {max}</Text>
        </View>
    )
}


const DATA = [
    {
        dt_txt: "2021-05-04 18:00:00",
        main: {
            temp_min: 15,
            temp_max: 20,
        },
        weather: [
            {
                description: "cloudy"
            }
        ]
    },
    {
        dt_txt: "2021-05-04 21:00:00",
        main: {
            temp_min: 15,
            temp_max: 20,
        },
        weather: [
            {
                description: "cloudy"
            }
        ]
    },
    {
        dt_txt: "2021-05-05 00:00:00",
        main: {
            temp_min: 15,
            temp_max: 20,
        },
        weather: [
            {
                description: "cloudy"
            }
        ]
    },
    {
        dt_txt: "2021-05-05 03:00:00",
        main: {
            temp_min: 15,
            temp_max: 20,
        },
        weather: [
            {
                description: "cloudy"
            }
        ]
    },
    {
        dt_txt: "2021-05-05 06:00:00",
        main: {
            temp_min: 10,
            temp_max: 25,
        },
        weather: [
            {
                description: "sunny"
            }
        ]
    },
    {
        dt_txt: "2021-05-05 09:00:00",
        main: {
            temp_min: 15,
            temp_max: 20,
        },
        weather: [
            {
                description: "cloudy"
            }
        ]
    },
    {
        dt_txt: "2021-05-05 12:00:00",
        main: {
            temp_min: 15,
            temp_max: 20,
        },
        weather: [
            {
                description: "cloudy"
            }
        ]
    },
    {
        dt_txt: "2021-05-05 15:00:00",
        main: {
            temp_min: 10, // Updated temp_min value
            temp_max: 25, // Updated temp_max value
        },
        weather: [
            {
                description: "Rainy" // Updated weather description
            }
        ]
    },
  ];

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item 
            condition={item.weather[0].description}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    return(
        <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
            <Text style={styles.upcoming}>Upcoming Weather</Text>
            <FlatList 
                style={styles.list}
                data={DATA}
                renderItem={renderItem}
            />
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
    upcoming: {
        fontSize: 30,
        color: 'black',
        marginVertical: 10,
    },
    list: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
    },
    itemcolumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
    itemrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
  });
export default UpcomingWeather

/*

there are differebt types of lists in react native
FlatList: for long lists of data that all have the same format, like a list of emails
SectionList: for long lists of data that are grouped into sections, like a list of emails grouped by date
VirtualizedList: for long lists of data that have different formats, like a list of emails and a list of images


what's render item:
renderItem is a function that returns a React component. It's used to render each item in a list,
and it's passed the following arguments:
item: the item to render
index: the index of the item in the list
separators: an object with the following properties: highlight, unhighlight, updateProps.
highlight: a function that can be called to highlight the item
unhighlight: a function that can be called to unhighlight the item
updateProps: a function that can be called to update the props of the item

what's keyExtractor: 
keyExtractor is a function that returns a unique key for each item in the list.

*/