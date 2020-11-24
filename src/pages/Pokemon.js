import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from '../styles';

const Pokemons = props => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchText}
          placeholder="Search Pokemons"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Details', {
                      pokemon: pokemon.name,
                    })
                  }>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                        pokemon.name
                      }.png`,
                    }}
                  />
                  <Text>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;