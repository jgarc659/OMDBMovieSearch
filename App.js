import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Search from './Screens/Search';
import MovieDetails from './Screens/MovieDetails';

const Stack = createStackNavigator();

const MovieAppStack = () => {
  return (<Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#fff'
        }
      }}>

        <Stack.Screen name="Home" component={Home} options={{
          title: 'Welcome!',
          headerShown: true,
        }} />
        <Stack.Screen name="Search" component={Search} options={{
          title: 'Movie Search',
          headerShown: true,
        }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
          title: 'Movie Details',
          headerShown: true,
        }} />

  </Stack.Navigator>);
};

const App = props => {
  return (
    <NavigationContainer style={styles.container}>
  
      <MovieAppStack />
  
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});

export default App;