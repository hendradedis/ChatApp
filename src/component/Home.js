import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux'


class Home extends React.Component {
    state ={
        name:'',
    }
    render() {
        return(
            <View>
                <Text style={styles.title} >
                    Enter Your Name : 
                </Text>
                <TextInput style={styles.nameInput}
                    placeHolder='Type your Name'
                    onChangeText={(text) =>{
                        this.setState({
                            name: text,
                        })

                    }}
                    value={this.state.name}
                />
                <TouchableOpacity onPress={() => {
                    //Alert.alert(this.state.name)
                        Actions.chat({
                             data : {
                                 name:this.state.name
                            }
                        })
                    }}>
                    <Text style={styles.button1}>
                        Kirim
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 24,
    },
    nameInput:{
        padding: 10,
        height:40,
        borderWidth: 2,
        borderColor:'black',
        margin:20,
    },
    button1 :{
        marginLeft: 20,
        fontSize :22,

    }
})

export default Home;