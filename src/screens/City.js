import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    View,
} from 'react-native'
import {Feather} from '@expo/vector-icons';

const City = () => {
    const { wrapper, cityname, country, image,text,population,container,sunsetsunrise,icon } = styles
    return (
        <SafeAreaView style={wrapper}>
            <StatusBar style="auto" />
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={image}
            >
                <View style={container}>
                    <Text style={[text,cityname]}>Helsinki</Text>
                    <Text style={[text,country]}>Finland</Text>
                    <View style={population}>
                        <Feather name="users" size={24} color="rgb(102, 0, 102)" style={icon} />
                        <Text style={text}>8000</Text>
                    </View>
                    <View style={sunsetsunrise}>
                        <Feather name="sunrise" size={24} color="rgb(102, 0, 102)" style={icon} />
                        <Text style={text}>05:00</Text>
                        <Feather name="sunset" size={24} color="rgb(102, 0, 102)" style={icon} />
                        <Text style={text}>21:00</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignSelf: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        color: 'rgb(102, 0, 102)',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 10
    },
    cityname: {
        fontSize: 30, // Increase the font size
        fontWeight: 'bold', // Add a font weight
    },
    country: {
        fontSize: 25,
    },
    population: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    sunsetsunrise: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
})
export default City
