import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Feather} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const IconText = (props) => {
    const { container, text, icon } = styles;
    const {iconName, iconColor, bodyText,textStyle,iconStyle} = props;
    return (
        <View style={container}>
            <Feather name={iconName} size={25} color={iconColor} style={[icon,iconStyle]} />
            <Text style={[text,textStyle]}>{bodyText}</Text>
        </View>
    )
}
IconText.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
    iconStyle: PropTypes.object,
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
        marginRight: 10,
    },
    icon: {
        marginRight: 10,
        marginLeft: 10,
    }
})
export default IconText