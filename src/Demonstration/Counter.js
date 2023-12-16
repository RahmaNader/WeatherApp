import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const Counter = () => {
    let count = 0;
    return(
        <View style={styles.wrapper}>
            <Text>{'count: ${count} '}</Text>
            <TouchableOpacity style={styles.button} onPress={() => count++}>
                <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => count--}>
                <Text style={styles.buttonText}>Decrease</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccccff',
    },
    button: {
        backgroundColor: 'rgb(102, 0, 102)',
        padding: 10,
        borderRadius: 20,
        margin: 10,
        width: 100,

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    },
})
export default Counter;