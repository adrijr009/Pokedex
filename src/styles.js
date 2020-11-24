import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 30,
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      marginHorizontal: 20,
      marginVertical: 10,
    },
    searchBar: {
      position: 'absolute',
      marginBottom: 70,
      alignSelf:"center",
      zIndex: 1,
      marginTop: 30,
    },
    searchText: {
      height: 40,
      borderWidth: 1,
      borderColor: '#000',
      textAlign: 'center',
      width: 250,
      borderRadius: 50,
    },

    image: {
      width: 200,
      height: 200,
    },
    text: {
      fontSize: 22,
      marginBottom: 15,
    },
    indicator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  

export default styles;