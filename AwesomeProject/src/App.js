import React from 'react';
import Home from './Home'
import Chat from './Chat'

import {
    Router,
    Scene,

} from 'react-native-router-flux';

import {
    Platform
} from 'react-native';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key='root' style={{paddingTop: Platform.OS = 'ios' ? 64 : 54}}>
                    <Scene ket='home' component={Home} title='Home'/>
                    <Scene ket='chat' component={Chat} title='Chat'/>
                </Scene>
            </Router>
        )
    }
}

export default App;