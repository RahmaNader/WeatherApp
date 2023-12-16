import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../components/IconText'



const ListItem = (props) => {
    const {dt_txt, min,max, condition} = props
    const {itemcolumn, itemrow, minmax} = styles
    return(
        <View style={itemcolumn}>
            <View style={itemrow}>
            <Icon iconName="sun" iconColor="red" iconSize={25} bodyText="" />
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
    minmax: {
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 20,
    },
})