import { AppRegistry } from 'react-native';
import App from './App';
import codePush from 'react-native-code-push';
import { name as appName } from './app.json';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

AppRegistry.registerComponent(appName, () => codePush(codePushOptions)(App));
