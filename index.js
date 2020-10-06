import Amplify from 'aws-amplify';
import { AppRegistry } from 'react-native';

import { App } from './src/app';
import config from './aws-exports';
import { name as appName } from './app.json';

Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
