import React from 'react';

import Home from './component/Home'
import Chat from './component/Chat'

import {Router, Scene} from 'react-native-router-flux';
import { Platform} from 'react-native'

class App extends React.Component{
    render(){
        return(
            <Router>
                <Scene key='root'style={{paddigTop:54}}>
                    <Scene key='home' component={Home} title='Home'/>
                    <Scene key='chat' component={Chat} title='Chat'/>
                </Scene>
            </Router>
        )
    }

}

export default App;
