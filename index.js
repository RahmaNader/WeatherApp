import { AppRegistry } from 'react-native';
import App from './App'; // Assuming App.js is your main component
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root') || document.getElementById('app-root'),
});
