import * as React from 'react';
import {
  Appbar,
  Avatar,
  BottomNavigation,
  Button,
  Card,
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from 'react-native-paper';
import Layout from './src/components/Layout/Layout';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FilesScreen from './src/screens/FilesScreen/FilesScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import 'react-native-gesture-handler';
import BottomNav from './src/components/BottomNav/BottomNav';
import FilterFiles from './src/components/FilterFiles/FilterFiles';
import FilesDetailsScreen from './src/screens/FilesDetailsScreen/FilesDetailsScreen';
import FilesStackNavigator from './src/navigation/FilesStackNavigator';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'yellow',
  },
};

export default function App() {
  const [index, setIndex] = React.useState(0);

  const routes = [
    {
      key: 'files',
      title: 'My Files',
      focusedIcon: 'file',
      unfocusedIcon: 'file-outline',
    },
    {
      key: 'profile',
      title: 'Settings',
      focusedIcon: 'cog',
      unfocusedIcon: 'cog-outline',
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    files: FilesStackNavigator,
    profile: ProfileScreen,
  });

  const handleIndexChange = newIndex => {
    setIndex(newIndex);
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={handleIndexChange}
          renderScene={renderScene}
        />
      </NavigationContainer>
    </PaperProvider>
  );
}
