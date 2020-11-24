import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Pokemons from '../pages/Pokemon';
import Details from '../pages/Details';


const { Navigator, Screen } = createStackNavigator();

function Pokedex() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Pokemon" component={Pokemons} />
                <Screen name="Details" component={Details} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Pokedex;