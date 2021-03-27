import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

const BaseUrl = 'http://www.omdbapi.com/?apikey=c12b1fd5&i=';

const MovieDetails = props => {

    const {route} = props;
    const {id} = route.params;
    const itemUrl = BaseUrl + id;
    const [movie, setMovie] = useState({});

    const getMovie = async () => {

        const movieJson = await fetch(itemUrl);

        movieJson.json().then(response => setMovie(response));

    }

    getMovie();

    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.centeredContent}>
                    <Image style={styles.poster} source={{uri: movie['Poster']}}/>
                    <Text style = {styles.title}>{movie['Title']}</Text>
                </View>
                <View style = {styles.description}>
                  <Text style = {styles.text}>Runtime: {movie['Runtime']}</Text>
                  <Text style = {styles.text}>Genre: {movie['Genre']}</Text>
                  <Text style = {styles.text}>Released: {movie['Released']}</Text>
                  <Text style = {styles.text}>Director: {movie['Director']}</Text>
                  <Text style = {styles.text}>Plot: {movie['Plot']}</Text>
                  <Text style = {styles.text}>Language: {movie['Language']}</Text>
                </View>
            </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 15,
        marginBottom: 5
    },
    centeredContent: {
        alignItems: 'center',
        height: '50%'
    },
    poster: {
        margin: 30,
        height: '80%',
        width: '46%'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21,
        marginBottom: 15
    },
    description: {
        marginTop: 50
    }
});

export default MovieDetails;