import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`the count value is ${count}`)
        return () => {
            console.log('clean up')
        }
    },[count]) 
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

/*
useEffect(() => {
        console.log(`the count value is ${count}`)
    }) 
    the code repeats every time the component rerenders, we can modify the code so that it runs only when the count value changes: 
    useEffect(() => {
        console.log(`the count value is ${count}`)
    },[count])

    what effects with clean up do? 
    useEffect(() => {
        console.log(`the count value is ${count}`)
        return () => {
            console.log('clean up')
        }
    },[count]) 
    the clean up code will run when the component unmounts, what's clean up code? 
    clean up code is code that runs when the component unmounts.
    
    why do we clean up? 
    we clean up to prevent memory leaks, memory leaks occur when we have unused data in memory, 
    and this unused data can cause our app to slow down or even crash.

    what are side effects?
    side effects are anything that affect the outside world, 
    for example, changing the state of a component is a side effect,
    because it changes the outside world, and it changes the state of the component.

*/