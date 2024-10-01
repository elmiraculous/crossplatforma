import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyledView = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.text}>This is a styled View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 10,
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default StyledView;
