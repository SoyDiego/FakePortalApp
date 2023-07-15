import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import FilesDetailsScreen from '../screens/FilesDetailsScreen/FilesDetailsScreen';
import FilesScreen from '../screens/FilesScreen/FilesScreen';
import TopNavbar from '../components/Header/TopNavbar';

const Stack = createStackNavigator();

const FilesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Files"
      screenOptions={{header: TopNavbar}}>
      <Stack.Screen name="Files"
component={FilesScreen} />
      <Stack.Screen name="FilesDetails"
component={FilesDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FilesStackNavigator;
