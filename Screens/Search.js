import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, FlatList, TextInput} from 'react-native';

const BaseUrl = 'http://www.omdbapi.com/?apikey=c12b1fd5&type=movie&s=';

const Search = props => {

    const [query, setQuery] = useState('');
    const [searchUrl, setSearchUrl] = useState(BaseUrl);
    const [movieList, setMovieList] = useState([]);

    const updateQuery = (newQuery) => {
        setQuery(newQuery);
    };

    useEffect(() => {
        setSearchUrl(BaseUrl + query + '&page=');
    }, [query]);

    const getResults = async () => {

        setMovieList([]);

        let validResponse = true;
        let page = 1;

        while (validResponse) {
            const movies = await fetch(searchUrl + page);
            movies.json().then(response => {
                validResponse = response['Response'] === 'True' ? true : false;
                if (validResponse && page <= 6) {
                    const currentAdditions = response['Search'];
                    setMovieList(oldArray => [...oldArray, ...currentAdditions]);
                }
            });

            page = page + 1;
        }

    };



    

    const renderItem = ({ item }) => 
        (<TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate('MovieDetails', {id: item['imdbID']})}>
            <Text style={styles.text}>{item['Title']} ({item['Year']})</Text>
        </TouchableOpacity>)
    ;

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.searchRow}>
            <TextInput style={styles.input} onSubmitEditing={ () => getResults() } onChangeText={(newQuery) => updateQuery(newQuery)} placeholder="Enter movie title..." />
            <Button style={styles.searchButton} title='SEARCH' onPress={ () => getResults() }></Button>
            </View>
            
            <FlatList renderItem={renderItem} data={movieList} />

        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        marginRight: 5,
        height: 50
    },
    row: {
        padding: 20
    },
    searchRow: {
        flexDirection: 'row'
    },
    searchButton: {
        width: '20%'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Search;