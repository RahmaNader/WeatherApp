import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Feather} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const IconText = (props) => {
    const { container, text, icon } = styles;
    const {iconName, iconColor,iconSize, bodyText,textStyle} = props;
    return (
        <View style={container}>
            <Feather name={iconName} color={iconColor} size={iconSize} style={icon} />
            <Text style={[text,textStyle]}>{bodyText}</Text>
        </View>
    )
}
IconText.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    bodyText: PropTypes.string,
    textStyle: PropTypes.object,
    iconSize: PropTypes.number,
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'rgb(102, 0, 102)',
        fontSize: 15,
        alignSelf: 'center',
    },
    icon: {
        marginRight: 10,
        marginLeft: 10,
    }
})
export default IconText