import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const Home = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Open Movie Database</Text>
            <Image style={styles.logo} source={{uri: 'http://clipart-library.com/images/BigKxX5jT.png'}}/>
            <Button title="START SEARCH" onPress={() => props.navigation.navigate('Search')} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    logo: {
        width: 50,
        height: 50,
        margin: 20,
        padding: 30
    }
});

export default Home;