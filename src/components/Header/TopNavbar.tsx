import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';

const TopNavbar = ({route}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header>
      {route.name !== 'Files' && <Appbar.BackAction onPress={handleGoBack} />}
      <Appbar.Content title={route.params?.title || 'Organization name'} />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default TopNavbar;
