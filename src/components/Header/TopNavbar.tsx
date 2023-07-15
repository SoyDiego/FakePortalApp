import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';

const TopNavbar = ({route}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header style={{backgroundColor: colors.onPrimaryContainer}}>
      {route.name !== 'Files' && <Appbar.BackAction onPress={handleGoBack} />}
      <Appbar.Content
        color={colors.surface}
        title={route.params?.title || 'Organization name'}
      />
      <Appbar.Action
        color={colors.surface}
        icon="calendar"
        onPress={() => {}}
      />
      <Appbar.Action color={colors.surface} icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default TopNavbar;
