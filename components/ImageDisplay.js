import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImageDisplay = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/favicon.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageDisplay;
