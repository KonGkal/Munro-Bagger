import React, { useEffect } from 'react';
import {
  SafeAreaView, Text, StyleSheet, Image, View,
} from 'react-native';
import { useParams } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMountain } from '../store/getOneMountain.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0,
  },
});

const MountainProfile = () => {
  const { id } = useParams<{ id: string }>();
  const {
    name, imageUrl, Pictures, Peak, Statuses,
  } = useSelector((state:any) => state.oneMountain.mountain);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <Text style={styles.title}>
        Information about
        {' '}
        {name}
      </Text>
      <Text>
        Elevation:
        {' '}
        {Peak?.elevation}
        m
      </Text>
      <Text>
        Status:
        {' '}
        {Statuses?.climbed ? 'Climbed' : 'Not Climbed'}
      </Text>
      <ImageGrid list={Pictures} />
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;