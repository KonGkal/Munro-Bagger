import React from 'react';
import {
  SafeAreaView, ImageBackground, StyleSheet,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 25,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    height: 50,
    width: 50,
  },
});

const Picture = ({
  picture,
  retakePicture,
}: {
  picture: any;
  retakePicture: any;
}) => {
  const history = useHistory();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: picture.uri }} style={styles.image} />
      <SafeAreaView style={styles.button}>
        <MaterialIcons onPress={() => retakePicture()} name="photo-camera" size={24} color="black" />
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <MaterialIcons onPress={() => history.push('/uploadPicture')} name="check-circle-outline" size={24} color="black" />
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
        <MaterialIcons onPress={() => history.push('/camera')} name="highlight-remove" size={24} color="black" />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Picture;
