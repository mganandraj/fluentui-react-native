'use strict';

import {FluentTesterApp} from '@fluentui-react-native/tester';
import {AppRegistry} from 'react-native';

import { NativeModules } from 'react-native';

AppRegistry.registerComponent('FluentTester', () => FluentTesterApp);

console.log(NativeModules.DrawerModule);

export default FluentTesterApp;
