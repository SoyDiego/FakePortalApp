import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Appbar, IconButton, Text} from 'react-native-paper';

const FilesScreen = ({title, navigation}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitle}>Cards Sections</Text>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('FilesDetails', {title: 'File name 1'})
        }>
        <Text style={styles.text}>I'm a CARD</Text>
      </TouchableOpacity>
      <IconButton
        icon="eye-outline"
        selected={isSelected}
        onPress={handlePress}
        mode="contained"
        rippleColor={isSelected ? 'rgb(0, 95, 175)' : 'rgb(0, 0, 0)'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },

  textTitle: {
    color: 'black',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default FilesScreen;
