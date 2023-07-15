import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
const FilesDetailsScreen = ({route}) => {
  const {title} = route.params;

  return (
    <>
      <View
        accessibilityHint="asdasdasd"
        accessibilityLabel="asdasdasdsad"
        style={styles.container}>
        <Text style={styles.text}>Details of my File</Text>
      </View>
    </>
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
