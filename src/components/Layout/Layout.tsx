import React from 'react';
import {View} from 'react-native';

const Layout = ({children}) => {
  return (
    <View style={{flex: 1, marginLeft: 8, marginRight: 8}}>{children}</View>
  );
};

export default Layout;
