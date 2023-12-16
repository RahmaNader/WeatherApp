import React,{useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <View style={styles.wrapper}>
            <Text style={styles.count}>{`count: ${count}`}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count+1)}>
                <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count-1)}>
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
    count: {
        fontSize: 30,
        color: 'black',
        marginVertical: 10,
    },
})
export default Counter;