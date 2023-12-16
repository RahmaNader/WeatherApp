import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import Icon from './IconText'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: 'white' // Change the background color of the header
                },
                headerTintColor: '#660066', // Change the color of the header text
                headerTitleStyle: {
                    margin: 10,
                    fontSize: 20
                },
                headerTitleAlign: 'center',
                
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    if (route.name === 'Current') {
                        iconName = focused ? 'clock' : 'clock'
                    } else if (route.name === 'City') {
                        iconName = focused ? 'map-pin' : 'map-pin'
                    } else if (route.name === 'Upcoming') {
                        iconName = focused ? 'cloud' : 'cloud'
                    }
                    return (
                        <Icon
                            iconName={iconName}
                            iconSize={size}
                            iconColor={color}
                        />
                    )
                },
                tabBarActiveTintColor: '#660066',
                tabBarInactiveTintColor: '#ccccff',
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginBottom: 5
                },
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 65,
                    paddingTop: 10
                }
            })}
        >
            <Tab.Screen name="Current" component={CurrentWeather} />
            <Tab.Screen name="City" component={City} />
            <Tab.Screen
                name="Upcoming"
                component={UpcomingWeather}
                options={{
                    headerTitle: 'Upcoming Weather' // Change the header title when in this tab
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs
