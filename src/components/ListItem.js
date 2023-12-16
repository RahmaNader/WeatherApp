import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import PropTypes from 'prop-types';



const ListItem = (props) => {
    const {dt_txt, min,max, condition} = props
    const {itemcolumn, itemrow, itemfeather, minmax} = styles
    return(
        <View style={itemcolumn}>
            <View style={itemrow}>
                <Feather style={itemfeather} name="sun" size={25} color="red" />
                <Text>{dt_txt}</Text>
            </View>
            <View style={minmax}>
            <Text>Minimum Temprature: {min}</Text>
            <Text>Maximum Temprature: {max}</Text>
            </View>
        </View>
    )
}
export default ListItem
ListItem.propTypes = {
    dt_txt: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
  };


const styles = StyleSheet.create({
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
})