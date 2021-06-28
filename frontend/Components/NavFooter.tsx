import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  navFooter: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#427AA1',
    position: 'absolute',
    bottom: 0,
  },
});

const NavFooter = () => {
  const history = useHistory();
  return (
    <View style={styles.navFooter}>
      <MaterialIcons name="home" size={28} onPress={() => history.push('/explore')} />
      <MaterialIcons name="terrain" size={28} onPress={() => history.push('/mountain')} />
      <MaterialIcons name="person" size={28} onPress={() => history.push('/profile')} />
    </View>
  );
};

export default NavFooter;
