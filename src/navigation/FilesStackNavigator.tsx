import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import FilesDetailsScreen from '../screens/FilesDetailsScreen/FilesDetailsScreen';
import FilesScreen from '../screens/FilesScreen/FilesScreen';

const Stack = createStackNavigator();

const FilesStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Files">
      <Stack.Screen
        name="Files"
        component={FilesScreen}
        options={{title: 'Files'}}
      />
      <Stack.Screen
        name="FilesDetails"
        component={FilesDetailsScreen}
        options={{title: 'Details Files'}}
      />
    </Stack.Navigator>
  );
};

export default FilesStackNavigator;
