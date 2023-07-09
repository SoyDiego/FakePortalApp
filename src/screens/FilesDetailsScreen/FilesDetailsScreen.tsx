import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const FilesDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details of my File</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default FilesDetailsScreen;
