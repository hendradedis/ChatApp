import React from 'react';
import {View,Text,} from 'react-native';


class Chat extends React.Component {
   

    render() {
       // console.log("saas"this.props)
        return(
            <View>
                <Text>
                    Hellow {this.props.name}
                </Text>
            </View>
        );
    }
}
    Chat.defaultProps ={
        name : 'jhon',
    };

    // Chat.prototype ={
    //      name: React.Prototype.string,
    // }

export default Chat;