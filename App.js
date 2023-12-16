import React from 'react'
import Tabs from './src/components/Taps'
import { NavigationContainer } from '@react-navigation/native'
import Counter from './src/Demonstration/Counter'
const App = () => {
    return (
       <Counter />
    )
}

export default App

/*
 <NavigationContainer>
            <Tabs />
        </NavigationContainer>
export default function App() {
  console.log("App executed")
  const message = "Hello world"
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


a good approach is to split the code into components and screens and then import them into App.js.
screens are fully functional on their own and can be used as a standalone screen in the app,
but components are not fully functional on their own and need to be imported into a screen to be used.

Navigation and stacks: 
this is how it works:
1. create a stack navigator
2. add screens to the stack navigator
3. add the stack navigator to the app
4. navigate between screens

npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer
npx expo install react-native-screens react-native-safe-area-context 
react navigation for expo installation guide: https://reactnavigation.org/docs/getting-started/
how the navigation between screens occur(the transition between screens) is handled by the react navigation library,
but the actual screens are still created by us, the developers, and we can still use the same code we have been using to create screens.
we need to setup the navigation area in App.js, and then we can use the navigation prop in our screens to navigate between screens,
and we can use the navigation prop in our components to navigate between screens.
How to setup the navigation area in App.js:
1. import the navigation container from react navigation native
2. import the stack navigator from react navigation stack
3. import the screens we want to use
4. create the stack navigator
5. add the screens to the stack navigator
6. add the stack navigator to the navigation container
7. export the navigation container
How to use the navigation prop in our screens:
1. import the navigation prop from react navigation
2. use the navigation prop to navigate between screens
How to use the navigation prop in our components:
1. import the navigation prop from react navigation
2. use the navigation prop to navigate between screens
How to navigate between screens:
1. use the navigation prop to navigate between screens
How to add a bottom tab navigator:
1. import the bottom tab navigator from react navigation bottom tabs
2. import the screens we want to use
3. create the bottom tab navigator
4. add the screens to the bottom tab navigator
5. add the bottom tab navigator to the stack navigator

*/
