/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Router,
  Modal,
  Reducer,
  ActionConst,
  Actions
} from 'react-native-router-flux';

import Event from "./Containers/Event.js"
import Events from "./Containers/Events.js"
import Profile from "./Containers/Profile.js"
import QrCode from "./Containers/QrCode.js"
import SignUp from "./Containers/SignUp.js"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  onBack() {
    Actions.pop();
    setTimeout(() => {
      Actions.refresh({name:'events'});
      console.log("zzzz");
    }, 10);
  }
  render() {
    return (
      <Router>
       <Scene key="root">
         <Scene initial key="signup" component={SignUp}  hideNavBar/>
         <Scene key="event" component={Event} title="Event" onBack={() => this.onBack()} onLeft={() => Actions.pop({refresh: {key: 'events'}})}/>
         <Scene key="profile" component={Profile} title="Profile"/>
         <Scene key="events" component={Events} titleStyle={{alignSelf: 'center'}} title="Events" onRight={() => Actions.qrcode()} rightTitle={' Scan'} onLeft={() => Actions.profile()} leftTitle={'Profile '}/>
         <Scene key="qrcode" component={QrCode} title="Qr Code"/>
       </Scene>
     </Router>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
