import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ImageBackground, StatusBar } from "react-native";
const OurChild = (props) => {
    const {message} = props;
    return (
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default OurChild;