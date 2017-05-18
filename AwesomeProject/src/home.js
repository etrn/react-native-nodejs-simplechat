import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class Home extends React.Component {
    render() {
        state = {
            name: '',
        };

        return (
            <View>
                <Text style={styles.title}> 
                    Name: 
                </Text>
                <TextInput
                style={styles.nameInput}
                placeholder='John Snow'
                onChangeText={(text) => {
                    this.setState({
                        name: text,
                    });
                }}
                value={this.state.name}
                />
                <TouchableOpacity
                onPress={()=>{
                    alert(this.state.name)
                }}
                >
                    <Text style={styles.buttonText}>
                        Next
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
        fontSize: 20,
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20,
    }
})

export default Home;