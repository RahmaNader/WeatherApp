import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, ImageBackground,StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons';
import upcomingBackground from '../../assets/upcoming-background.jpg';
import PropTypes from 'prop-types';



const Item = (props) => {
    const {dt_txt, min,max, condition} = props
    return(
        <View style={styles.itemcolumn}>
            <View style={styles.itemrow}>
                <Feather style={styles.itemfeather} name="sun" size={25} color="red" />
                <Text>{dt_txt}</Text>
            </View>
            <View style={styles.minmax}>
            <Text>Minimum Temprature: {min}</Text>
            <Text>Maximum Temprature: {max}</Text>
            </View>
        </View>
    )
}

Item.propTypes = {
    dt_txt: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
  };

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
    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar style="auto" />
            <ImageBackground source={upcomingBackground} style={styles.image} >
            <View style={styles.container}>
                <Text style={styles.upcoming}>Upcoming Weather</Text>
                <FlatList
                    style={styles.list}
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#ccccff', 
        marginTop: StatusBar.currentHeight || 0,
        width: '100%', 
        height: '100%',
      },
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    upcoming: {
        fontSize: 30,
        color: 'white',
        marginVertical: 10,
    },
    list: {
        marginVertical: 10,
        padding: 10,
    },
    itemcolumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
    itemrow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
    itemfeather: {
        marginRight: 10,
    },
    minmax: {
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
    image: {
        flex: 1,
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

it's a standard practice to provide the same image in three sizes in order to support different screen sizes.

<Image source={upcomingBackground}
                style={styles.image} />
image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

*/